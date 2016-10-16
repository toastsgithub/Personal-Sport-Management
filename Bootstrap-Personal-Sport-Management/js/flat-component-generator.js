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
            '<li><a href="../html/HomePage.html">My Profile</a></li>'+
            '<li><a href="../html/HiMatch.html">Playground</a></li>'+
            '<li><a href="../html/HiFriend.html">Friends</a></li>'+
        '</ul>'+
        '<ul class="nav navbar-nav navbar-right">'+
            '<li class="dropdown">'+
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Toast<b class="caret"></b></a>'+
                '<span class="dropdown-arrow"></span>'+
                '<ul class="dropdown-menu">'+
                    '<li><a href="#">个人设置</a></li>'+
                    '<li class="divider"></li>'+
                    '<li><a href="#">退出登录</a></li>'+
                '</ul>'+
            '</li>'+
        '</ul>'+
        '</div>'+
    '</nav>').appendTo(node_id);

    document.body.style.marginTop = '100px';

}