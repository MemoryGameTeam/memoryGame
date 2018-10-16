var memoryDAta= new XMLHttpRequest();
memoryDAta.open('GET','../data.json');
memoryDAta.onload=function(){
    var data=JSON.parse(memoryDAta.responseText);
    console.log(data[0].url);
};
memoryDAta.send();