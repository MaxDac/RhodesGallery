using Microsoft.Extensions.Options;
using RhodesGallery.Fx;

namespace RhodesGallery.Tests
{
    public class BaseTest
    {
        protected IOptions<Settings> GetTestSettings()
        {
            return Options.Create(new Settings()
            {
                ConnectionString = "mongodb://admin:KEEN4e!@localhost/RhodesGallery",
                Database = "RhodesGallery"
            }); 
        }
    }
}
