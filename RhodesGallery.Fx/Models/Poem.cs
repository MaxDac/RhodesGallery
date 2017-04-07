using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization.Attributes;

namespace RhodesGallery.Fx.Models
{
    public class Poem : BaseContext<Poem>
    {
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("text")]
        public string Text { get; set; }

        public Poem() : base()
        {

        }

        public Poem(IOptions<Settings> settings) : base(settings)
        {

        }
    }
}
