using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class ProjectNameInDTO
	{
		[Required]
		public string Name { get; set; }
	}
}
