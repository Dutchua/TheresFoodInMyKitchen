using Microsoft.AspNetCore.Mvc;

namespace MysteryFoodApi.Controllers
{
  public class RatingController : Controller
  {
    public IActionResult Index()
    {
      return View();
    }
  }
}
