using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RhodesGallery.Fx;
using System;
using System.Threading.Tasks;

namespace RhodesGallery.Web.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Authenticate(string email, string password)
        {
            var error = await AuthenticationHelpers.TryAuthenticate(email, password);

            if (error.HasErrors)
                return new DefaultController().Home();
            else
            {
                HttpContext.Session.SetInt32(email, (int)AuthenticationState.Admin);
                return Home();
            }
        }

        [NeedAuthorization]
        public IActionResult Home()
        {
            return View();
        }
        
        [Route("/Admin/Category/{id}")]
        public IActionResult Category(string id)
        {
            return View();
        }

        [Route("/Admin/Category/{id}")]
        [HttpPost]
        public IActionResult CategoryResult(string id)
        {
            return View();
        }

        [Route("/Admin/Poems/{id}")]
        public IActionResult Poems(string id)
        {
            return View();
        }

        [Route("/Admin/Poems/{id}")]
        [HttpPost]
        public IActionResult PoemsResult(string id)
        {
            return View();
        }
    }
}