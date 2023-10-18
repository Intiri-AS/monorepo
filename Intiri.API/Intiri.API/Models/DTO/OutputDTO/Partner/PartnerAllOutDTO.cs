namespace Intiri.API.Models.DTO.OutputDTO.Partner
{
    public class PartnerAllOutDTO : PartnerOutDTO
    {
        public IEnumerable<PartnerContactOutDTO> PartnerContacts { get; set; }
        public IEnumerable<ProductOutDTO> Products { get; set; }
    }
}
