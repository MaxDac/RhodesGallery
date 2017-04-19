using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using RhodesGallery.WebServices;

namespace RhodesGallery.WebServices
{
    public abstract class BaseController : Controller
    {
        protected IOptions<Settings> Settings { get; set; }

        public BaseController(IOptions<Settings> settings)
        {
            this.Settings = settings;
        }
    }
}
