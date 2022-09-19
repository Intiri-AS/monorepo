using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IProjectRepository: IRepositoryBase<Project>
	{
		Task<IEnumerable<Project>> GetProjects();
		Task<Project> GetProjectById(int id);
	}
}
