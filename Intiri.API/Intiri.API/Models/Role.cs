using Microsoft.AspNetCore.Identity;

namespace Intiri.API.Models
{
    public class Role : IdentityRole<int>
    {
        #region ctors

        public Role() { }

        public Role(string name)
        {
            Name = name;
        }

        #endregion ctors

        #region Properties

        public ICollection<UserRole> Users { get; set; }

        #endregion Properties
    }
}
