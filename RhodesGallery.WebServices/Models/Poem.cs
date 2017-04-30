using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization.Attributes;

namespace RhodesGallery.WebServices.Models
{
    public class Poem : BaseModel<Poem>
    {
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("text")]
        public string Text { get; set; }

        public Poem() 
            : base()
        {

        }
    }
}
