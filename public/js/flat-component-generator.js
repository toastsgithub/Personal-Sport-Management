/**
 * Created by duanzhengmou on 10/15/16.
 */

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
                    '<li><a href="#">个人设置</a></li>'+
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
        '<div style="width: 300px;height: 400px;border-radius: 6px;background-color: #fafafa;box-shadow: 0 0 2px 1px #b8bebf;float: left;margin: 5px;">'+
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
                '</div>'+
            '</div>'+
        '</div>').appendTo(node_id);
    // document.getElementById('match_id_container').className = data.match_id;
}

function generate_match_info_card(node_id,data) {
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
        '<button class='+participated_class+' style="width: 100px" lang="en" onclick="">'+
        'Quit'+
        '</button>'+

        '</div>'+
        '</div>'+
        '</div>').appendTo(node_id);

}

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
        '<button class='+participated_class+' style="width: 100px" lang="en" onclick="">'+
        'Dismiss'+
        '</button>'+

        '</div>'+
        '</div>'+
        '</div>').appendTo(node_id);

}