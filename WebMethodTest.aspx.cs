using Newtonsoft.Json;
using System;
using System.Web.Services;

namespace ESH_LOMS
{
    public partial class WebMethodTest : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        [WebMethod]
        public static string ajax_test(int? id, Boolean is_test, string cmd = "")
        {
            var result = new { id = id.Value, cmd = cmd, is_test=is_test};
            return JsonConvert.SerializeObject(result);
        }
    }
}