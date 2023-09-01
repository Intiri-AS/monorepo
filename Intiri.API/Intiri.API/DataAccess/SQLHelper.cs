using AutoMapper.Execution;
using Microsoft.Data.SqlClient;
using Newtonsoft.Json;
using System.Data;
using System.Security.AccessControl;
using System.Text;
using Twilio.TwiML.Voice;

namespace Intiri.API.DataAccess
{
    public class SQLHelper
    {
        private readonly IConfiguration _configuration;
        private readonly string connectionString;

        public SQLHelper(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public async Task<string> GetJsonObject(string ProceduerName, object[,] ParamValue)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandText = ProceduerName;
                    cmd.Connection = con;
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter[] param = new SqlParameter[ParamValue.GetUpperBound(0) + 1];
                    for (int i = 0; i < param.Length; i++)
                    {
                        param[i] = new SqlParameter("@" + ParamValue[i, 0].ToString(), (ParamValue[i, 1] == null ? null : (ParamValue[i, 1].ToString() == "null" ? null : ParamValue[i, 1].ToString())));
                    }
                    cmd.Parameters.AddRange(param);
                    if (con.State != ConnectionState.Open) { con.Open(); }

                    SqlDataReader reader = await cmd.ExecuteReaderAsync();
                    StringBuilder sb = new StringBuilder();
                    while (reader.Read())
                        sb.Append(reader.GetSqlString(0).Value);
                    con.Close();
                    return sb.ToString();
                }
                catch (Exception ee)
                {
                    return ee.Message;
                }
                finally
                {
                    if (con.State == ConnectionState.Open)
                        con.Close();
                }
            }
        }

        public object GetJsonResult(string ProceduerName, object[,] ParamValue)
        {
            object mRes = null;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandText = ProceduerName;
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlParameter[] param = new SqlParameter[ParamValue.GetUpperBound(0) + 1];
                    for (int i = 0; i < param.Length; i++)
                    {
                        param[i] = new SqlParameter("@" + ParamValue[i, 0].ToString(), (ParamValue[i, 1] == null ? null : (ParamValue[i, 1].ToString() == "null" ? null : ParamValue[i, 1].ToString())));
                    }
                    cmd.Parameters.AddRange(param);
                    if (con.State != ConnectionState.Open) { con.Open(); }

                    SqlDataAdapter myDAP = new SqlDataAdapter(cmd);
                    DataTable dt = new DataTable();
                    myDAP.Fill(dt);

                    mRes = JsonConvert.SerializeObject(dt);

                    con.Close();
                }
                catch (Exception ee)
                {
                    mRes = "Error : " + ee.Message;
                }
                finally
                {
                    if (con.State == ConnectionState.Open)
                        con.Close();
                }
            }
            return mRes;
        }

        public DataTable GetDataTable(string Query)
        {
            DataTable dt = new DataTable();
            using (SqlConnection con = new SqlConnection(connectionString))
            {

                try
                {
                    if (con.State == ConnectionState.Closed)
                        con.Open();
                    IDataReader rdr = new SqlCommand(Query, con).ExecuteReader();
                    dt.Load(rdr);
                    if (con.State == ConnectionState.Open)
                        con.Close();
                }
                catch (Exception e)
                {

                }
                finally
                {
                    if (con.State == ConnectionState.Open)
                        con.Close();
                }

            }
            return dt;
        }

    }
}
