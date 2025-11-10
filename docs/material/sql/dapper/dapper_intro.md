---
title: Dapper - Introduktion
description: Kom igång med Dapper för att köra SQL mot MariaDB/MySQL i .NET.
icon: material/code-braces
---

# Dapper

[Dapper](https://github.com/DapperLib/Dapper) är en Micro ORM (Object-Relational Mapper) för .NET.  
Den gör det enkelt och snabbt att köra SQL-frågor och mappa resultaten till C#-objekt.

## Installation

Skapa nytt projekt och lägg till paketen:

```csharp
dotnet new console
dotnet add package Dapper
dotnet add package MySql.Data
```

`MySql.Data` behövs för MariaDB/MySQL.

## Anslutning

```csharp
using System.Data;
using MySql.Data.MySqlClient;
using Dapper;

string connectionString = "Server=min.adress.skola.com;Database=schooldb;User Id=root;Password=yourpassword;";
using IDbConnection db = new MySqlConnection(connectionString);
```

## Vad är IDbConnection?

`IDbConnection` är ett **interface i .NET** (inte en del av Dapper). Det definierar gemensamma metoder och properties för alla databasanslutningar, oavsett om det är **SQL Server**, **MariaDB/MySQL**, **SQLite** eller något annat.

Exempel på klasser som implementerar `IDbConnection`:

- `SqlConnection` (SQL Server)
- `MySqlConnection` (MariaDB/MySQL)
- `SqliteConnection` (SQLite)

Genom att använda `IDbConnection` kan du skriva kod som är oberoende av vilken databas du använder.

## Hur Dapper använder IDbConnection

Dapper **utökar** `IDbConnection` genom att lägga till sina metoder (`Query`, `Execute`, osv.) som **extension methods**.  
Det betyder att Dapper inte definierar ett nytt interface, utan i stället vidareutvecklar `IDbConnection` genom att lägga till nya metoder.
