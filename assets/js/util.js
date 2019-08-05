
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

window.global = { userIdentity: JSON.parse(getCookie("useridentity"))};
window.util = {

    requestpost: function (url, data, cb) {
        if (!url) return;
        if (url[0] != '/' && url[0] != '\\') url = "/" + url;
        //console.log("开始请求！"+e.url);
        $.ajax({
            url: 'http://172.20.248.220:8088/qxf' + url,
            headers: {
                token: global.userIdentity.token,
                user: global.userIdentity.user.id,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            data: JSON.stringify(data) || {},
            dataType: 'Json',
            //contentType:'application/json',
            success: function (msg) {
                if (msg.success) {
                    // alert(msg.msg);
                    if (cb) cb(msg);
                }
                else{}
                    // alert(msg.msg);
            }
        })
    },

    requestget: function (url, cb) {
        if (!url) return;
        if (url[0] != '/' && url[0] != '\\') url = "/" + url;
        $.ajax({
            url: 'http://172.20.248.220:8088/qxf'+url,
            headers: {
                token: global.userIdentity.token,
                user: global.userIdentity.user.id,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'get',
            success: function (msg) {
                if (msg.success) {
                    console.log(msg);
                    if (cb) cb(msg);
                }
                else{}
                // alert(msg.msg);
            },
        })
    },
};






