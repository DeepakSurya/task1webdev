var numbers = [];
var array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];
var del = [];
var testArray = [];
var setValue = 0;
var secs = 0;
var myTime;
var timeArray = [];
var timeArrayHard = [];
noOfBoxes = 20;
var numbersHard = [];
var delHard = [];
var color = [];
var scoresArray = [];
var sound;
var colorsArray = [];
var bestScoresHard;
var bestScores;
var checkLevel = 0;

/* /ading bg sound

var bg= new Audio('bg.mp3');

bg.play()
*/

for (var i = 1; i < 41; i++) {
  numbersHard.push(i);
}
var delHard = [];
var scoresArrayHard = [];

//addind sound
var sound = new Audio();
sound.src = "jump.wav";

//setting up time array
var bestScoresChanged = JSON.parse(localStorage["bestscores"]);
for (var i = 0; i < bestScoresChanged.length; i++) {
  timeArray[i] = bestScoresChanged[i];
}
var bestScoresChangedHard = JSON.parse(localStorage["bestscoresHard"]);
for (var i = 0; i < bestScoresChangedHard.length; i++) {
  timeArrayHard[i] = bestScoresChangedHard[i];
}

// create random numbrs and round
function createRandomNumbers() {
  while (del.length < noOfBoxes) {
    var random = Math.round(Math.random() * (noOfBoxes - 1));
    if (del.indexOf(random) == -1) {
      del.push(random);
      console.log("del", del);
    }
  }

  for (var i = 0; i < 20; i++) {
    numbers[i] = array[del[i]];
  }
}

createRandomNumbers();

//function to assign values to boxes
function valueAssign() {
  for (var i = 0; i < noOfBoxes; i++) {
    var boxValue = document.getElementsByClassName("box")[i];
    boxValue.innerHTML = numbers[i];
  }
}
valueAssign();

//adding onCLick event listener
//adding a new layer to the boxes

//adding timer

function stopwatch() {
  secs++;

  document.getElementById("time").innerHTML = secs;
}

function start() {
  myTime = setInterval(stopwatch, 1000);
}

///////////

for (var i = 0; i < 20; i++) {
  var boxValue_2 = document.getElementsByClassName("box")[i];

  boxValue_2.addEventListener("click", function () {
    var value = this.innerHTML;

    /////////adding sounds
    sound.play();
    if (checkLevel == 0) {
      if (value - setValue == 1) {
        this.style.opacity = 0;

        for (var j = 0; j < 20; j++) {
          if (value == numbers[j]) {
            if (numbers[j] + 20 < 41) {
              numbers[j] = numbers[j] + 20;
            } else {
              numbers[j] = "";
            }
          }
        }

        // setting diff shades
        for (var i = 0; i < 20; i++) {
          var y = 100 - numbers[i] * 1.5;
          var setColor = y.toString();
          var color = "hsl(330, 100%, " + setColor + "%)";
          document.getElementsByClassName("box")[i].style.background = color;
        }

        ////////////////////////

        for (var z = 0; z < 20; z++) {
          this.style.opacity = 1;

          document.getElementsByClassName("box")[z].innerHTML = numbers[z];
        }
        setValue++;
      } else {
        alert("wrong");
      }
    }
    ///////////////////
    if (value == 1) {
      start();
    }
    if (checkLevel == 0) {
      if (value == 40) {
        clearInterval(myTime);
        alert(secs);

        timeArray.push(secs);
        document.getElementById("score").innerHTML = Math.min(...timeArray);
      }

      //////local storage setup
      bestScores = JSON.stringify(timeArray);
      localStorage.setItem("bestscores", bestScores);
    }
  });
}

document.getElementById("newGame").addEventListener("click", function () {
  location.reload();
});

document.getElementById("score").innerHTML = Math.min(timeArray);

document.getElementById("hard").addEventListener("click", levelHard);

/////////////////////////////////////////////////////////////////////////////////////////////////

function levelHard() {
  noOfBoxes = 40;
  var setValueHard = 0;
  document.getElementsByClassName("show")[0].classList.remove("show");
  checkLevel = 1;

  alert("Level HArd");

  while (delHard.length < noOfBoxes) {
    var random = Math.round(Math.random() * (noOfBoxes - 1));
    if (delHard.indexOf(random) == -1) {
      delHard.push(random);
    }
  }

  ////////////////////////////////////////

  ///assign values
  for (var i = 0; i < noOfBoxes; i++) {
    var boxValueHard = document.getElementsByClassName("box")[i];
    boxValueHard.innerHTML = numbersHard[delHard[i]];

    ////////////settinng shade

    for (var x = 0; x < 40; x++) {
      numbers[x] = document.getElementsByClassName("box")[x].innerHTML;
    }
    varyShade();
    ///////////////////////////////

    boxValueHard.addEventListener("click", function () {
      var valueHard = this.innerHTML;

      /////////adding sounds
      sound.play();

      if (valueHard == 1) {
        start();
      }

      ////////////////////////////////
      

      if (valueHard - setValueHard == 1) {
        for (var j = 0; j < noOfBoxes; j++) {
          if (valueHard == numbersHard[j]) {
            if (numbersHard[j] + 40 < 81) {
              numbersHard[j] = numbersHard[j] + 40;
            } else {
              numbersHard[j] = "";
            }
          }
        }
        for (var z = 0; z < noOfBoxes; z++) {
          document.getElementsByClassName("box")[z].innerHTML =
            numbersHard[delHard[z]];
        }
        setValueHard++;
        //////////////////////////////////////////
      } else {
        alert("wrong");
      }

      if (valueHard == 80) {
        clearInterval(myTime);
        alert(secs);

        timeArrayHard.push(secs);
        document.getElementById("score").innerHTML = Math.min(...timeArrayHard);
      }
      bestScoresHard = JSON.stringify(timeArrayHard);
      localStorage.setItem("bestscoresHard", bestScoresHard);

      for (var x = 0; x < 40; x++) {
        y = 80 - numbersHard[delHard[x]] * 1;
        var setColor = y.toString();
        var color = "hsl(330, 100%, " + setColor + "%)";

        console.log(color);
        document.getElementsByClassName("box")[x].style.background = color;
      }
    });
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////

for (var i = 1; i < 41; i++) {
  if (i < 21) {
    colorsArray.push(numbers[i]);
  } else {
    colorsArray.push(numbers[i - 20] + 20);
  }
}
console.log(colorsArray);

//function to change shade
function varyShade() {
  for (var x = 0; x < 40; x++) {
    y = 100 - numbers[x] * 1.5;
    var setColor = y.toString();
    var color = "hsl(330, 100%, " + setColor + "%)";

    console.log(color);
    document.getElementsByClassName("box")[x].style.background = color;
  }
}

varyShade();

function varyShades() {
  for (var x = 20; x < 20; x++) {
    y = 80 - numbers[x] * 1;
    var setColor = y.toString();
    var color = "hsl(330, 100%, " + setColor + "%)";

    document.getElementsByClassName("box")[x].style.background = color;
  }
}
varyShades();

timeArrayHard.push("4567", "2353", "55667", "6644");
///Adding link to easy
document.getElementById("easy").addEventListener("click", function () {
  location.reload();
});

/*
@keyframes example {
  from {
    left: 0px;
  }
  to {
    left: 380px;
  }
}
*/