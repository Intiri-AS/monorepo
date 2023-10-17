using Intiri.API.Models;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IRoleRepository : IRepositoryBase<Role>
    {
        Task<IEnumerable<string>> GetRolesNames();

        Task<RoleDTO> GetRoleByName(string roleName);
    }
}
