
let imgBlocks=document.getElementsByClassName("blocks");// catch memory blocks to full
// get jason data

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
 document.getElementsByClassName("image")[i].addEventListener("click",countClicks);
}

//blocks click event
function countClicks(e){  //click block event function
    if(count%2==1){ // calculate clicks after 2 clicks
        clicks++; //minues number you should click
         document.getElementById("counte").innerHTML="clicks: "+clicks; //preview clicks in html
        
        }
    
         if(count<3){
        e.target.style.opacity="0";  // condition remove overlay
     
         }  
         
        count++; // increase count by 1 with every click

        //condition with first click take id and name to be checked again
        if(count==1){

            firstclick=e.srcElement.parentElement.firstElementChild.name;  //name of first click  block         
            firstClickId=e.target.parentElement.firstElementChild.id; //id name of first click block

            // console.log(firstclick+"  "+firstClickId +count);
            removediv1=e.srcElement.parentElement;
            resetdiv1=e.srcElement;
            stopdiv1=e.target.parentElement.firstElementChild;
            // console.log(stopdiv1);           
            
         }

        //condition with second click take id and name to be checked again

        else if(count==2){
            secondClickId=e.srcElement.parentElement.firstElementChild.id;//second click block name 
            secondclick=e.target.parentElement.firstElementChild.name;// second click block id

            // console.log(secondclick+"  "+ secondClickId);
            removediv=e.srcElement.parentElement;
            resetdiv=e.srcElement;
            stopdiv=e.target.parentElement.firstElementChild;

            // console.log(e);

            //condition if id and name match condition hide blocks
            if(firstClickId!=secondClickId){
                  if(firstclick==secondclick){
                count=0;
                score++;
                 setTimeout(function(){
                    removediv.style.opacity=".1";
                    removediv1.style.opacity=".1";
                    if(score==8){
                        alert("congratulation suceesed click ok to reset");
                        location.reload();
                    }
            },200)
                document.getElementById("score").innerHTML="score: "+score;
               removediv.removeEventListener("click",countClicks);
                removediv1.removeEventListener("click",countClicks);
            }
            else{
                
                setTimeout(function(){                 
                    resetdiv.style.opacity="1";
                    resetdiv1.style.opacity="1";},200);
                    count=0;
                    if(flag=1){
                    removediv.addEventListener("click",countClicks);
                    removediv1.addEventListener("click",countClicks);
                    count=0;
                    }
                }

            }
        else{
            removediv.removeEventListener("click",countClicks);
            removediv1.removeEventListener("click",countClicks);
           console.log("image same...."+stopdiv,stopdiv1,count,clicks);
           count=1;  
           flag=1;


        }}
        if (count>2 && flag==1){ 
            count=0;
            // console.log(e.srcElement.parentElement.firstElementChild.name+"  " +count);
        }
    

    // if user take all avalible clicks start again
    if(clicks==31){
        alert("lose you use all your trys clicks press ok to start again");
        location.reload();
        
    }


} // end event function
let minutes = 0;
let seconds = 0;


// clock with start game will calling
function startTimer() {
    setInterval(timer, 1500);
}
function timer() {
    seconds++;
    if (seconds == 60) {
        minutes += 1;
        seconds = 0;
       
    }
    document.getElementById("timer").innerHTML ="time: "+ minutes + ":"+seconds;

   
}
startTimer();
//variable defination   
  let count=0;
  let clicks=0;
  let score=0;
  let flag=0;
