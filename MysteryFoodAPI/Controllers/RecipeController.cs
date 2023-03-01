using MysteryFoodApi.Model.AppModel;
using MysteryFoodApi.CRUD;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace MysteryFoodApi.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class RecipeController : Controller
  {
    [HttpPost(Name = "RecipeInsert")]
    public IActionResult RecipeInsert(string description, string instruction, int cuisineId, string imageUrl)
    {
      Recipe recipe = new Recipe(description, instruction, cuisineId, imageUrl, 0);
      return new ObjectResult(RecipeQuery.Insert(recipe));
    }

    [HttpGet(Name = "RecipeSelectAll")]
    public IActionResult RecipeSelectAll()
    {
      return new ObjectResult(RecipeQuery.SelectAll());
    }

    [HttpGet("{recipeId}", Name = "recipeSelectByID")]
    public IActionResult AttendeeSelectId(int recipeId)
    {
      Recipe recipe = new Recipe(recipeId);
      Recipe query = RecipeQuery.SelectByID(recipe);
      return new ObjectResult(query.recipeId == 0 ? HttpStatusCode.NotFound : query);
    }

    [HttpDelete("{recipeId}", Name = "RecipeSoftDelete")]
    public IActionResult RecipeSoftDelete(int recipeId)
    {
      Recipe recipe = new Recipe(recipeId);
      return new ObjectResult(RecipeQuery.SoftDelete(recipe));
    }

    [HttpPatch("{recipeId}", Name = "RecipeUpdate")]
    public IActionResult RecipeUpdate(int recipeId, string description="", string instruction="", int cuisineId=0, string imageUrl="")
    {
      Recipe recipe = new Recipe(recipeId, description, instruction, cuisineId, imageUrl, 0);
      return new ObjectResult((RecipeQuery.Update(recipe) == 1) ? HttpStatusCode.OK : HttpStatusCode.BadRequest);
    }
  }
}

