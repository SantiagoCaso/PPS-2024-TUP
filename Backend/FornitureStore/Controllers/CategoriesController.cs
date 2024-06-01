using Microsoft.AspNetCore.Mvc;

namespace FornitureStore.Controllers
{
    public class CategoriesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
