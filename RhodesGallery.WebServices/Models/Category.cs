using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization.Attributes;

namespace RhodesGallery.WebServices.Models
{
    public class Category : BaseModel<Category>, IGetModel<Category>, ISetModel<Category>, IDeleteModel<Category>
    {
        public Category() 
            : base()
        {

        }
    }
}
