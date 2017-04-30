using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices
{
    public static class CrudExtenders
    {
        #region Helpers

        static Dictionary<Type, string> TableNames { get; set; }

        static CrudExtenders()
        {
            TableNames = new Dictionary<Type, string>();
        }

        static string GetTableNameFromType<T>()
            where T : BaseModel<T>
        {
            var modelType = typeof(T);
            if (!(TableNames.ContainsKey(modelType)))
            {
                var attribute = modelType.GetTypeInfo().GetCustomAttributes<TableNameAttribute>();
                if (attribute != null && attribute.Count() == 1)
                    TableNames.Add(modelType, attribute.First().Name);
                else
                    TableNames.Add(modelType, modelType.Name);
            }

            return TableNames[modelType];
        }

        static IMongoCollection<T> GetModelDbCollection<T>()
            where T : BaseModel<T>
        {
            CheckDatabase();
            return DbSettings.Database.GetCollection<T>(GetTableNameFromType<T>());
        }

        static void CheckDatabase()
        {
            if (DbSettings.Database == null)
                throw new InvalidOperationException("The database instance is null.");
        }

        #endregion

        #region Getters

        public static async Task<IEnumerable<T>> GetAllItems<T>(this IGetModel<T> model)
            where T : BaseModel<T>
        {
            return await GetItems(model, new BsonDocument());
        }

        public static async Task<IEnumerable<T>> GetItemById<T>(this IGetModel<T> model, ObjectId id)
            where T : BaseModel<T>
        {
            var filters = Builders<T>.Filter.Eq(m => m.Id, id);
            return await GetItems(model, filters);
        }

        public static async Task<IEnumerable<T>> GetItems<T>(this IGetModel<T> model, FilterDefinition<T> filters)
            where T : BaseModel<T>
        {
            var collection = GetModelDbCollection<T>();
            var remoteCollection = await collection.FindAsync<T>(filters);
            return remoteCollection.ToEnumerable();
        }

        #endregion

        #region Setters

        public static async Task Update<T>(this ISetModel<T> model, ObjectId id, UpdateDefinition<T> update)
            where T : BaseModel<T>
        {
            var collection = GetModelDbCollection<T>();
            var filters = Builders<T>.Filter.Eq(m => m.Id, id);
            await collection.UpdateOneAsync(filters, update);
        }

        public static async Task Save<T>(this ISetModel<T> model)
            where T : BaseModel<T>
        {
            if (!(model is T))
                throw new InvalidOperationException("The model is of wrong type.");

            var collection = GetModelDbCollection<T>();
            await collection.InsertOneAsync(model as T);
        }

        #endregion

        #region Deleters

        public static async Task Delete<T>(this IDeleteModel<T> model)
            where T : BaseModel<T>
        {
            if (!(model is T))
                throw new InvalidOperationException("The model is of wrong type.");

            var collection = GetModelDbCollection<T>();
            var filters = Builders<T>.Filter.Eq(m => m.Id, ((T)model).Id);
            await collection.DeleteOneAsync(filters);
        }

        #endregion
    }
}
