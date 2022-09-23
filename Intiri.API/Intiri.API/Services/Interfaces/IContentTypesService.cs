namespace Intiri.API.Services.Interfaces;

public interface IContentTypesService
{
    bool IsKnownType(string contentType);

    bool IsImage(string contentType);

    bool IsExcelFile(string contentType);
}
