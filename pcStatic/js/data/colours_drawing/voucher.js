function getPaydata(){
var voucenter=[];
var code = "200"
var data = [];
var custom_service=[];

var msg  = "操作成功"
 data["custom_service"]=custom_service;
data["avatar"]="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epLs9VT3fndhG07yJ9FzjFkib6vkHsIEQnZX7dYJ5OL7cDd9RRFibpX2Jf6zfurhb1xP6d0PDKAL1CA/132";
data["channel_id"]=22;
data["channel_name"]="www.4177.com";
data["contact_mobile"]="";
data["contact_qq"]="";
data["contact_wechat"]="";
data["diamond"]=0;
data["gender"]=2;
data["gold"]=435;
data["idcardNo"]="";
data["next_vip_level_growth"]="1000";
data["next_vip_salary"]=0;
data["nickname"]="llm";
data["realname"]="";
data["show_app_download"]=1;
data["show_custom_service"]=1;
data["show_gold"]=1;
data["show_logout"]=1;
data["show_message"]=1;
data["show_pay_center"]=1;
data["show_sign_in"]=1;
data["show_task"]=1;
data["show_vip"]=1;
data["sign_days"]=2;
data["token"]="";
data["uid"]=64116032;
data["vip_growth"]=0;
data["vip_level"]=1;
data["vip_salary"]=0;
data["vip_salary_status"]=-1;
data["visitor"]=0
// custom_service
    custom_service["email"]="tousu@4177.com";
    custom_service["official"]="GAME4177";
    custom_service["phone"]="0592-5526652";
    custom_service["phone_time"]="工作日09:00～18:00";
    custom_service["qrcode"]="http://dl.4177.com/images/albums/20180420/a92b9fd2f69f2c75e60dab86f8df72f3d1cdeacc.png";
    custom_service["wechat"]="KEFU4177";
    custom_service["wechat_time"]="工作日09:00～23:00";


    voucenter["code"]=code;
    voucenter["data"]=data;
    voucenter["msg"]=msg;

    return voucenter;
}