﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace RhodesGallery.WebServices
{
    public class ErrorInfo
    {
        [JsonProperty("error")]
        public string Error { get; set; }
    }
}
