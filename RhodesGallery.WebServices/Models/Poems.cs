using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using Microsoft.Extensions.Options;

namespace RhodesGallery.WebServices.Models
{
    public class Poems : BaseContext<Poems>
    {
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("text")]
        public string Text { get; set; }

        public Poems() : base()
        {

        }
        
        public Poems(IOptions<Settings> settings) : base(settings)
        {

        }
    }
}
