﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices
{
    public interface ISetModel<T> : ICrudModel<T>
        where T : BaseModel<T>
    {
    }
}
