namespace MysteryFoodApi.Model.AppModel
{
  class Ingredients
  {
    public int ingredientId { get; set; }
    public string ingredientName { get; set; }
    public int allergy { get; set; }
    public int status { get; set; }

    public Ingredients(int ingredientId)
    {
      this.ingredientId = ingredientId;
    }

    public Ingredients(string ingredientName, int allergy, int status)
    {
      this.ingredientName = ingredientName;
      this.allergy = allergy;
      this.status = status;
    }

    public Ingredients(int ingredientId, string ingredientName, int allergy, int status)
    {
      this.ingredientId = ingredientId;
      this.ingredientName = ingredientName;
      this.allergy = allergy;
      this.status = status;
    }
  }
}
