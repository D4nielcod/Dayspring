// NAVIGATION BAR - MOBILE VIEW
function myFunction10() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {x.className = "navBar";}
}

// PICTURE SLIDE
imageChangere('.pic')

function imageChangere (classname){
  var imageGotten = document.querySelector(classname);
  imageArray = ['dayspring1.jpg','dayspring2.jpg','dayspring3.jpg'];
  var imageIndex = 0;

  function imageChanger() {
    if (imageIndex < 2) {imageIndex++;
      imageGotten.src = imageArray[imageIndex];
      }

    else if (imageIndex = 2){imageIndex = 0;
      imageGotten.src = imageArray[imageIndex];
      }
  }

  setInterval(imageChanger,5000);
}

// TEXT VISIBILITY
// Function One
function myFunction1() {
    var x = document.getElementById("joinOne");

    if (x.classList.contains("join")) {
        x.classList.replace("join", "join1");
    } else if (x.classList.contains("join1")) {
        x.classList.replace("join1", "join");
    }
}
setTimeout(myFunction1,1000);

// Underline
function underline() {
    var x = document.getElementById("joinOne");

    if (x.classList.contains("join1")) {
        x.classList.replace("join1", "join2");
    } else if (x.classList.contains("join2")) {
        x.classList.replace("join2", "join1");
    }
}
setInterval(underline,1000);

// Function Two
function myFunction2() {
    var x = document.getElementById("winningOne");

    if (x.classList.contains("winning")) {
        x.classList.replace("winning", "winning1");
    } else if (x.classList.contains("winning1")) {
        x.classList.replace("winning1", "winning");
    }
}
setTimeout(myFunction2,2000);

// Function Three
function myFunction3() {
    var x = document.getElementById("atOne");

    if (x.classList.contains("at")) {
        x.classList.replace("at", "at1");
    } else if (x.classList.contains("at1")) {
        x.classList.replace("at1", "at");
    }
}
setTimeout(myFunction3,3000);

// Function Four
function myFunction4() {
    var x = document.getElementById("dayOne");

    if (x.classList.contains("day")) {
        x.classList.replace("day", "day1");
    } else if (x.classList.contains("day1")) {
        x.classList.replace("day1", "day");
    }
}
setTimeout(myFunction4,4000);

// Function Five
function myFunction5() {
    var x = document.getElementById("tutorsOne");

    if (x.classList.contains("tutors")) {
        x.classList.replace("tutors", "tutors1");
    } else if (x.classList.contains("tutors1")) {
        x.classList.replace("tutors1", "tutors");
    }
}
setTimeout(myFunction5,5000);

// All Texts Disappear
setTimeout(myFunction1,10000); setTimeout(myFunction2,10000); setTimeout(myFunction3,10000); setTimeout(myFunction4,10000); setTimeout(myFunction5,10000);
//Code Text Visibility Repeats again
setTimeout(myFunction1,11000); setTimeout(myFunction2,12000); setTimeout(myFunction3,13000); setTimeout(myFunction4,14000); setTimeout(myFunction5,15000);
// All Texts Disappear
setTimeout(underline,20000); setTimeout(myFunction1,20000); setTimeout(myFunction2,20000); setTimeout(myFunction3,20000); setTimeout(myFunction4,20000); setTimeout(myFunction5,20000);
//Code Text Visibility Repeats again
setTimeout(myFunction1,21000); setTimeout(myFunction2,22000); setTimeout(myFunction3,23000); setTimeout(myFunction4,24000); setTimeout(myFunction5,25000);
// All Texts Disappear
setTimeout(underline,30000); setTimeout(myFunction1,30000); setTimeout(myFunction2,30000); setTimeout(myFunction3,30000); setTimeout(myFunction4,30000); setTimeout(myFunction5,30000);
//Code Text Visiblity Repeats again
setTimeout(myFunction1,31000); setTimeout(myFunction2,32000); setTimeout(myFunction3,33000); setTimeout(myFunction4,34000); setTimeout(myFunction5,35000);

// GO-tO-TOP BUTTON
var mybutton = document.getElementById("mytop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {mybutton.style.display = "none";}
}

// THE LOG-IN BOX & THE SIGN-UP BOX
function myFunctiontoggle(idname,boxname) {
  var x = document.getElementById(idname);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {x.style.display = "none";}

  var y = document.getElementById(boxname);
  if (y.style.display === "block") {
    y.style.display = "none";
  }
}

// THE IMAGE
function functionnobox() {
  var a = document.getElementById("mysignupbox");
  if (a.style.display === "block") {
    a.style.display = "none";
  }

  var b = document.getElementById("myloginBox");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
}
