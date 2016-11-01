/**
 * Created by duanzhengmou on 10/17/16.
 */

if ( lang === undefined ){
    // alert("no language pack found");
    var lang = new Lang();
    lang.dynamic('th', '../js/language_pack/th.json');
    lang.dynamic('zh_cn', '../js/language_pack/zh_cn.json');
    lang.dynamic('yn_dialect.json', '../js/language_pack/yn_dialect.json');
    lang.init({
        defaultLang: 'en',
        currentLang: 'en',
        allowCookieOverride:true
    });
}else{
    // alert("language pack exist");
}


function change_to_Chinese() {
    lang.change('zh_cn');
}
function change_to_Thai() {
    lang.change('th');
}
function change_to_En() {
    lang.change('en');
}
function change_to_yn_dialect() {
    lang.change('yn_dialect.json');
}