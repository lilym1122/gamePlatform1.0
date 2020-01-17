function mytask() {
    var taskact = [];
    var code = "200";
    var data = [];
    var msg = "成功";
    var tasks=[];
    data ["tasks"] = tasks;
    tasks["desc"]="";
    tasks["diamond"]=0;
    tasks["gold"]=100;
    tasks["id"]=12;
    tasks["name"]="玩任意一款游戏(每日)";
    tasks["status"]=-1;
    tasks["type"]=2;
    //登录页面的地址invite_url
    tasks["invite_url"]="https://passport.4177.com/login?referrer=aHR0cDovL3d3dy40MTc3LmNvbQ%3D%3D&code=1555985961283655&channel=22";
    //跳应用宝下载的地址
    tasks["app_download_url"]="https://a.app.qq.com/o/simple.jsp?pkgname=com.h5.zl4177";
    tasks["share_by_client"]=0;
    tasks["invite_info"]="0/10";

    taskact["code"]=code;
    taskact["data"]=data;
    taskact["msg"]=msg;
    return taskact;

}

