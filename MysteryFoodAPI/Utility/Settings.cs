namespace MysteryFoodApi.Utility
{
  public class Settings
  {
    public string Secret { get; set; }
    public string GoogleClientId { get; set; }
    public const string connString = "Host=localhost;Port=5432;Username=postgres;Password=123456;Database=PropertyManager";
    public const string RecipeTable = "recipe";
    public const string RatingTable = "rating";
    private static string _googleClientId = "364147813428-he4meho4gcbdisjfb88dda3lhts1p9a6.apps.googleusercontent.com";
    public string Secret { get; set; }

    public string GoogleClientId
    {
        get => _googleClientId;
        set => _googleClientId = value;
    }
  }
}
