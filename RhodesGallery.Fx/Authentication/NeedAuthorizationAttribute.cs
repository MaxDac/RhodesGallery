using Microsoft.AspNetCore.Mvc.Filters;

namespace RhodesGallery.Fx
{
    public class NeedAuthorizationAttribute : ActionFilterAttribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {

        }
    }
}
