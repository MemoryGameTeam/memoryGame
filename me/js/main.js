
let imgBlocks=document.getElementsByClassName("blocks");
let gameBlock=document.getElementById("game");


let memoryDAta= new XMLHttpRequest();
memoryDAta.open('GET','../data.json');
memoryDAta.onload =function memoryGame(){
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
        imgBlocks[i].name = data[i].name;
        imgBlocks[i].alt = data[i].alt;        
    }      
}


for(i=0;i<imgBlocks.length;i++){
    document.getElementsByClassName("image")[i].addEventListener("click",countClicks)};


function countClicks(e){  
            count++;
            if (count%2+1==1){
                clicks--;
                document.getElementById("counte").innerHTML="<h2>"+ 'Clicks: ' + clicks+ "</h2>";
            }
            
            
            if(count<3 ){
            e.target.style.opacity="0";
            }  
            

            if(count==1){
                firstclick=e.srcElement.parentElement.firstElementChild.name;
                firstClickId=e.srcElement.parentElement.firstElementChild.id;
                removeImg1 = e.srcElement.parentElement;
                resetImg1 = e.srcElement;

            }
            else if(count==2){
                secondclick=e.srcElement.parentElement.firstElementChild.name;
                secondClickId=e.srcElement.parentElement.firstElementChild.id;
                removeImg2 = e.srcElement.parentElement;
                resetImg2 = e.srcElement;


                if(firstclick==secondclick && (firstClickId!=secondClickId)){
                    count=0;
                    score++
                    document.getElementById("score").innerHTML="<h2>"+ 'Score: '+ score+ "</h2>";
                    setTimeout(function(){
                        removeImg1.style.visibility="hidden";
                        removeImg2.style.visibility="hidden";
                    },400)


                }
                else{
                    count=0;
                    if(firstclick!=secondclick)
                    setTimeout(function(){
                        resetImg1.style.opacity="1";
                        resetImg2.style.opacity="1";
                    },500)

                }
            }   
            


            if(score==8){
                setTimeout(function(){
                    gameBlock.innerHTML = "<h1>"+ 'GREAT'+ ' <br>' +'YOU WON' + "</h1>"
                },500)            
            }

            if(clicks==0){
                setTimeout(function(){
                    gameBlock.innerHTML = "<h1>"+ 'PLEASE TRY AGAIN' + "</h1>"
                },500)   
            }
                 
    }
    
    var m = 0;
    var s = 0;
    function startTimer() {
        setInterval(gameTime, 1000);
    }




