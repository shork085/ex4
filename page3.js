var cloth;
var color;
function show(){
    cloth = localStorage.getItem('style');
    color = localStorage.getItem('clothcolor');

    if(color==""){
        document.getElementById("cloth").style.backgroundImage="url(c"+cloth+".png)";
    }else{
        document.getElementById("cloth").style.backgroundImage="url(c"+cloth+"color"+color+".png)";
    }
}