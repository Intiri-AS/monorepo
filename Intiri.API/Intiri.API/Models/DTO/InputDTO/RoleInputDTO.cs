using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class RoleInputDTO
	{
		[Required]
		public string Name { get; set; }
	}
}
