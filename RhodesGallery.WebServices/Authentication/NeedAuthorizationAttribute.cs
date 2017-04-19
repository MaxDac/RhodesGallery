using Microsoft.AspNetCore.Mvc.Filters;

namespace RhodesGallery.WebServices
{
    public class NeedAuthorizationAttribute : ActionFilterAttribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {

        }
    }
}
