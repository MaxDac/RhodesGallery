using MongoDB.Driver;
using System;

namespace RhodesGallery.WebServices
{
    public class DbSettings
    {
        public static string ConnectionString { get; set; }

        public static string DatabaseName { get; set; }

        static MongoClient Client { get; set; }

        static IMongoDatabase Instance { get; set; }

        public static IMongoDatabase Database
        {
            get
            {
                if (Instance == null)
                {
                    if (string.IsNullOrEmpty(ConnectionString))
                        throw new ArgumentNullException(nameof(ConnectionString));
                    if (string.IsNullOrEmpty(DatabaseName))
                        throw new ArgumentNullException(nameof(DatabaseName));

                    Client = new MongoClient(ConnectionString);
                    Instance = Client.GetDatabase(DatabaseName);
                }

                return Instance;
            }
        }
    }
}
