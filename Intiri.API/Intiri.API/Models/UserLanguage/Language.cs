namespace Intiri.API.Models.UserLanguage;

public static class Language
{
    public const string Norway = "NO";
    public const string English = "EN";
    public const string NorwayEnglish = "NO/EN";

    public static List<string> Values = new List<string>() { Norway, English, NorwayEnglish };
}
