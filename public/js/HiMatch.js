/**
 * Created by duanzhengmou on 10/11/16.
 */
load_all_matchs();


function load_all_matchs() {
    $.ajax({
        url:'/matchs',
        type:'get',
        success:function (data) {

            for (var x in data){
                var match_data = {};
                match_data.match_title = data[x].match_title;
                match_data.match_id = data[x].id;
                match_data.match_intro = data[x].match_description;
                match_data.image_url = data[x].img_url;
                match_data.participated = data[x].participated;
                generate_match_card('#match_list',match_data);
            }
        },
        error:function (data) {
            //
        }
    });
}

function create_match() {
    var match_title = $("#match-title-input").val();
    var match_location = $("#match-location_input").val();
    var match_date = $("#match-date-input").val();
    var match_description = $("#match-description-input").val();
    var img_url = '../resource/image/match1.jpg';//default
    var oringinator_id = getCookie('hinameid');

    // console.log(
    //     "\ntitle:"+ match_title+
    //     "\nlocation:"+match_location+
    //     "\ndate:"+match_date+
    //     "\ndescription:"+match_description
    // )

    $.ajax({
        url:'/match',
        type:'post',
        data:{
            match_title:match_title,
            match_date:match_date,
            match_location:match_location,
            match_description:match_description,
            image_url:img_url,
            originator_id:oringinator_id
        },
        success:function (data) {
            // console.log(data)
            if(data.result != true){
                console.log('something goes wrong');
            }else{
                $("#match-title-input").val('');
                $("#match-location_input").val('');
                $("#match-date-input").val('');
                $("#match-description-input").val('');

                $("#create_match").modal('hide');
                location.reload();
            }
        },
        error:function (data) {

        }
    });
}

function participate_match(match_id) {
    var user_id = getCookie('hinameid');
    // console.log("participate : "+match_id);

    $.ajax({
        url:'/match/participate',
        type:'post',
        data:{user_id:user_id,match_id:match_id},
        success:function (data) {
            console.log(data)
        },
        error:function (data) {
            
        }
    });
}