using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using RhodesGallery.WebServices.Models;
using System;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices
{
    [Route("services/[controller]")]
    public class CategoriesController : BaseController
    {
        [HttpGet]
        public async Task<string> GetAll()
        {
            try
            {
                return JsonConvert.SerializeObject(await new Category().GetAllItems());
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return JsonConvert.SerializeObject(ResponseBase.ForException(ex));
            }
        }

        [HttpGet("{id}")]
        public Task<JsonResult> GetById(string id)
        {
            throw new InvalidOperationException("Fake exception");
        }

        [HttpPut]
        [NeedAuthorization]
        public Task<JsonResult> Create(Category item)
        {
            return Task.FromResult(new JsonResult(item));
        }
    }
}
