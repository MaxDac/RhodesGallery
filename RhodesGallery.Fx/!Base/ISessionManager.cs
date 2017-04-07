using System;
using System.Collections.Generic;
using System.Text;

namespace RhodesGallery.Fx
{
    public interface ISessionManager
    {
        string Get(string key);

        string Set(string key, string value);
    }
}
