//localstorage.clear();

var secs=0;
var array=[4,5,2,67,84,54]



function stopwatch(){

    secs++;
   
    document.getElementsByTagName('p')[0].innerHTML=secs;
    console.log(secs);
}

function start(){
    myTime=setInterval(stopwatch,1000);
}


function stop(){
    clearInterval(myTime);
    array.push(secs);





}

for(var i=0;i<array.length;i++){
    for(var j=0;j<array.length;j++){


    if(array[i]<array[j]){

        var temp=array[j];
        array[j]=array[i];
        array[i]=temp;
    }
}
}

