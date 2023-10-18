using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.DataAccess.Repository
{
    public class RoleRepository : RepositoryBase<Role>, IRoleRepository
    {
        #region Fields

        private readonly IMapper _mapper;

        #endregion Fields

        #region ctors

        public RoleRepository(DataContext context, IMapper mapper)
            : base(context)
        {
            _mapper = mapper;
        }

        #endregion ctors

        #region Public methods

        public async Task<IEnumerable<string>> GetRolesNames()
        {
            return await Get(role => role.Name);
        }

        public async Task<RoleDTO> GetRoleByName(string roleName)
        {
            return await SingleOrDefaultAsync<RoleDTO>(role => role.Name == roleName, _mapper);
        }

        #endregion Public methods
    }
}
