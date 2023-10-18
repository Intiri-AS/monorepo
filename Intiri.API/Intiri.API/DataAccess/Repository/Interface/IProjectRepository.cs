using Intiri.API.Models.Project;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IProjectRepository : IRepositoryBase<Project>
    {
        Task<IEnumerable<Project>> GetProjects();
        Task<IEnumerable<Project>> GetProjectsBasicInfoForUser(int userId);
        Task<Project> GetProjectById(int id);
        Task<Project> GetLastProjectForUser(int userId);
        Task<Project> GetProjectByName(string projectName);

        Task<Project> GetProjectWithMoodboardsForUser(int projectId);

        Task<Project> GetProjectWithCollections(int projectId);
    }
}
