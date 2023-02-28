using Npgsql;

namespace MysteryFoodApi.Model.AppModel
{
  public class Rating
  {
    public int ratingId { get; set; }
    public int recipeId { get; set; }
    public int rating { get; set; }
    public int status { get; set; }

    public Rating(int rating)
    {
      this.ratingId = ratingId;
    }
    
    public Rating (int ratingId, int recipeId, int rating, int status)
    {
      this.ratingId = ratingId;
      this.recipeId = recipeId;
      this.rating = rating;
      this.status = status;
    }

    public static Rating MapToRating(NpgsqlDataReader reader)
    {
      try
      {
        int ratingId = (int)(reader["ratingid"] as int?);
        int recipeId = (int)(reader["recipeid"] as int?);
        int rating= (int)(reader["rating"] as int?);
        int status = (int)(reader["status"] as int?);
        return new Rating(ratingId, recipeId, rating, status);
      }
      catch (NullReferenceException e)
      {
        return new Rating(0,0,0,1);
      }
    }
  }
}
