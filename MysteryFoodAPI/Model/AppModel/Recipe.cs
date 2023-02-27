namespace MysteryFoodApi.Models.AppModel
{
  class Recipe
  {
    public int recipeId { get; set; }
    public string name { get; set; }
    public string description { get; set; }
    public string cuisine { get; set; }
    public string photo { get; set; }
    public int status { get; set; }

    public Recipe(int recipeId)
    {
      this.recipeId = recipeId;
    }

    public Recipe(string name, string description, string cuisine, string photo, int status)
    {
      this.name = name;
      this.description = description;
      this.cuisine = cuisine;
      this.photo = photo;
      this.status = status;
    }

    public Recipe(int recipeId, string name, string description, string cuisine, string photo, int status)
    {
      this.recipeId = recipeId;
      this.name = name;
      this.description = description;
      this.cuisine = cuisine;
      this.photo = photo;
      this.status = status;
    }
  }
}
