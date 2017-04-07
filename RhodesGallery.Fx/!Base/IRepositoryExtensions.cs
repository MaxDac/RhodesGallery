using MongoDB.Driver;
using System.Linq;
using System.Reflection;

namespace RhodesGallery.Fx
{
    public static class IRepositoryExtensions
    {
        public static FilterDefinition<T> GetFilterById<T>(this IRepository<T> repository, string id)
        {
            return Builders<T>.Filter.Eq("Id", id);
        }

        public static UpdateDefinition<T> GetGenericObjectUpdateById<T>(this IRepository<T> repository, string id, T updateInfo)
            where T : BaseContext<T>
        {
            var updateDefinition = Builders<T>.Update
                .CurrentDate(i => i.UpdateTime);

            var properties = typeof(T).GetTypeInfo().GetProperties().Where(i => i.Name != nameof(BaseContext<T>.Id) || i.Name != nameof(BaseContext<T>.CreateTime) || i.Name != nameof(BaseContext<T>.UpdateItem));
            foreach (var property in properties)
                updateDefinition.Set(_ => property.GetType(), property.GetValue(updateInfo));

            return updateDefinition;
        }
    }
}
