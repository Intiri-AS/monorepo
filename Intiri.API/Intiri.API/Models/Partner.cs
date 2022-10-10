namespace Intiri.API.Models
{
	public class Partner
	{
		#region Constructors

		public Partner()
		{
			PartnerContacts = new HashSet<PartnerContact>();
			Products = new HashSet<Product.Product>();
		}

		#endregion Constructors

		#region Properties

		public int Id { get; set; }
		public string Name { get; set; }
		public DateTime Created { get; set; } = DateTime.UtcNow;
		public string PhoneNumber { get; set; }
		public string Email { get; set; }
		public string Street { get; set; }
		public string PostalCode { get; set; }
		public string City { get; set; }
		public string Country { get; set; }
		public string CountryCode { get; set; }
		public string LogoPath { get; set; }
		public string LogoPublicId { get; set; }
		public ICollection<PartnerContact> PartnerContacts { get; set; }
		public ICollection<Product.Product> Products { get; set; }

		#endregion Properties
	}
}
