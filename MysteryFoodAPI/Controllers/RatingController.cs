using MysteryFoodApi.Model.AppModel;
using MysteryFoodApi.CRUD;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace MysteryFoodApi.Controllers
{
    [Route("[controller]")]
    public class RatingController : Controller
    {
        [HttpPost(Name = "RatingInsert")]
        public IActionResult RatingInsert(int ratingId, int recipeId, int rating)
        {
            Rating ratingObject = new Rating(ratingId, recipeId, ratingId, 0);
            return new ObjectResult(RatingQuery.Insert(ratingObject));
        }

        [HttpGet(Name = "RatingSelectAll")]
        public IActionResult RatingSelectAll()
        {
            return new ObjectResult(RatingQuery.SelectAll());
        }

        [HttpGet("{ratingId}", Name = "RatingSelectByID")]
        public IActionResult RatingSelectId(int ratingId)
        {
            Rating rating = new Rating(ratingId);
            Rating query = RatingQuery.SelectByID(rating);
            return new ObjectResult(query.recipeId == 0 ? HttpStatusCode.NotFound : query);
        }

        [HttpDelete("{ratingId}", Name = "RatingSoftDelete")]
        public IActionResult RatingSoftDelete(int ratingId)
        {
            Rating rating = new Rating(ratingId);
            return new ObjectResult(RatingQuery.SoftDelete(rating));
        }

        [HttpPatch("{ratingId}", Name = "RatingUpdate")]
        public IActionResult RatingUpdate(int ratingId, int recipeId, int rating)
        {
            Rating ratingObject = new Rating(ratingId, recipeId, rating, 0);
            return new ObjectResult((RatingQuery.Update(ratingObject) == 1) ? HttpStatusCode.OK : HttpStatusCode.BadRequest);
        }
    }
}

