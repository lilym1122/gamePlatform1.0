var Gamelist = [];
var code = "200"
var data = []
var msg  = "成功"
var servers = [];
var serversData = [];
data ["page"] = "0";
data ["page_size"] = "8";
data ["servers"] = servers;
serversData ["created_at"] = "2019-03-19 14:09:18"
serversData ["deleted_at"] = null
serversData ["game_detail_url"] = "http://www.4177.com/info/10580"
serversData ["game_id"] = "10580"
serversData ["game_name"] = "修罗武神"
serversData ["game_play_url"] = "http://www.4177.com/game/10580"
serversData ["id"] = "17211"
serversData ["logo"] = "http://dl.4177.com/hgame_album/180316/6e0806c0141dfc01abd7d511fcab79312ea72cc2.6e0806c0141dfc01abd7d511fcab79312ea72cc2.gif"
serversData ["open_time"] = "2019-04-24 00:00:00"
serversData ["server_name"] = "修罗武神653服"
serversData ["type_name"] = "角色扮演"
serversData ["updated_at"] = "-0001-11-30 00:00:00"

let i = 8;
while(i--){servers[i] = serversData;}

function getServersData() {
    Gamelist ["code"] = code;
    Gamelist ["data"] = data
    Gamelist ["msg"] =msg;

    return Gamelist;
}
//获取更多数据
function addMoreServersData() {
    return Gamelist;
}
