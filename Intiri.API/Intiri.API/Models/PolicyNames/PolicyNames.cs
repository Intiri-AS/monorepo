namespace Intiri.API.Models.PolicyNames
{
	public class PolicyNames
	{
		public const string AdminPolicy = "AdminPolicy";
		public const string ClientPolicy = "ClientPolicy";
		public const string PartnerPolicy = "PartnerPolicy";
		public const string DesignerPolicy = "DesignerPolicy";
		public const string MoodboardPolicy = "MoodboardPolicy";
		public const string ClientMoodboardPolicy = "ClientMoodboardPolicy";
		public const string ProductPolicy = "ProductPolicy";

		public static List<string> Values = new() {
			AdminPolicy,
			ClientPolicy,
			DesignerPolicy,
			MoodboardPolicy
		};
	}
}
