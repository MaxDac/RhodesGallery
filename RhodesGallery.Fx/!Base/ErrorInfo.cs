using System;
using System.Collections.Generic;
using System.Text;

namespace RhodesGallery.Fx
{
    public class ErrorInfo
    {
        public string Error { get; set; }

        public bool HasErrors { get { return !string.IsNullOrEmpty(this.Error); } }
    }
}
