/** EasyWeb iframe v3.1.3 date:2019-07-12 License By http://easyweb.vip */


// 公用url

// var url = 'http://172.20.248.220:8088/qxf';


// 以下代码是配置layui扩展模块的目录，每个页面都需要引入
layui.config({
    version: true,
    base: getProjectUrl() + 'assets/module/'
}).extend({
    formSelects: 'formSelects/formSelects-v4',
    treetable: 'treetable-lay/treetable',
    dropdown: 'dropdown/dropdown',
    notice: 'notice/notice',
    step: 'step-lay/step',
    dtree: 'dtree/dtree',
    citypicker: 'city-picker/city-picker',
    tableSelect: 'tableSelect/tableSelect',
    Cropper: 'Cropper/Cropper',
    zTree: 'zTree/zTree',
    introJs: 'introJs/introJs',
    fileChoose: 'fileChoose/fileChoose',
    tagsInput: 'tagsInput/tagsInput'
}).use(['layer', 'admin'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var admin = layui.admin;

    // 移除loading动画
    setTimeout(function () {
        admin.removeLoading();
    }, window == top ? 600 : 100);

});

// 获取当前项目的根路径，通过获取layui.js全路径截取assets之前的地址
function getProjectUrl() {
    var layuiDir = layui.cache.dir;
    if (!layuiDir) {
        var js = document.scripts, last = js.length - 1, src;
        for (var i = last; i > 0; i--) {
            if (js[i].readyState === 'interactive') {
                src = js[i].src;
                break;
            }
        }
        var jsPath = src || js[last].src;
        layuiDir = jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
    }
    return layuiDir.substring(0, layuiDir.indexOf('assets'));
}
setTimeout(1);

// 时间格式化
function getMyDate(str) {
    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth()+1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        /*oTime = oYear +'-'+ addZero(oMonth) +'-'+ addZero(oDay) +' '+ addZero(oHour) +':'+
            addZero(oMin) +':'+addZero(oSen);*/
        oTime = oYear +'-'+ addZero(oMonth) +'-'+ addZero(oDay);
    return oTime;
}
//补零操作
function addZero(num){
    if(parseInt(num) < 10){
        num = '0'+num;
    }
    return num;
}