load(); //  load function with start page
let imgBlocks=document.getElementsByClassName("blocks");// catch memory blocks to full

// get jason data
function load(){ //load function start with page reload 
let memoryDAta= new XMLHttpRequest(); // ajax request
memoryDAta.open('GET','../data.json'); //getjson file
memoryDAta.onload =function(){  //convert json to object 
     gameData=JSON.parse(memoryDAta.responseText); 
     gameData.sort (function(){
        return .5-Math.random();
   });
setImages(gameData); 
};
memoryDAta.send();
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
}
//blocks click event
function countClicks(e){ 
     //click block event function
    startTimer();// start timer to show spend time
if(clicks<=50){ //max clicks users can do
    if(count%2==1){ // calculate clicks after 2 clicks
        clicks--; //minues number you should click
         document.getElementById("counte").innerHTML="clicks"+clicks; //preview clicks in html
        
        }
    
         if(count<3){
        e.target.style.opacity="0";  // condition remove overlay
     
         }  
        count++; // increase count by 1 with every click

        //condition with first click take id and name to be checked again
        if(count==1){
            firstclick=e.srcElement.parentElement.firstElementChild.name;            
            firstClickId=e.srcElement.parentElement.firstElementChild.id;
            console.log(firstclick+"  "+firstClickId +count);
            removediv1=e.srcElement.parentElement;
            resetdiv1=e.srcElement;
            stopdiv1=e.srcElement.parentElement.firstElementChild;
            
        }
        //condition with second click take id and name to be checked again
        else if(count==2){
            secondClickId=e.srcElement.parentElement.firstElementChild.id;
            secondclick=e.srcElement.parentElement.firstElementChild.name;
            console.log(secondclick+"  "+ secondclick +count);
            removediv=e.srcElement.parentElement;
            resetdiv=e.srcElement;
            stopdiv=e.srcElement.parentElement.firstElementChild;
            console.log(resetdiv);
            //condition if id and name match condition hide blocks
            if((firstclick==secondclick) && (firstClickId!=secondClickId)){
                count=0;
                score++;
                 setTimeout(function(){
                    stopdiv.removeEventListener("click",countClicks);
                    stopdiv.style.opacity=".1";
                    stopdiv1.style.opacity=".1";
            },200)
                document.getElementById("score").innerHTML=score;
                if(score=8){
                    alert("congratulation suceesed click ok to reset");
                    setImages(gameData);
                    load();
                    countClicks();
                    
                }
                 
            }
                //condition if id and name doesnot match condition reset blocks
                else{
                 
                   if(firstclick!=secondclick){
                    setTimeout(function(){                 
                    resetdiv.style.opacity="1";
                    resetdiv1.style.opacity="1";},200);
                    count=0;}
                        //condition to remove clicks of an open image
                        if(firstClickId==secondClickId){                    
                        console.log( e.srcElement.parentElement.firstElementChild.id);
                        stopdiv.removeEventListener("click",countClicks);
                        count=1;
                    }
                   
                
        }} //end of coundation count==2

        //condition to reset count if it more than 2 clicks
        else if(count>2){ 
            count=0;
            console.log(e.srcElement.parentElement.firstElementChild.name+"  " +count);
        }
    

    // if user take all avalible clicks start again
    else{
        alert("lose you use all your trys clicks press ok to start again");
        load();
        let count=0;
        let clicks=50;
        let score=0;
      let allCount=0;
        
    }
} //end check if clicks less 50

} // end event function
var minutes = 0;
var seconds = 0;


// clock with start game will calling
function startTimer() {
    setInterval(timer, 1000);
}
function timer() {
    seconds++;
    if (seconds == 60) {
        minutes += 1;
        seconds = 0;
       
    }
    document.getElementById("timer").innerHTML = minutes + " :"+seconds;
 
   
}
//variable defination   
  let count=0;
  let clicks=50;
  let score=0;
