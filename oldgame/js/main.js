let imgBlocks=document.getElementsByClassName("blocks");
// let overlayBlocks=document.getElementById("overlay");
// get jason data
let memoryDAta= new XMLHttpRequest();
memoryDAta.open('GET','../data.json');
memoryDAta.onload =function(){
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
    document.getElementsByClassName("overlay")[i].addEventListener("click",countClicks);
   
}
function countClicks(e){
    

   if(allcounts==60){
       
    allcount++;
    if(count%2==1){
        clicks--;
         document.getElementById("counte").innerHTML="clicks"+clicks;
        }
    
         if(count<3){
        e.target.style.opacity="0"; 
        
         }  
   
        count++;
        if(count==1){
            console.log(e);
            firstclick=e.srcElement.parentElement.firstElementChild.name;
            firstClickId=e.srcElement.parentElement.firstElementChild.id;
            console.log(firstclick+"  " +count);
            removediv1=e.srcElement.parentElement;
            resetdiv1=e.srcElement;
            
        }
        else if(count==2){
            console.log(e);
            secondclick=e.srcElement.parentElement.firstElementChild.name;
            console.log(secondclick+"  " +count);
            removediv=e.srcElement.parentElement;
            resetdiv=e.srcElement;
            console.log(resetdiv);
            if(firstclick==secondclick){
                count=0;
                score++;
                 setTimeout(function(){
                removediv.style.visibility="hidden";
                removediv1.style.visibility="hidden";
                console.log("match");},200)
                document.getElementById("score").innerHTML=score;
                 
            }
                else{
                    
                    setTimeout(function(){                 
                    resetdiv.style.opacity="1";
                    resetdiv1.style.opacity="1";},200);
                    count=0;
                   
                }
        }
        else if(count>2){
            count=0;
            console.log(e.srcElement.parentElement.firstElementChild.name+"  " +count);
        }
    

    }
}

     
    
  let count=0;
  let clicks=30;
  let score=0;