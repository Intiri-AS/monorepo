namespace Intiri.API.Models.Errors
{
    public class APIException
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}
