using Npgsql;
namespace MysteryFoodApi.Utility
{
  class DatabaseConnection
  {
    public static NpgsqlConnection Connection;

    public void Connect()
    {
      try
      {
        Connection = new NpgsqlConnection(Settings.connString);
        Connection.Open();
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
      }
    }

    public void Disconnect()
    {
      try
      {
        Connection.Close();
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
      }
    }

    public NpgsqlConnection GetConn()
    {
      return Connection;
    }
  }
}
