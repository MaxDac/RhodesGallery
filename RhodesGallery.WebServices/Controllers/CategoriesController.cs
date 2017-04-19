using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using RhodesGallery.WebServices.Models;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices
{
    [Route("services/[controller]")]
    public class CategoriesController : BaseController
    {
        public CategoriesController(IOptions<Settings> settings) : base(settings)
        {
        }

        [HttpGet("{id}")]
        public Task<JsonResult> Get(string id)
        {
            return Task.FromResult(new JsonResult(id));
        }

        [HttpPut]
        public Task<JsonResult> Create(Category item)
        {
            return Task.FromResult(new JsonResult(item));
        }
    }
}
