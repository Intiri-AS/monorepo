using Intiri.API.Services.Interfaces;

namespace Intiri.API.Services;

public class ContentTypesService : IContentTypesService
{
    public const string JPG = "image/jpeg";
    public const string PNG = "image/png";
    public const string PDF = "application/pdf";
    public const string CSV = "text/csv";
    public const string DOC = "application/msword";
    public const string DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    public const string JSON = "application/json";
    public const string SVG = "image/svg+xml";
    public const string TXT = "text/plain";
    public const string XLS = "application/vnd.ms-excel";
    public const string XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    public const string ZIP = "application/zip";
    public const string _7Z = "application/x-7z-compressed";
    public static List<string> Values = new List<string>() {
        JPG,
        PNG,
        PDF,
        CSV,
        DOC,
        DOCX,
        JSON,
        SVG,
        TXT,
        XLS,
        XLSX,
        ZIP,
        _7Z
    };

    public bool IsImage(string contentType)
    {
        return contentType == JPG || contentType == PNG;
    }

    public bool IsExcelFile(string contentType)
    {
        return contentType == XLS || contentType == XLSX;
    }

    public bool IsKnownType(string contentType)
    {
        return Values.Contains(contentType);
    }
}
