<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebMethodTest.aspx.cs" Inherits="ESH_LOMS.WebMethodTest" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Web Method Test</title>
</head>
<body>
    <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
    <script>
        $(function () {
            
            $.ajax({
                type: "POST",
                url: "http://localhost:2226/WebMethodTest.aspx/ajax_test",
                data: "{is_test:true, id: 1, cmd:'test'}",                
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var obj = JSON.parse(response.d);
                    
                    alert(obj.id+", "+obj.cmd+", "+obj.is_test);
                }
            });
        });
    </script>
    <div>
    </div>
</body>
</html>
