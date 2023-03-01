namespace MysteryFoodApi.Model.AppModel
{
  class RecipeIngredients
  {
    public int recipeId { get; set; }
    public int ingredientId { get; set; }
    public int status { get; set; }


    public RecipeIngredients(int recipeId, int ingredientId, int status)
    {
      this.recipeId = recipeId;
      this.recipeId = ingredientId;
      this.status = status;
    }
  }
}
