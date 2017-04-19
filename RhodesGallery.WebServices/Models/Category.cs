using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization.Attributes;

namespace RhodesGallery.WebServices.Models
{
    public class Category : BaseContext<Poem>
    {
        [BsonElement("name")]
        public string Name { get; set; }

        public Category() 
            : base()
        {

        }

        public Category(IOptions<Settings> settings) 
            : base(settings)
        {

        }
    }
}
