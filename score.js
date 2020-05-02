var bestScoresChanged=JSON.parse(localStorage['bestscores']);
for(var i=0;i<bestScoresChanged.length;i++){
    for(var j=0;j<bestScoresChanged.length;j++){


    if(bestScoresChanged[i]<bestScoresChanged[j]){

        var temp=bestScoresChanged[j];
        bestScoresChanged[j]=bestScoresChanged[i];
        bestScoresChanged[i]=temp;
    }
}
}
var bestScoresChangedHard=JSON.parse(localStorage['bestscoresHard']);
for(var i=0;i<bestScoresChangedHard.length;i++){
    for(var j=0;j<bestScoresChangedHard.length;j++){


    if(bestScoresChangedHard[i]<bestScoresChangedHard[j]){

        var temp=bestScoresChangedHard[j];
        bestScoresChangedHard[j]=bestScoresChangedHard[i];
        bestScoresChangedHard[i]=temp;
    }
}
}



function displayScore(){
    for(var i=0;i<5;i++){
        document.getElementsByTagName('h3')[i].innerHTML=bestScoresChanged[i];

        console.log(bestScoresChanged[i]);
    }
}
displayScore();


function displayScoreHard(){
    
    for(var i=0;i<5;i++){
        document.getElementsByTagName('h3')[i].innerHTML=bestScoresChangedHard[i];

    }
}



