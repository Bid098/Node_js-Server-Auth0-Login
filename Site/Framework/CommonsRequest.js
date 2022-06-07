
function $RequestToServer(ReqType, Url, Params, Callback)
{
    var HttpAjax = new XMLHttpRequest();

    HttpAjax.onreadystatechange = function (Answer) { 
        if(Answer.target.readyState == 4)
        {
            if(Answer.target.status == 200)
            {
                Callback(Answer.target.response);
            }
            else
            {
                Callback(null);
            }
        }
    };
    HttpAjax.open(ReqType, Url, true);
    HttpAjax.send(JSON.stringify(Params));
}