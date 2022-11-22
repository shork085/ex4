// style代表当前所选中衣服的样式
var style;
//颜色
var clothcolor="";
function cloth(cloth1){
    style=cloth1;
    // 底部选择按钮出现当前被选中衣服对应的颜色
    for(var i=1;i<=3;i++){
        document.getElementById("color"+i).style.backgroundImage="url(c"+style+i+".png)";
    }
}

//选中一个颜色衣服切换对应颜色
function color(id){
    let c=style;
    clothcolor=id;
    document.getElementById("c"+c).style.backgroundImage="url(c"+c+"color"+id+".png)";
}

//保持初始样式
function none(){
    let c=style;
    clothcolor="";
    document.getElementById("c"+c).style.backgroundImage="url(c"+c+".png)";
}

function get(){
    localStorage.setItem('style',style);
    localStorage.setItem('clothcolor',clothcolor);
}