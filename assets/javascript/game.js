//define sounds
var sound_jump = document.getElementById("sound_jump");
var sound_lose = document.getElementById("sound_lose");

//computer generates a random number between 19-120

randomNumber = Math.floor(Math.random() * 101 + 19);
console.log(randomNumber);
$("#number").html(randomNumber);
randomBlock1 = Math.floor(Math.random() * 15 + 1);
console.log(randomBlock1);
randomBlock2 = Math.floor(Math.random() * 15 + 1);
console.log(randomBlock2);
randomBlock3 = Math.floor(Math.random() * 15 + 1);
console.log(randomBlock3);
randomBlock4 = Math.floor(Math.random() * 15 + 1);
console.log(randomBlock4);

//define variables
var score = 0;
var wins = 0;
var loss = 0;
//create function called reset to generate random numbers when called (will call it later in the code)
function reset() {
  var score = 0;
  randomNumber = Math.floor(Math.random() * 101 + 19);
  console.log(randomNumber);
  $("#number").html(randomNumber);
  randomBlock1 = Math.floor(Math.random() * 15 + 1);
  console.log(randomBlock1);
  randomBlock2 = Math.floor(Math.random() * 15 + 1);
  console.log(randomBlock2);
  randomBlock3 = Math.floor(Math.random() * 15 + 1);
  console.log(randomBlock3);
  randomBlock4 = Math.floor(Math.random() * 15 + 1);
  console.log(randomBlock4);
}
//computer generates values for each of the gems that can add up to equal the first random number
//on click event for each of the buttons(click keys to move mario)
// source https://www.tutorialrepublic.com/faq/move-an-element-to-left-right-up-and-down-using-arrow-keys-in-jquery.php
// $(document).keydown(function(e) {
//   switch (e.which) {
//     case 37: //left arrow key
//       $(".mario")
//         .finish()
//         .animate({
//           left: "-=50"
//         });
//       break;
//     case 38:
//up arrow key //to make it jump i had to add 2 animate lines:
//one to get it to go up, and followed by another one in the negative value to make it go back down in the same value

//       $(".mario")
//         .finish()
//         .animate({
//           top: "-=115"
//         });
//       $(".mario")
//         .finish()
//         .animate({
//           top: "+=115"
//         });
//       sound_jump.play();
//       var posMario = $(".mario").position();
//       console.log(posMario);

//       break;
//     case 39: //right arrow key
//       $(".mario")
//         .finish()
//         .animate({
//           left: "+=50"
//         });
//       break;
//   }
// });
//got mario to move with mouseX from the source  https://stackoverflow.com/questions/40394424/jquery-how-to-make-a-div-follow-a-cursor-within-its-center/40394477
$(document).bind("mousemove", function(e) {
  $(".mario").css({
    left: e.pageX - $(".container").width() / 6 // just minus by half the width
  });
});

//now i need to add a collision affect that trigers the value of the block that mario hits

var pos1 = $("#block1").position();
console.log(pos1);

var pos2 = $("#block2").position();
console.log(pos2);

var pos3 = $("#block3").position();
console.log(pos3);

var pos4 = $("#block4").position();
console.log(pos4);
//create a function for mario jump to call it inside the mouse on click function
function marioJump() {
  $(".mario")
    .finish()
    .animate({
      top: "-=115"
    });
  $(".mario")
    .finish()
    .animate({
      top: "+=115"
    });
  sound_jump.play();
}

//on click event adds the number to the score
$("#block1").on("click", function() {
  marioJump();

  console.log("clicked");
  score += randomBlock1;
  $(".score").html(score);
  if (score === randomNumber) {
    wins += 1;
    $(".wins").html(wins);
    alert("You win!");
    score = 0;
    reset();
  } else if (score > randomNumber) {
    loss += 1;
    $(".loss").html(loss);
    alert("You lose!!");
    score = 0;
    reset();
  }
});

$("#block2").on("click", function() {
  marioJump();
  console.log("clicked");
  score += randomBlock2;
  $(".score").html(score);
  if (score === randomNumber) {
    wins += 1;
    $(".wins").html(wins);
    alert("You win!");
    score = 0;
    reset();
  } else if (score > randomNumber) {
    loss += 1;
    $(".loss").html(loss);
    alert("You lose!!");
    score = 0;
    reset();
  }
});

$("#block3").on("click", function() {
  marioJump();
  console.log("clicked");
  score += randomBlock3;
  $(".score").html(score);
  if (score === randomNumber) {
    wins += 1;
    $(".wins").html(wins);
    alert("You win!");
    score = 0;
    reset();
  } else if (score > randomNumber) {
    loss += 1;
    $(".loss").html(loss);
    alert("You lose!!");
    score = 0;
    reset();
  }
});

$("#block4").on("click", function() {
  marioJump();
  console.log("clicked");
  score += randomBlock4;
  $(".score").html(score);
  if (score === randomNumber) {
    wins += 1;
    $(".wins").html(wins);
    alert("You win!");
    score = 0;
    reset();
  } else if (score > randomNumber) {
    loss += 1;
    alert("You lose!!");
    $(".loss").html(loss);
    score = 0;
    reset();
  }
});

//if score>random number user loses and adds 1 to loss
//if score= random number user wins and adds 1 to wins
//user clicks anywhere to play another game , losses and wins stay the same
