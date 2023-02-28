using Npgsql;
using MysteryFoodApi.Model.AppModel;
using MysteryFoodApi.Utility;

namespace MysteryFoodApi.CRUD
{
  public static class RatingQuery
  {
    public static int Insert(Rating rating)
    {
      string sqlcommand = $"INSERT INTO {Settings.RecipeTable} (rating, status) VALUES (@rating::bit, @status::bit)";
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        command.Parameters.AddWithValue("rating", rating.rating);
        command.Parameters.AddWithValue("status", rating.status);
        int result = (int)command.ExecuteNonQuery();
        return result;
      }
    }

    public static Rating SelectByID(Rating rating)
    {
      string sqlcommand = $"SELECT * FROM {Settings.RatingTable} WHERE ratingid = {rating.ratingId}";
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        using (NpgsqlDataReader reader = command.ExecuteReader())
        {
          while (reader.Read())
          {
            Rating mapRating = Rating.MapToRating(reader);
            return mapRating;
          }
        }
        return new Rating(0, 0, 0, 1);
      }
    }

    public static List<Rating> SelectAll()
    {
      string sqlcommand = $"SELECT * FROM {Settings.RatingTable}";
      List<Rating> mapRating = new List<Rating>();
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        using (NpgsqlDataReader reader = command.ExecuteReader())
        {
          while (reader.Read())
          {
            mapRating.Add(Rating.MapToRating(reader));
          }
          return mapRating;
        }
      }
    }
    public static int SoftDelete(Rating rating)
    {
      string sqlcommand = $"UPDATE {Settings.RatingTable} SET status=1::bit WHERE ratingid=(@ratingid) AND recipeid=(@recipeid)";
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        command.Parameters.AddWithValue("ratingid", rating.ratingId);
        command.Parameters.AddWithValue("recipeid", rating.recipeId);
        int result = command.ExecuteNonQuery();
        return result;
      }
    }

    public static int Update(Rating rating)
    {
      UpdateBuilder builder = new UpdateBuilder(Settings.RatingTable);
      builder.Set("rating", rating.rating);
      builder.removeComma();
      builder.Where("ratingid", rating.ratingId);
      builder.BridgeAnd("recipeid", rating.recipeId);

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
