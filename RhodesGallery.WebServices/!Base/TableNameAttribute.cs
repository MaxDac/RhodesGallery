using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RhodesGallery.WebServices
{
    public class TableNameAttribute : Attribute
    {
        public string Name { get; set; }

        public TableNameAttribute(string name)
        {
            this.Name = name;
        }
    }
}
