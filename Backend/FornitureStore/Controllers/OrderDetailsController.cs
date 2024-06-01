using Microsoft.AspNetCore.Mvc;

namespace FornitureStore.Controllers
{
    public class OrderDetailsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
