function time(){
    var components = document.getElementById("hour","minute","seconds","amorpm");
    var a = new Date();
    var b = a.getHours();
    var c = a.getMinutes();
    var d = a.getSeconds();
    var e = "";
    if (b>12){
        e="PM"
        b=b-12
    } else{
        e="AM"
    }
    var time = b+":"+c+":"+d+""+e;
    components.innerHTML=time;
} 
setInterval(()=>{time()},1000)








// const hourSpan = document.getElementById("hour");
// const minuteSpan = document.getElementById("minute");
// const secondsSpan = document.getElementById("seconnds");
// const amorpmSpan = document.getElementById("amorpm");

// function changeTime(){
//     const date = new Date();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amorpm;
//     hourSpan.textContent = hour;
//     minuteSpan.textContent = minutes;
//     secondsSpan.textContent = seconds;

//     if(hour >= 0 || hour <= 12){
//         amorpm = "AM"
//     } else{
//         amorpm = "PM"
//     }
//     amorpmSpan.textContent = amorpm;


// }


// setInterval(changeTime,1000);


