using System;
using System.Collections.Generic;
using System.Text;

namespace RhodesGallery.WebServices
{
    public class ErrorInfo
    {
        public string Error { get; set; }

        public bool HasErrors { get { return !string.IsNullOrEmpty(this.Error); } }
    }
}
