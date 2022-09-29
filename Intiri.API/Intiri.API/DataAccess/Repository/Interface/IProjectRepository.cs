using Intiri.API.Models.Project;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IProjectRepository: IRepositoryBase<Project>
	{
		Task<IEnumerable<Project>> GetProjects();
		Task<IEnumerable<Project>> GetProjectsBasicInfoForUser(int userId);
		Task<Project> GetProjectById(int id);
	}
}
