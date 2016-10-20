

function show_search_friends_dialog() {
    $("#search_friends_dialog").modal({
        backdrop:"static"
    });
}

function set_friends_searching_state() {

    var result = document.getElementById('search_result');
    var icon_span = document.createElement('span');
    icon_span.className = "fa fa-spinner fa-spin fa-3x fa-fw";
}

function set_friends_search_finish_state() {
    
}

function show_friend_detail() {
    $("#search_friends_dialog").modal('hide');
    $("#friend_detail").modal();
    // $("#friend_detail").modal('show');
}