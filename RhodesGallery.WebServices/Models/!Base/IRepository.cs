using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices.Models
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
