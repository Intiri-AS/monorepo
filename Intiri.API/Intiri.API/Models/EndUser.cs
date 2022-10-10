namespace Intiri.API.Models
{
	public class EndUser : User
	{
		#region Constructors
		public EndUser()
		{
			CreatedProjects = new HashSet<Project.Project>();
		}

		#endregion Constructors

		#region Properties

		public ICollection<Project.Project> CreatedProjects { get; set; }

		#endregion Properties
	}
}
