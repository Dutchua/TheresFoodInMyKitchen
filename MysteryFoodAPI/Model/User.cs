using System.ComponentModel.DataAnnotations;
using MysteryFoodApi.Model.AppModel;
using Npgsql;

namespace MysteryFoodApi.Model
{
    public class User
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public byte[] PasswordSalt { get; set; }
        [Required]
        public byte[] PasswordHash { get; set; }
        
        public int status { get; set; }

        public string Token { get; set; }
        public DateTime TokenCreated { get; set; }
        public DateTime TokenExpires { get; set; }

        public User()
        {
            
        }

        public User(string name, string surname, string email, byte[] passwordHash, byte[] passwordSalt)
        {
            this.Name = name;
            this.Surname = surname;
            this.Email = email;
            this.PasswordHash = passwordHash;
            this.PasswordSalt = passwordSalt;
        }

        public static User MapToUser(NpgsqlDataReader reader)
        {
            try
            {
                string name = reader["username"] as string;
                string surname = reader["surname"] as string;
                string email = reader["email"] as string;
                byte[] passwordHash = reader["passwordHash"] as byte[];
                byte[] passwordSalt = reader["passwordSalt"] as byte[];
                return new User(name, surname, email, passwordHash, passwordSalt);
            }
            catch (NullReferenceException e)
            {
                return new User("Josh", "Jennings", "josh@bbd.co.za", System.Text.Encoding.UTF8.GetBytes("1234"), System.Text.Encoding.UTF8.GetBytes("1234"));
            }
        }
    }
    
}
