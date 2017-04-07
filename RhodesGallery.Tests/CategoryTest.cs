using Microsoft.VisualStudio.TestTools.UnitTesting;
using RhodesGallery.WebServices;
using System.Threading.Tasks;

namespace RhodesGallery.Tests
{
    [TestClass]
    public class CategoryTest : BaseTest
    {
        [TestMethod]
        public async Task GetCategoryTest()
        {
            var controller = new CategoriesController(this.GetTestSettings());
            var result = await controller.Get("12");
            Assert.IsNotNull(result);
        }
    }
}
