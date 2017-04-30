using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using RhodesGallery.WebServices;

namespace RhodesGallery.WebServices
{
    [Route("services/[controller]")]
    public class UserController : BaseController
    {
        [HttpPost]
        public Task<bool> Authenticated(string email, string password)
        {
            return Task.FromResult(true);
        }
    }
}
