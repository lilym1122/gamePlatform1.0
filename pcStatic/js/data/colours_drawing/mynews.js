function mynews() {
    var mynew = [];
    var code = "200";
    var data = [];
    var msg = "成功";
    var notices=[];
    data ["page"] = "0";
    data ["page_size"] = "5";
    data ["notices"] = notices;
    notices["content"]="全服维护通知：更新维护期间为保持各个服务器数据备份正常，故全服维护";
    notices["time"]="2018-12-24"
    notices["id"]=105;
    notices["read"]=0;
    notices["title"]="《暴走萌姬》更新公告"
    notices["type"]=1;
    notices["url"]="";


    mynew["code"]=code;
    mynew["data"]=data;
    mynew["msg"]=msg;
    return mynew;

}

