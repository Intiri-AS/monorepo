namespace Intiri.API.Models.DTO.InputDTO
{
	public class AuthEndpointResponseInDTO
	{
		public string AccessToken { get; set; }
		public string IdToken { get; set; }
		public int ExpiresIn { get; set; }
		public string Scope { get; set; }
		public string TokenType { get; set; }
	}
}
