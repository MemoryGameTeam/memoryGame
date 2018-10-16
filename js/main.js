var memoryDAta= new XMLHttpRequest();
memoryDAta.open('GET','../data.json');
memoryDAta.onload=function(){
    var data=JSON.parse(memoryDAta.responseText);
};
memoryDAta.send();