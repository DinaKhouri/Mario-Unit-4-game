//define sounds
var sound_jump = document.getElementById("sound_jump");
var sound_lose = document.getElementById("sound_lose");

//computer generates a random number between 19-120

randomNumber = Math.floor(Math.random() * 101 + 19);
console.log(randomNumber);
$("#number").html(randomNumber);
//computer generates values for each of the gems
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

//got mario to move with mouseX from the source  https://stackoverflow.com/questions/40394424/jquery-how-to-make-a-div-follow-a-cursor-within-its-center/40394477
$(document).bind("mousemove", function(e) {
  $(".mario").css({
    left: e.pageX - $(".container").width() / 6 //kept on changing the number till it works with my screen dimensions and its right under the block
  });
});

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
  //shake the block source https://www.youtube.com/watch?v=CBQGl6zokMs
  $("#block1")
    .addClass("animated bounce")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(this).removeClass("animated bounce");
      }
    );

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
  $("#block2")
    .addClass("animated bounce")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(this).removeClass("animated bounce");
      }
    );
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
  $("#block3")
    .addClass("animated bounce")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(this).removeClass("animated bounce");
      }
    );
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
  $("#block4")
    .addClass("animated bounce")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(this).removeClass("animated bounce");
      }
    );
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
