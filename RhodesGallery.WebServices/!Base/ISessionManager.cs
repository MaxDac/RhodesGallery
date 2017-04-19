using System;
using System.Collections.Generic;
using System.Text;

namespace RhodesGallery.WebServices
{
    public interface ISessionManager
    {
        string Get(string key);

        string Set(string key, string value);
    }
}
