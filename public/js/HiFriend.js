
load_follower();
load_following();
load_moments_item();
function show_search_friends_dialog() {
    $("#search_friends_dialog").modal({
        backdrop:"static"
    });
}
/**
 * 按关键字模糊搜索用户
 */
function search_friend() {
    document.getElementById('search_result').innerHTML = '';
    var key = document.getElementById('search_friend_input').value;
    var user_id = getCookie('hinameid');
    set_friends_searching_state();

    $.ajax({
        url:'/friend/search',
        type:'get',
        data:{key:key,user_id:user_id},
        success:function (data) {
            for (var x in data){
                generate_friend_list_item(data[x].user_name,data[x].id,data[x].followed);
            }
            document.getElementById('search_friend_input').value = '';
            set_friends_search_finish_state();
        },
        error:function (data) {
          console.log("error");
            set_friends_search_finish_state();
        }
    });
}


/**
 * 生成朋友搜索结果列表
 * @param name
 * @param id
 * @param followed 是否已经关注过,是(1),否(0)
 */
function generate_friend_list_item(name, id, followed) {
    // console .log('\n'+name+" "+id);
    // var item = document.createElement('div');
    // item.innerHTML = name;
    // document.getElementById('search_result').appendChild(item);
    var disable_attr = '';
    if(followed)
        disable_attr = ' disabled';
    $(
      '<div style="border-bottom: solid 1px #d9e2e0;height: 50px">' +
        '<span style="">'+name+'</span>' +
        '<button onclick="follow(event,'+id+')" class="btn btn-primary btn-sm btn-embossed'+disable_attr+'" style="float: right;position: relative;top: 5px;">Follow !</button>' +
      '</div>'

    ).appendTo('#search_result');
}


/**
 * 设置朋友搜索框的加载旋转动画
 */
function set_friends_searching_state() {

    var result = document.getElementById('search_result');

    var icon_span;
    if(icon_span = document.getElementById('searching_icon_span') == undefined){
        icon_span= document.createElement('span');
        icon_span.id = 'searching_icon_span';
        icon_span.className = "fa fa-spinner fa-spin fa-3x fa-fw";
        result.appendChild(icon_span);
    }else{
        icon_span.style.visibility = 'visible';
    }

}

/**
 * 关闭朋友搜索框的加载旋转动画
 */
function set_friends_search_finish_state() {
    document.getElementById('searching_icon_span').style.visibility = 'hidden';

}

/**
 * 显示朋友的详细资料(未实现)
 */
function show_friend_detail() {
    $("#search_friends_dialog").modal('hide');
    $("#friend_detail").modal();
    // $("#friend_detail").modal('show');
}

/**
 * 根据当前登录的用户加载所有的follower
 */
function load_follower() {
    var user_id = getCookie('hinameid');
    $.ajax({
        url:'/friend/follower',
        data:{userid:user_id},
        type:'get',
        success:function (data) {

            for (var x in data){
                generate_follower_friend_card(document.getElementById('follower'),data[x]);
            }
        },
        error:function (data) {

        }
    });
}


/**
 * 根据当前登录的用户加载所有的following
 */
function load_following() {
    var user_id = getCookie('hinameid');
    $.ajax({
        url:'/friend/following',
        data:{userid:user_id},
        type:'get',
        success:function (data) {

            for (var x in data){
                generate_friend_card(document.getElementById('following_friend'),data[x]);
            }
        },
        error:function (data) {

        }
    });
}

/**
 * 根据当前登录的用户来取消关注该用户关注的用户id为friend_id的用户
 * @param friend_id
 */
function unfollow(friend_id) {
    var user_id = getCookie('hinameid');
    $.ajax({
        url:'/friend/unfollow',
        type:'post',
        data:{user_id:user_id,friend_id:friend_id},
        success:function (data) {

            location.reload();
        },
        error:function (data) {
            console.log("unfollow error");
        }
    });
}



/**
 * 根据当前登录的用户来关注用户id为following_id的用户
 * @param following_id
 */
function follow(event,following_id) {
    var own_id = getCookie('hinameid');
    setDisabled(event.srcElement);
    event.srcElement.innerHTML = 'Followed';
    // console.log('target->'+JSON.stringify(event.target));

    $.ajax({
        url:'/friend/follow',
        type:'post',
        data:{user_id:own_id, following_id:following_id},
        success:function (data) {

            // location.reload();
        },
        error:function (data) {

        }
    });
}
/**
 * 加载当前用户的好友的动态
 */
function load_moments_item() {
    var user_id = getCookie('hinameid');
    var user_name = getCookie('hiname');
    $.ajax({
        url:'/friend/moments',
        data:{user_id:user_id,user_name:user_name},
        success:function (data) {

            for (var x in data)
                generate_moment_item('#moments_list',data[x]);
        },
        error:function (data) {
            console.log('LOAD_MOMENTS_ERROR');
        }
    });
}

/**
 * 发布动态,刷新动态列表
 */
function publicsh_moment() {
    if($('#moment_input').val() == ''){
        return ;
    }
    var user_id = getCookie('hinameid');

    var content = $('#moment_input').val();
    // console.log(content+'||content');
    $.ajax({
        url:'/friend/moments',
        type:'post',
        data:{content:content,user_id:user_id},
        success:function (data) {
            $('#moment_input').val('');
            var editor = $('#moments_list').find('dd').get(0);
            console.log(editor);
            $('#moments_list').empty();
            document.getElementById('moments_list').appendChild(editor);

            load_moments_item();
        },
        error:function (data) {
            console.log('PUBLICSH_MOMENT_ERROR');
        }
    });
}