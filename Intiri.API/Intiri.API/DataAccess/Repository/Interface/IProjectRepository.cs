using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IProjectRepository: IRepositoryBase<Project>
	{
		// Admin
		Task<IEnumerable<Project>> GetProjects();
	}
}
