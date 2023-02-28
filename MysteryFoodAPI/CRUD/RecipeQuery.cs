using Npgsql;
using MysteryFoodApi.Model.AppModel;
using MysteryFoodApi.Utility;

namespace MysteryFoodApi.CRUD
{
  public static class RecipeQuery
  {
    public static int Insert(Recipe recipe)
    {
      string sqlcommand = $"INSERT INTO {Settings.RecipeTable} (description, instructions, cuisineId, imageUrl, status) VALUES (@description, @instructions, @cuisineId, @imageUrl, @status)";
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        command.Parameters.AddWithValue("description", recipe.description);
        command.Parameters.AddWithValue("instruction", recipe.instruction);
        command.Parameters.AddWithValue("cuisineId", recipe.cuisineId);
        command.Parameters.AddWithValue("imageUrl", recipe.imageUrl);
        command.Parameters.AddWithValue("status", recipe.status);
        int result = (int)command.ExecuteNonQuery();
        return result;
      }
    }

    public static Recipe SelectByID(Recipe recipe)
    {
      string sqlcommand = $"SELECT * FROM {Settings.RecipeTable} WHERE recipeid = {recipe.recipeId}";
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        using (NpgsqlDataReader reader = command.ExecuteReader())
        {
          while (reader.Read())
          {
            Recipe mapRecipe = Recipe.MapToRecipe(reader);
            return mapRecipe;
          }
        }
        return new Recipe("Egg Sandwich", "Put some egg on some bread", 0, "www.google.com", 1);
      }
    }

    public static List<Recipe> SelectAll()
    {
      string sqlcommand = $"SELECT * FROM {Settings.RecipeTable}";
      List<Recipe> mapRecipe = new List<Recipe>();
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        using (NpgsqlDataReader reader = command.ExecuteReader())
        {
          while (reader.Read())
          {
            mapRecipe.Add(Recipe.MapToRecipe(reader));
          }
          return mapRecipe;
        }
      }
    }
    public static int SoftDelete(Recipe recipe)
    {
      string sqlcommand = $"UPDATE {Settings.RecipeTable} SET status=1::bit WHERE recipeid=(@recipeid)";
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        command.Parameters.AddWithValue("recipeid", recipe.recipeId);
        int result = command.ExecuteNonQuery();
        return result;
      }
    }

    public static int Update(Recipe recipe)
    {
      UpdateBuilder builder = new UpdateBuilder(Settings.RecipeTable);
      string name = !string.IsNullOrEmpty(recipe.description) ? builder.Set("description", recipe.description) : "";
      string surname = !string.IsNullOrEmpty(recipe.instruction) ? builder.Set("instruction", recipe.instruction) : "";
      string accessNumber = !string.IsNullOrEmpty(recipe.imageUrl) ? builder.Set("imageurl", recipe.imageUrl) : "";
      builder.removeComma();
      builder.Where("recipeid", recipe.recipeId);

      string sqlcommand = builder.ToString();
      Console.WriteLine(sqlcommand);
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        int result = command.ExecuteNonQuery();
        return result;
      }
    }
  }
}
