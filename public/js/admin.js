/**
 * Created by duanzhengmou on 12/3/16.
 */
load_report();

function load_report(){
    $.ajax({
        url:'/match/report',
        type:'get',
        success:function (data) {

            for (var x in data) {
                generate_report_item(data[x]);
            }
        },
        error:function (data) {
            console.log("LOAD_REPORT_ERROR");
        }
    });
}

function generate_report_item(data) {
    $('<div class="panel panel-default">'+
        '<div class="panel-heading">'+
            '<h3 class="panel-title" id="title">'+data.match_title+'</h3>'+
        '</div>'+

        '<div class="panel-body">'+
            '<p id="description"><span class="label label-primary">Description</span>'+data.match_description+'</p>'+
            '<p id="date"><span class="label label-primary">Date</span>'+data.match_date+'</p>'+
            '<p id="location"><span class="label label-primary">Location</span>'+data.match_location+'</p>'+
            '<p id="reporter"><span class="label label-primary">Reporter</span>'+data.reporter_id+'</p>'+

            '<div>'+
                '<button class="btn btn-primary btn-embossed" onclick=pass_match('+data.id+')>pass</button>'+
                '<button class="btn btn-danger btn-embossed" onclick=delete_match('+data.id+')>delete</button>'+
            '</div>'+

        '</div>'+
        '</div>').appendTo('#report');
}


function pass_match(match_id) {
    $.ajax({
        url:'/match/pass',
        type:'post',
        data:{match_id:match_id},
        success:function (data) {
            // console.log(data);
            location.reload();
        },
        error:function (data) {
            console.log('PASS_ERROR');
        }
    });
}

function delete_match(match_id) {
    $.ajax({
        url:'/match/dismiss',
        type:'post',
        data:{match_id:match_id},
        success:function (data) {

            location.reload();
        },
        error:function (data) {
            console.log('DISMISS_ERROR');
        }
    });
}