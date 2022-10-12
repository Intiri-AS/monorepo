namespace Intiri.API.Models.RoleNames;

public static class RoleNames
{
    public const string Admin = "Admin";
    public const string FreeEndUser = "FreeEndUser";
    public const string PremiumEndUser = "PremiumEndUser";
    public const string InternalDesigner = "InternalDesigner";
    public const string ExternalDesigner = "ExternalDesigner";
    public const string Partner = "Partner";

    public static List<string> Values = new List<string>() {
        Admin,
        FreeEndUser,
        PremiumEndUser,
        InternalDesigner,
        ExternalDesigner,
        Partner
    };
}
