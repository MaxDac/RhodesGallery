using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices
{
    public class ExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionHandlerMiddleware(RequestDelegate next)
        {
            this._next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await this._next(context);
            }
            catch (Exception ex)
            {
                Console.WriteLine("An exception occoured in the program: ", ex);
            }
        }
    }
}
