setInterval(()=>{
    var t=document.getElementById('time');
    var all= new Date()
    var hr=all.getHours();
    var min=all.getMinutes();
    var sec=all.getSeconds();
    var AmPm='AM'
    if(hr>=12)
      AmPm='PM'
    else  
      AmPm='AM'
    if(hr>12){
        hr=hr-12
    }
    
    function padZero(num){
        return num<10?"0"+num:num;
    }    
    t.innerHTML=`${padZero(hr)}:${padZero(min)}:${padZero(sec)} ${AmPm}`;},500)
//`${all.getHours()}:${all.getMinutes()}:${all.getSeconds()} ${all.getTimezoneOffset()}`

