
var y=setInterval(function(){
    var x= new Date("oct 7,2020,12:00:00").getTime()
    var now= new Date().getTime();
    var diff= x-now;
    var days= Math.floor(diff/ (1000*60*60*24));
    console.log(days);
    var hours= Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    console.log(hours);
    var min=Math.floor((diff%(1000*60*60))/(1000*60));
    console.log(min);
    var sec=Math.floor((diff%(1000*60))/1000);
    console.log(sec);
    document.getElementById("demo").innerHTML= days +"d," + hours + "hrs:" + min + "min:" +sec + "sec"
    },1000);