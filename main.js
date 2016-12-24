//variables
var divArray = [];
var highestIndex = divArray.length;

//links
$("#box2").dblclick (function () {
    window.location.href = "./quotes.html";
  });

$("#box1").dblclick (function () {
    window.location.href = "./quotes.html#deweyquote";
  });

//interactive
$(".box").each(function () {
    divArray.push($(this));
});

$(".box").mousedown (function divOnTop () {
    var one = 1;
    $(this).css("zIndex", highestIndex+one);
    highestIndex = highestIndex + one;
});

$(".box").mouseover (function addBorder () {
    $(this).addClass("borderClass");
});

$(".box").mouseout (function removeBorder () {
  $(this).removeClass("borderClass");
});

//functions
function drag() {
    for (var i = 0; i<divArray.length; i++) {
      divArray[i].draggable();
  };
};

function generateRandom() {
    var num = Math.floor(Math.random()*80);
    return num;
};

function randomnize() {
    for (var i = 0; i < divArray.length; i++){
      var left = generateRandom();
      var top = generateRandom();
      var index = Math.floor(Math.random()*divArray.length+1);
      divArray[i].css({
        "position": "absolute", "top": top+"vh", "left": left+"vw", "zIndex": index
    });
  };
};

//function calls
$(document).ready(randomnize);
$(document).ready(drag);
