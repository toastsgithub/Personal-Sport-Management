/**
 * Created by duanzhengmou on 12/1/16.
 */

load_personal_info();

function load_personal_info() {
    var user_id = getCookie('hinameid');
    $.ajax({
        url:'/personal/info',
        type:'get',
        data:{user_id:user_id},
        success:function (data) {
            $('#info_username').val(data[0].username);
            $('#info_nickname').val(data[0].nickname);
            $('#info_intro').val(data[0].self_intro);
            $('#info_age').val(data[0].age);
            $('#info_gender').val(data[0].gender);
            $('#info_city').val(data[0].city);
        },
        error:function (data) {

        }
    });
}


function save_personal_info() {
    var user_id = getCookie('hinameid');
    $.ajax({
        url:'/personal/info',
        type:'post',
        data:{},
        success:function (data) {

        },
        error:function (data) {

        }
    });
}