
let itemDate = {
    deleted_at: null,
    created_at: '2019-04-25 11:02:10',
    content: "<div>龙珠*20<span style=\"white-space:pre\"></span>圣兽晶核*50<span style=\"white-space:pre\"></span>洗髓丹*5<span style=\"white-space:pre\"></span>一百威望*5<span style=\"white-space:pre\"></span>极品原酿*2<span style=\"white-space:pre\"></span>锦盒*5</div>",
    effect_end_time: "2019-04-24 00:00:00",
    effect_start_time: "2019-04-24 00:00:00",
    game_id: "10898",
    game_name: "玄元剑仙",
    game_detail_url: "http://www.4177.com/info/10898",
    game_play_url: "http://www.4177.com/game/10898",
    id: "1899",
    logo: "http://dl.4177.com//190423/7c12f4d9191f80ec9c921367097d5aa7de17f7bc.png",
    name: "独家礼包",
    status: "1",
    total_count: "3000",
    updated_at: "2019-04-25 15:47:23",
    use_method: "主页面点击设置—输入礼包码—点击兑换",
    valid_count: "2996",
    valid_ratio: "88",
};

let json = {
    code: 200,
    msg: '成功',
    data: {
        listLeft: Array(16).fill(itemDate),
        listRight: {
            gifts: Array(8).fill(itemDate),
            page: 0,
            page_size: 8
        }
    }
}

function getJsonDate() {
    return json;
}

