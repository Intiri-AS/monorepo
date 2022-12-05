using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.DesignerRating;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class DesignerUpdateOutDTO : UserOutDTO
	{
		public string Language { get; set; }
		public ICollection<RoleDTO> Roles { get; set; }
	}
}
