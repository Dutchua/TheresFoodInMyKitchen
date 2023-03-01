using System.ComponentModel.DataAnnotations;

namespace MysteryFoodApi.Model
{
    public class Register
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set;}
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
