function show() {
    // var loc = location.href;
    // var n1 = loc.length;
    // var n2 = loc.indexOf('=');
    
    var str = localStorage.getItem('myname');
    //对中文进行解码
    var txt = decodeURI(str);
    var box = document.getElementById('name');
    box.innerHTML = "To "+txt+":";

    var sentence = ["赋予一件衣服的人格，不需要太多装饰。","不同的自己赋予同一件衣服不同的感觉。","买衣服最重要的目的，是放松我们自己。","衣服不仅是装饰，也是我们身体的保护膜。","你的个性，是这个复杂世界急需的养料。"];
    document.getElementById("sentence").innerHTML=sentence[randomSen(0,sentence.length-1)];

}

function randomSen(min,max){
    var num = max-min+1;
    return Math.floor(Math.random()*num+min);
}