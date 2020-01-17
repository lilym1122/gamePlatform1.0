(function () {
    //游戏专题
    var topic_list = {
        activity: 0,
        cps_visible: 1,
        created_at: "2019-04-08 13:54:23",
        extra: "仙侠系列游戏集合",
        game_center_img: "",
        game_id: 0,
        id: 98,
        img: "http://dl.4177.com//190408/40e7e977705d233a14dee926b0f16db5fd8fd192.jpg",
        invisible_channels: null,
        leaderboard_type: 0,
        mobile_img: "",
        pc_banner: "",
        pc_or_mobile_logo: 0,
        position: 1,
        status: 1,
        sub_type: null,
        title: "仙侠是以上古神话为题材的大型多人在线动作角色扮演游戏。绚丽的3D游戏画质、多副本和跨服PVP、丰富的装备技能、坐骑萌宠系统给玩家带来全新升级的游戏体验",
        topic_big_img: "",
        topic_game_id: null,
        topic_id: 0,
        topic_small_img: "",
        type: 14,
        updated_at: "2019-04-08 13:54:23",
        url: ""
    }

    //游戏列表
    var topic_game = {
        banner: "",
        category: 1,
        click_num: 67,
        created_at: "2018-04-18 22:49:17",
        game_center_img: "http://dl.4177.com//181210/77a96c4eb7d8106fc909a1437129a3cf02a5f312.gif",
        game_detail_url: "http://www.4177.com/info/10364",
        game_play_url: "http://www.4177.com/game/10364",
        has_gift: 1,
        hot_rank: 99999,
        id: 10364,
        image: "http://dl.4177.com//181214/1d967858f70af7422a47bc4cf485cbc0db7dc4ff.jpg",
        intro: "<p><span>《妖怪宝可萌》是一款充满回忆并高度还原的，集宠物养成、策略于一体的回合制游戏。玩家扮演训练师，在宠物小精灵的世界如果遇到了野生的小精灵便可将其捕获并培养。游戏还实现了忠于原著的进化系统，进化后的小精灵拥有全新的技能和更强大的作战能力。</span></p>",
        logo: "http://dl.4177.com/images/hgame/201704/14914508376710.gif",
        mobile_img: "",
        more_img: "",
        name: "妖怪宝可萌",
        new_img: "",
        new_rank: 1,
        no_display_client: "0",
        pc_banner: "",
        play_count: 0,
        popularity: 21456,
        recommend_rank: 99999,
        score: "5.0",
        slogan: "抓宠挂机回合制，上线就送VIP!",
        status: 1,
        support_https: 0,
        theme: 0,
        theme2: 0,
        type: 9,
        type_name: "卡牌游戏",
        updated_at: "2019-04-28 10:30:15",
        uptime: null
    }
    this.getJsonDate = (dataName, number) => {
        return {
            code: 200,
            msg: '成功',
            data: Array(number).fill(eval(dataName)),
        }
    }
})()