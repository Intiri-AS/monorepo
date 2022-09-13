using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IProjectRepository: IRepositoryBase<Project>
	{
		// Admin
		Task<IEnumerable<Project>> GetProjects();
		Task<Project> GetProjectById(int id);

		// End user
		Task<IEnumerable<Project>> GetUserProjects();
		Task<Project> GetUserProjectById(int id);
	}
}
