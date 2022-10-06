let a = document.getElementById("partyTimeButton");
let c = document.getElementById("lolcatImage");
let d = document.getElementById("timeEvent");
let e = document.getElementById("clock");
let f = "AM";

setInterval(()=>{
    let time = new Date();
    let houre = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
   
    if(houre >= 12 ){
        
        e.innerHTML = `${houre} : ${minutes} : ${seconds} pm!`
    }else{
       e.innerHTML = `${houre} : ${minutes} : ${seconds} AM!`
    }
    
},1000 );

a.addEventListener("click", changedata);


// toggle ---> on of
var b = true;
 function changedata(){
      b = !b;
    if(b){
       
        a.innerHTML ="party over";
        a.style.backgroundColor = "blue" ;
        c.src ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        d.innerHTML ="GOOD EVENING";
    }else{
        a.innerHTML ="party time";
        a.style.backgroundColor = "black" ;
        c.src ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        d.innerHTML ="lets party";

    }
    
}
