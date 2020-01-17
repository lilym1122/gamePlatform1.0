(function () {       //自执函数
    var ggList = {
        created_at: "2019-04-26 09:43:41",
        game_id: 10885,
        id: 3206,
        img: "http://dl.4177.com//190426/bb69447ae6282950f80ed48323c26fbe374289f5.jpg",
        intro: "《小小三国志》5月1日活动公告",
        title: "《小小三国志》5月1日活动公告",
        type: 2
    };
    var servers = {
        created_at: "2019-03-19 14:09:18",
        deleted_at: null,
        game_detail_url: "http://www.4177.com/info/10580",
        game_id: 10580,
        game_name: "修罗武神",
        game_play_url: "http://www.4177.com/game/10580",
        id: 17213,
        logo: "http://dl.4177.com/hgame_album/180316/6e0806c0141dfc01abd7d511fcab79312ea72cc2.6e0806c0141dfc01abd7d511fcab79312ea72cc2.gif",
        open_time: "2019-04-26 00:00:00",
        server_name: "修罗武神655服",
        type_name: "角色扮演",
        updated_at: "-0001-11-30 00:00:00"
    };

    var list1 = {
        created_at: "2019-04-26 09:25:41",
        game_id: 10692,
        id: 3205,
        img: "http://dl.4177.com//190426/0344701a931bf7a9180621edf2339d6e4b37a46d.jpg",
        intro: "《热血沙城》4月26日更新公告",
        title: "《热血沙城》4月26日更新公告",
        type: 1
    };
    var list2 = {
        created_at: "2019-04-26 09:43:41",
        game_id: 10885,
        id: 3206,
        img: "http://dl.4177.com//190426/bb69447ae6282950f80ed48323c26fbe374289f5.jpg",
        intro: "《小小三国志》5月1日活动公告",
        title: "《小小三国志》5月1日活动公告",
        type: 2
    };
    var list3 = {
        created_at: "2018-09-21 13:53:53",
        game_id: 10675,
        id: 2505,
        img: "http://dl.4177.com//180921/52a4a1b12d5eca971717ee660ab6f2347388945e.jpg",
        intro: "《魔霸大陆》中秋活动公告",
        title: "《魔霸大陆》中秋活动公告",
        type: 3
    };

    this.getJsonDate = function (dataName, number) {     //函数内部用了外部的数据，这个其实就是一个闭包。全局定义了一个函数，定义了很多变量比如list1,list2,但是不是全局的，外部拿不到，所以用getJsonDate去return,保持外界和自执函数沟通的桥梁，这就是闭包

        if (dataName.indexOf('list') >= 0) {    //看看是不是List数据如果是则返回带分页的数据
            return {
                code: 200,
                msg: '成功',
                data: {
                    page: 0,
                    pageSize: number,
                    list: Array(number).fill(eval(dataName)),       //eval 作用是把里面的字符串当做代码去执行，比如  eval('1+1'),那么结果就是2，因为执行1+1浏览器当然是返回2。
                                                                    // 我们eval('list1')  就相当于  data:list1,把想要的数据拿过来了然后return出去
                }
            };
        } else {
            return {
                code: 200,
                msg: '成功',
                data: Array(number).fill(eval(dataName)),       //eval 作用是把里面的字符串当做代码去执行，比如  eval('1+1'),那么结果就是2，因为执行1+1浏览器当然是返回2。我们eval('list1')  就相当于  data:list1,把想要的数据拿过来了然后return出去
            };
        }

    }

})();

