using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetAllItems();

        T GetItem(string id);

        void AddItem(T item);

        Task<DeleteResult> RemoveItem(string id);

        Task<UpdateResult> UpdateItem(string id, T item);

        Task<DeleteResult> RemoveAllItems();
    }
}
