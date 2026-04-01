# WebApplicationFactory

Här är ett exempel på hur WebApplicationFactory kan användas för att konfigurera om databaskontexten i integrationstester så att den använder en delad in-memory SQLite-databas.

```cs
public class ApiIntegrationTests : IClassFixture<WebApplicationFactory<Program>>, IDisposable
{
    private readonly HttpClient _client;
    private readonly SqliteConnection _connection;

    public ApiIntegrationTests(WebApplicationFactory<Program> factory)
    {
        // Keep an in-memory SQLite connection alive for the duration of the test class
        _connection = new SqliteConnection("DataSource=:memory:");
        _connection.Open();

        _client = factory.WithWebHostBuilder(builder =>
        {
            builder.ConfigureServices(services =>
            {
                // Remove the existing AppDbContext registration
                var descriptor = services.SingleOrDefault(
                    d => d.ServiceType == typeof(DbContextOptions<AppDbContext>));
                if (descriptor != null)
                    services.Remove(descriptor);

                // Use the shared in-memory SQLite connection
                services.AddDbContext<AppDbContext>(options =>
                    options.UseSqlite(_connection));

                // Ensure the database is created
                var sp = services.BuildServiceProvider();
                using var scope = sp.CreateScope();
                var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                db.Database.EnsureCreated();
            });
        }).CreateClient();
    }

    public void Dispose()
    {
        _client.Dispose();
        _connection.Dispose();
    }

    // Exempeltest som gör en request mot API:et och verifierar att det returnerar en tom lista av produkter
    [Fact]
    public async Task GetProducts_ReturnsOkAndEmptyList()
    {
        var response = await _client.GetAsync("/products");

        response.EnsureSuccessStatusCode();
        var products = await response.Content.ReadFromJsonAsync<List<Product>>();
        Assert.NotNull(products);
    }
}
```