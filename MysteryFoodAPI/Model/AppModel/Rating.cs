namespace MysteryFoodApi.Model.AppModel
{
  class Rating
  {
    public int ratingId { get; set; }
    public int recipeId { get; set; }
    public int rating { get; set; }
    public int status { get; set; }

    public Rating (int ratingId, int recipeId, int rating, int status)
    {
      this.ratingId = ratingId;
      this.recipeId = recipeId;
      this.rating = rating;
      this.status = status;
    }
  }
}
