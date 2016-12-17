/**
 * Created by duanzhengmou on 10/15/16.
 */
var moment_position = 'pos-left';

function generate_nav_bar(node_id) {


    $('<nav class="navbar navbar-default navbar-fixed-top navbar-embossed" role="navigation">'+
        '<div class="navbar-header" style="">'+
            '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">'+
                '<span class="sr-only">Toggle navigation</span>'+
            '</button>'+
            '<a class="navbar-brand" href="#">Hi High</a>'+
        '</div>'+

        '<div class="collapse navbar-collapse" id="navbar-collapse-01">'+
        '<ul class="nav navbar-nav navbar-left">'+
            '<li><a href="/sport_data_page" lang="en">My Profile</a></li>'+
            '<li><a href="/matchs_page" lang="en">Playground</a></li>'+
            '<li><a href="/friend_page" lang="en">Friends</a></li>'+
        '</ul>'+
        '<ul class="nav navbar-nav navbar-right">'+
            '<li class="dropdown">'+
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" id="user_state"><span id="nav_user">login</span><b class="caret"></b></a>'+
                '<span class="dropdown-arrow"></span>'+
                '<ul class="dropdown-menu">'+
                    '<li><a href="/personal">个人设置</a></li>'+
                    '<li class="divider"></li>'+
                    '<li><a href="#" onclick="change_to_En()">English</a></li>'+
                    '<li><a href="#" onclick="change_to_Chinese()">简体中文</a></li>'+
                    '<li><a href="#" onclick="change_to_yn_dialect()">云南方言</a></li>'+
                    '<li class="divider"></li>'+
                    '<li><a href="#" onclick="logout()">退出登录</a></li>'+
                '</ul>'+
            '</li>'+
        '</ul>'+
        '</div>'+
    '</nav>').appendTo(node_id);

    document.body.style.marginTop = '100px';

}

/**
 *
 * @param node_id
 * @param data{
 *              match_id,
 *              image_url,
 *              match_title,
 *              match_intro,
 *              participated
 *              }
 */
function generate_match_card(node_id,data) {
    // var image_url = '../resource/image/lion.png';
    var participated_class = '"btn btn-primary btn-embossed"';
    var join_btn_label = 'Join !';
    var match_id = data.match_id;
    // var current_btn_id = "join_btn:"+match_id;

    if(data.participated == 1){
        participated_class = participated_class+' disabled';
        join_btn_label = 'joined.'
    }
    $(
        '<div style="width: 300px;height: 450px;border-radius: 6px;background-color: #fafafa;box-shadow: 0 0 2px 1px #b8bebf;float: left;margin: 5px;">'+
            '<div style="background: url('+data.image_url+');height: 150px;width: 300px;background-repeat: repeat;background-size: 300px 150px;border-top-left-radius: 6px;border-top-right-radius: 6px"></div>'+
            '<div style="padding: 8px;height: 200px">'+
                // '<div id="match_id_container" style="visibility: hidden;"></div>'+
                '<div style="font-size: 20px;border-bottom: solid 1px #b8bebf">'+data.match_title+'</div>'+
                '<div style="font-size: 15px;font-weight: 100">'+data.match_intro+'</div>'+
            '</div>'+
            '<div style="height: 50px;width: 100%;border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;padding-right: 10px">'+
                '<div style="float: right;">'+
                    '<button class='+participated_class+' style="width: 100px" lang="en" onclick="participate_match(event,'+data.match_id+')">'+
                        join_btn_label+
                    '</button>'+
                    '<button class="btn btn-info btn-embossed" onclick="show_match_detail('+match_id+')" lang="en" style="margin-left: 5px">'+
                        'Info'+
                    '</button>'+
                    '<button class="btn btn-info btn-warning" onclick="report('+match_id+')" lang="en" style="margin-left: 5px">'+
                    'Report'+
                    '</button>'+
                '</div>'+


            '</div>'+

        '</div>').appendTo(node_id);
    // document.getElementById('match_id_container').className = data.match_id;
}

/**
 * 生成我参加的比赛卡片
 * @param node_id
 * @param data
 */
function generate_match_info_card(node_id,data) {
    // var image_url = '../resource/image/lion.png';
    var participated_class = '"btn btn-danger btn-embossed"';

    console.log('Mine?->'+data.isMine);
    if(data.isMine > 0){
        participated_class += ' disabled';
    }
    var match_id = data.match_id;
    // var current_btn_id = "join_btn:"+match_id;

    $(
        '<div style="width: 300px;height: 400px;border-radius: 6px;background-color: #fafafa;box-shadow: 0 0 2px 1px #b8bebf;float: left;margin: 5px;">'+
        '<div style="background: url('+data.image_url+');height: 150px;width: 300px;background-repeat: repeat;background-size: 300px 150px;border-top-left-radius: 6px;border-top-right-radius: 6px"></div>'+
        '<div style="padding: 8px;height: 200px">'+
        '<div id="match_id_container" style="visibility: hidden;"></div>'+
        '<div style="font-size: 20px;border-bottom: solid 1px #b8bebf">'+data.match_title+'</div>'+
        '<div style="font-size: 15px;font-weight: 100">'+data.match_intro+'</div>'+
        '</div>'+
        '<div style="height: 50px;width: 100%;border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;padding-right: 10px">'+
        '<div style="float: right;">'+
        '<button class='+participated_class+' style="width: 100px" lang="en" onclick="">'+
        'Quit'+
        '</button>'+

        '</div>'+
        '</div>'+
        '</div>').appendTo(node_id);

}

/**
 * 生成我创建的比赛的卡片
 * @param node_id
 * @param data
 */
function generate_mine_match_card(node_id,data) {
    // var image_url = '../resource/image/lion.png';
    var participated_class = '"btn btn-danger btn-embossed"';

    var match_id = data.match_id;
    // var current_btn_id = "join_btn:"+match_id;

    $(
        '<div style="width: 300px;height: 400px;border-radius: 6px;background-color: #fafafa;box-shadow: 0 0 2px 1px #b8bebf;float: left;margin: 5px;">'+
        '<div style="background: url('+data.image_url+');height: 150px;width: 300px;background-repeat: repeat;background-size: 300px 150px;border-top-left-radius: 6px;border-top-right-radius: 6px"></div>'+
        '<div style="padding: 8px;height: 200px">'+
        '<div id="match_id_container" style="visibility: hidden;"></div>'+
        '<div style="font-size: 20px;border-bottom: solid 1px #b8bebf">'+data.match_title+'</div>'+
        '<div style="font-size: 15px;font-weight: 100">'+data.match_intro+'</div>'+
        '</div>'+
        '<div style="height: 50px;width: 100%;border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;padding-right: 10px">'+
        '<div style="float: right;">'+
        '<button class='+participated_class+' style="width: 100px;" lang="en" onclick=dismiss_my_match('+match_id+')>'+
        'Dismiss'+
        '</button>' +
        '<button class="btn btn-info btn-embossed" style="margin-left: 5px;">Modify</button>'+

        '</div>'+
        '</div>'+
        '</div>').appendTo(node_id);

}

/**
 * 生成朋友列表的每个朋友卡片
 * @param node_id:
 * @param data:
 *        {
 *          id,
 *          name,
 *          introduction,
 *          avatar_url
 *        }
 */
function generate_friend_card(node_id,data) {
    var user_name = data.user_name;
    var intro = data.self_intro;

    $('<div id="" style="border-radius: 15px;width: 300px;height: 100px;box-shadow:0 0 2px 1px #b8bebf;background-color: #ffffff;float: left;margin: 10px">'+
        '<div style="top: 10px;left: 5px;position: relative;float:left;">'+
            '<img src="../resource/image/avatar2.png" alt="..." class="img-circle friend-icon">'+
        '</div>'+

        '<div style="float: left;width: 200px;position: relative;left: 7px;top: 8px;height: 60px;" class="">'+
            '<a href=""><h4 class="media-heading" style="font-size: 15px;border-bottom: solid 1px #c0c0c0">'+user_name+'</h4></a>'+
            '<div style="font-size: 12px;float: left;border-bottom: solid 1px #c0c0c0;width: 100%;height: 40px">'+intro+'</div>'+
            '<div>'+
                '<button class="btn btn-danger btn-embossed btn-xs" style="float: right;position:relative;top: 2px;"onclick=unfollow('+data.id+')>Unfollow</button>'+
            '</div>'+
        '</div>'+
     '</div>'
    ).appendTo(node_id);
}

function generate_follower_friend_card(node_id,data) {
    var user_name = data.user_name;
    var intro = data.self_intro;

    $('<div id="" style="border-radius: 15px;width: 300px;height: 100px;box-shadow:0 0 2px 1px #b8bebf;background-color: #ffffff;float: left;margin: 10px">'+
        '<div style="top: 10px;left: 5px;position: relative;float:left;">'+
            '<img src="../resource/image/avatar2.png" alt="..." class="img-circle friend-icon">'+
        '</div>'+

        '<div style="float: left;width: 200px;position: relative;left: 7px;top: 8px;height: 60px;" class="">'+
            '<a href=""><h4 class="media-heading" style="font-size: 15px;border-bottom: solid 1px #c0c0c0">'+user_name+'</h4></a>'+
            '<div style="font-size: 12px;float: left;border-bottom: solid 1px #c0c0c0;width: 100%;height: 40px">'+intro+'</div>'+
            '<div>'+
            '</div>'+
        '</div>'+
    '</div>'
    ).appendTo(node_id);


}

function generate_moment_item(node_id,data) {

    var date = data.create_at.split(' ')[0];
    var time = data.create_at.split(' ')[1];
    var moment_position_toggle = 0;

    if(moment_position == 'pos-left') {
        moment_position = 'pos-right';
    } else {
        moment_position = 'pos-left';
    }

    var position_class = 'clearfix ' + moment_position;

    $('<dd class="'+position_class+'">'+
        '<div class="circ"></div>'+
        '<div class="time">'+date+'</div>'+
        '<div class="events">'+
        '<div class="events-header">'+
            '<img src="../resource/image/avatar2.png" alt="..." class="img-circle friend-icon hidden-sm">'+
            data.user_name+
        '</div>'+

        '<div class="events-body">'+
            '<p>'+
                data.content+
            '</p>'+
        '<div>'+
            '<button style="float: right;" class="btn btn-primary btn-embossed btn-sm">Like !</button>'+
        '</div>'+
    '</div>'+
    '<div class="events-footer">'+
        time+
    '</div>'+
    '</div>'+
    '</dd>').appendTo(node_id);
}