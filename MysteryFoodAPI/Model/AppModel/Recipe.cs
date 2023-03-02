using Npgsql;

namespace MysteryFoodApi.Model.AppModel
{
  public class Recipe
  {
    public int recipeId { get; set; }
    public string description { get; set; }
    public string instruction { get; set; }
    public int cuisineId { get; set; }
    public string imageUrl { get; set; }
    public int status { get; set; }

    public Recipe(int recipeId)
    {
      this.recipeId = recipeId;
    }

    public Recipe(string description, string instruction, int cuisineId, string imageUrl, int status)
    {
      this.description = description;
      this.instruction = instruction;
      this.cuisineId = cuisineId;
      this.imageUrl = imageUrl;
      this.status = status;
    }

    public Recipe(int recipeId, string description, string instruction, int cuisineId, string imageUrl, int status)
    {
      this.recipeId = recipeId;
      this.description = description;
      this.instruction = instruction;
      this.cuisineId = cuisineId;
      this.imageUrl = imageUrl;
      this.status = status;
    }

    public static Recipe MapToRecipe(NpgsqlDataReader reader)
    {
      try
      {
        int recipeId = (int)(reader["recipeid"] as int?);
        string description = reader["description"] as string;
        string instruction = reader["instructions"] as string;
        int cuisineId = (int)(reader["cuisineId"] as int?);
        return new Recipe(recipeId, description, instruction, cuisineId, "imageUrl", 0);
      }
      catch (NullReferenceException e)
      {
        return new Recipe("Egg Sandwich", "Put some egg on some bread", 0, "www.google.com", 1);
      }
    }
  }
}
