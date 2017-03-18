using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RhodesGallery.WebServices.Models;
using Microsoft.Extensions.Options;
using System;
using MongoDB.Bson;

namespace RhodesGallery.WebServices.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        IOptions<Settings> Settings { get; set; }

        static ObjectId SelectedId { get; set; }

        public ValuesController(IOptions<Settings> settings)
        {
            this.Settings = settings;
        }

        // GET api/values
        [HttpGet]
        public string Get()
        {
            //Inserting the casual id
            try
            {
                var rawId = new byte[12];
                new Random().NextBytes(rawId);
                var id = new ObjectId(rawId);
                new Poems(this.Settings).AddItem(new Poems
                {
                    Id = id,
                    CreateTime = DateTime.Now,
                    UpdateTime = DateTime.Now,
                    Title = "This is a test title",
                    Text = "This is a try text"
                });

                return "OK";
            }
            catch (Exception ex)
            {
                return string.Format("An exception occoured: {0}.", ex);
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(string id)
        {
            try
            {
                var decodedId = new ObjectId(id);
                var item = new Poems(this.Settings).GetItem(id);
                return JsonConvert.SerializeObject(item);
            }
            catch (Exception ex)
            {
                return string.Format("An error occoured: {0}.", ex);
            }
        }

        // POST api/values
        [HttpPost]
        public async Task Post([FromBody]string value)
        {

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
