using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace RhodesGallery.WebServices
{
    public class BaseModel<T> : ResponseBase
        where T : BaseModel<T>
    {
        [BsonId]
        [JsonProperty("id")]
        //[JsonConverter()]
        public ObjectId Id { get; set; }

        [BsonElement("name")]
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
