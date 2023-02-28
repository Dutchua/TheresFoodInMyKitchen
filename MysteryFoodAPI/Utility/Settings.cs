namespace MysteryFoodApi.Utility
{
  public class Settings
  {
    public string Secret { get; set; }
    public string GoogleClientId { get; set; }
    public const string connString = "Host=localhost;Port=5432;Username=postgres;Password=123456;Database=PropertyManager";
    public const string RecipeTable = "recipe";
    public const string RatingTable = "rating";
  }
}
