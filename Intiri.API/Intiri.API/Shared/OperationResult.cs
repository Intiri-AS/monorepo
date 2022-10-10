namespace Intiri.API.Shared
{
	public class OperationResult<T>
	{
		public T Result { get; set; }
		public bool IsSuccess { get; set; }
		public string ErrorMessage { get; set; }
	}
}
