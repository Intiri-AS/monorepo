using System.Security.Claims;

namespace Intiri.API.Extension
{
	public static class Utils
	{
		public static Dictionary<int, int> CountArrayElementsFrequency (ICollection<int> nums) {
			Dictionary<int, int> frequencyCount = new Dictionary<int, int>();

			foreach (int num in nums) {
				if (!frequencyCount.ContainsKey(num)) {
					frequencyCount[num] = 1;
				} else {
					frequencyCount[num] = ++frequencyCount[num];
				}
			}

			return frequencyCount;
		}
	}
}
