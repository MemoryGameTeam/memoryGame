let imgBlocks=document.getElementsByClassName("blocks");
// let overlayBlocks=document.getElementById("overlay");
// get jason data
let memoryDAta= new XMLHttpRequest();
memoryDAta.open('GET','../data.json');
memoryDAta.onload =function(){
     gameData=JSON.parse(memoryDAta.responseText);
setImages(gameData);
};

memoryDAta.send();
countClicks();
// function put json data in html
function setImages(data){


    for(i=0;i<data.length; i++)
    {
        imgBlocks[i].src = data[i].URL; 
        imgBlocks[i].name=data[i].name;
        imgBlocks[i].alt=data[i].alt;        
    }  


    
   
}
function countClicks(){
    
 for(i=0;i<imgBlocks.length;i++){
document.getElementsByClassName("image")[i].addEventListener("click",function(e){
    count++;clicks++;
         document.getElementById("counte").innerHTML="clicks"+count;
         if(clicks<3){
        e.target.style.opacity="0";
        console.log(e.srcElement.parentElement.firstElementChild.name);
    
        
         }
        
        
       
})
    }
}





  let count=0;
  let clicks=0;

