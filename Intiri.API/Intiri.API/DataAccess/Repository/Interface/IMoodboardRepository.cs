using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IMoodboardRepository: IRepositoryBase<Moodboard>
	{
		Task<IEnumerable<Moodboard>> GetMoodboards();
		Task<IEnumerable<Moodboard>> GetMoodboardsByIdsList(ICollection<int> ids);
	}
}
