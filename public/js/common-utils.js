/**
 * Created by duanzhengmou on 10/14/16.
 */

/**
 * generate my own footer by default
 * @returns {Element}
 */
function generate_footer() {

    var container = document.createElement("div");
    var author = document.createElement("div");
    var copyright = document.createElement("div");

    author.style.marginLeft = "auto";
    author.style.marginRight = "auto";
    author.style.display = "table";

    copyright.style.marginLeft = "auto";
    copyright.style.marginRight = "auto";
    copyright.style.display = "table";

    author.appendChild(document.createTextNode("Made with ❤️ by Toast @"));
    var git_address = document.createElement("a");
    git_address.href="https://github.com/toastsgithub";
    git_address.innerHTML = "Github";
    author.appendChild(git_address);

    copyright.appendChild(document.createTextNode("Copyright © 2016 Toast"));

    container.appendChild(author);
    container.appendChild(copyright);

    return container;
}

/**
 * get cookie by name
 * @param c_name
 * @returns {string}
 */
function getCookie(c_name) {
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return ""
}

function setCookie(c_name,value,expiredays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function check_login() {
    var user = getCookie('hiname');
    if( user == '' ){
        window.location.href = '/login';
    }else{
        refresh_nav_data();
    }
}

function logout() {
    delCookie('hiname');
    location.reload();
}

function refresh_nav_data() {
    var user = getCookie('hiname');
    if( user == '' ){
        return ;
    }else{
        console.log('modify');
        var user_tag = document.getElementById('nav_user');
        user_tag.innerText = user.toString();

    }
}


/**
 * @author yaosonghao
 * 2010-5-27
 *
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).dateFormat("yyyy-MM-dd hh:mm:ss.S")   ==> 2006-07-02 08:09:04.423
 * (new Date()).dateFormat("yyyy-MM-dd E HH:mm:ss")   ==> 2009-03-10 二 20:09:04
 * (new Date()).dateFormat("yyyy-MM-dd EE hh:mm:ss")  ==> 2009-03-10 周二 08:09:04
 * (new Date()).dateFormat("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).dateFormat("yyyy-M-d h:m:s.S")        ==> 2006-7-2 8:9:4.18
 */
Date.prototype.dateFormat=function(fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    var week = {
        "0" : "\u65e5",
        "1" : "\u4e00",
        "2" : "\u4e8c",
        "3" : "\u4e09",
        "4" : "\u56db",
        "5" : "\u4e94",
        "6" : "\u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
