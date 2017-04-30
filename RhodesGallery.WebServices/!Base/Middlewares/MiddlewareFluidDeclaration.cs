using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices
{
    public static class MiddlewareFluidDeclaration
    {
        public static IApplicationBuilder AddExceptionHandling(IApplicationBuilder builder)
        {
            builder.UseMiddleware<ExceptionHandlerMiddleware>();
            return builder;
        }
    }
}
