using Microsoft.AspNetCore.Mvc;

namespace FornitureStore.Controllers
{
    public class OdersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
