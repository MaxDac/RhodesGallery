using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;

namespace RhodesGallery.WebServices
{
    public class ResponseBase
    {
        const string DefaultError = "An error occoured to the server, sorry for the inconvenience.";

        [BsonIgnore]
        [JsonProperty("error")]
        public string Error { get; set; }

        [BsonIgnore]
        [JsonProperty("hasError")]
        public bool HasError { get { return !string.IsNullOrEmpty(this.Error); } }

        public static ResponseBase WithDefaultError
        {
            get
            {
                return new ResponseBase()
                {
                    Error = DefaultError
                };
            }
        }

        public static ResponseBase ForException(Exception ex)
        {
            var error = string.Format("{0}\nThe error: {1}.", DefaultError, ex.ToString());
            return new ResponseBase()
            {
                Error = error
            };
        }
    }
}
