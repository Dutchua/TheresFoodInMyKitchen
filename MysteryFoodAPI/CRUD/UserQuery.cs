using Npgsql;
using MysteryFoodApi.Model;
using MysteryFoodApi.Utility;
using NpgsqlTypes;

namespace MysteryFoodApi.CRUD
{
  public static class UserQuery
  {
    public static int Insert(User user)
    {
      string sqlcommand = $"INSERT INTO \"{Settings.UserTable}\" (userName, surname, email, passwordhash, passwordsalt, status) VALUES (@name, @surname, @email, encode(E'@passwordhash'::bytea, 'escape'), @passwordsalt::bytea, 0::bit)";
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {

        command.Parameters.AddWithValue("name", user.Name);
        command.Parameters.AddWithValue("surname", user.Surname);
        command.Parameters.AddWithValue("email", user.Email);
        command.Parameters.AddWithValue("passwordhash", user.PasswordHash);

        int result = (int)command.ExecuteNonQuery();
        return result;
      }
    }

    public static List<User> SelectAll()
    {
      string sqlcommand = $"SELECT * FROM \"{Settings.UserTable}\"";
      List<User> mapUser = new List<User>();
      using (NpgsqlCommand command = new NpgsqlCommand(sqlcommand, DatabaseConnection.Connection))
      {
        using (NpgsqlDataReader reader = command.ExecuteReader())
        {
          while (reader.Read())
          {
            mapUser.Add(User.MapToUser(reader));
          }

          return mapUser;
        }
      }
    }
  }
}