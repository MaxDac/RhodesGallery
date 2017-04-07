using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using System;
using MongoDB.Bson;
using RhodesGallery.Fx;
using RhodesGallery.Fx.Models;

namespace RhodesGallery.WebServices
{
    [Route("services/[controller]")]
    public class PoemsController : BaseController
    {
        static ObjectId SelectedId { get; set; }

        public PoemsController(IOptions<Settings> settings) : base(settings)
        {
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
                new Poem(this.Settings).AddItem(new Poem
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
                var item = new Poem(this.Settings).GetItem(id);
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
