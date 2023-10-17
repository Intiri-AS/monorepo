namespace Intiri.API.Models
{
    public class PartnerContact : User
    {
        #region Properties

        public Partner Partner { get; set; }
        public int PartnerId { get; set; }

        #endregion Properties
    }
}
