# WebApplicationFactory

Här är ett exempel på hur WebApplicationFactory kan användas för att konfigurera om databaskontexten i integrationstester så att den använder en delad in-memory SQLite-databas.

```cs
using System.Net;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MockingDemo.Core; //Detta är namespacet där AppDbContext och Product finns, anpassa efter din projektstruktur

namespace MockingDemo.Api.Tests; // Anpassa namespace efter din projektstruktur

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

                services.RemoveDbContext<AppDbContext>();    

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