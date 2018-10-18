load();
let imgBlocks=document.getElementsByClassName("blocks");
// let overlayBlocks=document.getElementById("overlay");
// get jason data
function load(){
let memoryDAta= new XMLHttpRequest();
memoryDAta.open('GET','../data.json');
memoryDAta.onload =function(){
     gameData=JSON.parse(memoryDAta.responseText);
setImages(gameData);
};
memoryDAta.send();
startTimer();
}


// function put json data in html
function setImages(data){

    for(i=0;i<data.length; i++)
    {
        imgBlocks[i].src = data[i].URL; 
        imgBlocks[i].name=data[i].name;
        imgBlocks[i].id=data[i].id;
        imgBlocks[i].alt=data[i].alt;        
    }  

}
for(i=0;i<imgBlocks.length;i++){
    document.getElementsByClassName("overlay")[i].addEventListener("click",countClicks);
    // if(document.getElementById("unclick").onclick){
     
    // removeEventListener("click",countClicks);
    // }
}
function countClicks(e){ 
    allCount++;  
if(allCount<=50){
    if(count%2==1){
        clicks--;
         document.getElementById("counte").innerHTML="clicks"+clicks;
        }
    
         if(count<3){
        e.target.style.opacity="0"; 
        // if(count==1){
        // e.srcElement.parentElement.firstElementChild.id="id1";
        // }
        // else if(count==2){
        //     e.srcElement.parentElement.firstElementChild.id="id2";

        // }
        // else{
        //     e.srcElement.parentElement.firstElementChild.id="";
        // }
        
         }  
   
   
        count++;
        if(count==1){
        
            firstclick=e.srcElement.parentElement.firstElementChild.name;            
            firstClickId=e.srcElement.parentElement.firstElementChild.id;
                     console.log(firstclick+"  "+firstClickId +count);
            removediv1=e.srcElement.parentElement;
            resetdiv1=e.srcElement;
            stopdiv1=e.srcElement.parentElement.firstElementChild;
            
        }
        else if(count==2){
            secondClickId=e.srcElement.parentElement.firstElementChild.id;
            secondclick=e.srcElement.parentElement.firstElementChild.name;
            console.log(secondclick+"  "+ secondclick +count);
            removediv=e.srcElement.parentElement;
            resetdiv=e.srcElement;
            stopdiv=e.srcElement.parentElement.firstElementChild;
            console.log(resetdiv);
            if((firstclick==secondclick) && (firstClickId!=secondClickId)){
                count=0;
                score++;
                 setTimeout(function(){
                removediv.style.visibility="hidden";
                removediv1.style.visibility="hidden";
            },200)
                document.getElementById("score").innerHTML=score;
                 
            }
                else{
                   if(firstclick!=secondclick)
                    setTimeout(function(){                 
                    resetdiv.style.opacity="1";
                    resetdiv1.style.opacity="1";},200);
                    count=0;
                    if(firstClickId==secondClickId){

                    }
                    
                        console.log( e.srcElement.parentElement.firstElementChild.id);
                        stopdiv.removeEventListener("click",countClicks);
                        count=1;
                    }
                   
                
        }
        else if(count>2){
            count=0;

            console.log(e.srcElement.parentElement.firstElementChild.name+"  " +count);
        }
    

    }
    else{
        alert("lost press ok to start again");
        load();
        let count=0;
        let clicks=30;
        let score=0;
      let allCount=0;
        
    }
}
var m = 0;
var s = 0;

function startTimer() {
    setInterval(pomodoro, 1000);
}
function pomodoro() {
    s++;
    if (s == 60) {
        m += 1;
        s = 0;
       
    }
    document.getElementById("timer").innerHTML = m + " :"+s;
 
   
}

     
    
  let count=0;
  let clicks=30;
  let score=0;
let allCount=0;