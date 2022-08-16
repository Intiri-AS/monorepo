namespace Intiri.API.Models.DTO.OutputDTO
{
	public class RoleWithPermissonsDTO : RoleDTO
	{
		public IEnumerable<string> Permissions { get; set; }
	}
}
