using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class ProductTypeInDTO
	{
		[Required]
		public string Name { get; set; }
	}
}
