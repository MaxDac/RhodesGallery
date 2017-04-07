using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RhodesGallery.Fx
{
    public class BaseContext<T> : IRepository<T>
        where T : BaseContext<T>
    {
        readonly IMongoDatabase _database = null;

        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("createTime")]
        public DateTime CreateTime { get; set; }

        [BsonElement("updateTime")]
        public DateTime UpdateTime { get; set; }

        public BaseContext()
        {

        }

        public BaseContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
                _database = client.GetDatabase(settings.Value.ConnectionString);
        }

        public IMongoCollection<T> Items
        {
            get
            {
                if (this._database != null)
                    return _database.GetCollection<T>(typeof(T).Name);
                else
                    return null;
            }
        }

        public async Task<IEnumerable<T>> GetAllItems()
        {
            return await this.Items.Find(_ => true).ToListAsync();
        }

        public T GetItem(string id)
        {
            return this.Items.Find(this.GetFilterById<T>(id)).FirstOrDefault();
        }

        public void AddItem(T item)
        {
            this.Items.InsertOne(item);
        }

        public async Task<DeleteResult> RemoveItem(string id)
        {
            return await this.Items.DeleteOneAsync(this.GetFilterById<T>(id));
        }

        public async Task<UpdateResult> UpdateItem(string id, T item)
        {
            return await this.Items.UpdateOneAsync(this.GetFilterById<T>(id), this.GetGenericObjectUpdateById(id, item));
        }

        public async Task<DeleteResult> RemoveAllItems()
        {
            return await this.Items.DeleteManyAsync(_ => true);
        }
    }
}
