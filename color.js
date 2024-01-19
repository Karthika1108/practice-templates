var text=document.getElementById("colorName");
var bt=document.getElementById("btn");
var b=document.getElementById("bod");
var hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
bt.addEventListener('click',function(){
    var str="#";
    for(var i=1;i<=6;i++){
        str+=getHex();
    }
    text.innerHTML=str;
    console.log(str);
    b.style.backgroundColor=str;

});

function getHex(){
   var value=Math.ceil(Math.random()*15);
   return hex[value];
}

   

