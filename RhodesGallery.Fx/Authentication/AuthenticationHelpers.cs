using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace RhodesGallery.Fx
{
    public static class AuthenticationHelpers
    {
        public static Task<ErrorInfo> TryAuthenticate(string email, string password)
        {
            if (email == @"ciutaglione@hotmail.com" && password == "pituHermosa")
            {
                return Task.FromResult(new ErrorInfo()
                {
                    Error = string.Empty
                });
            }
            else
                return Task.FromResult(new ErrorInfo()
                {
                    Error = "The password or the email was incorrect."
                });
        }
    }
}
