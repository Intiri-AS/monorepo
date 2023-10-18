using Microsoft.AspNetCore.Identity;

namespace Intiri.API.Models
{
    public class UserRole : IdentityUserRole<int>
    {
        #region Constructors

        public UserRole() { }

        public UserRole(int userId, int roleId)
        {
            UserId = userId;
            RoleId = roleId;
        }

        #endregion Constructors

        #region Properties

        public User User { get; set; }

        public Role Role { get; set; }

        #endregion Properties
    }
}
