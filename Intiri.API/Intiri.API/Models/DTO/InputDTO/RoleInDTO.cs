using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class RoleInDTO
	{
		[Required]
		public string Name { get; set; }
	}
}
