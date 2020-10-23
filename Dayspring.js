// Navigation Bar - Mobile viewport
function myFunction() {
  var x = document.getElementById("myTopnavsmall");
  if (x.className === "topnavsmall") {
    x.className += " responsive";
  } else {
    x.className = "topnavsmall";
  }
}

// Automatically Moving Pictures
imageChangere('.picsmall');
imageChangere('.pic')

function imageChangere (classname){
  var imageGotten = document.querySelector(classname);
  imageArray = ['dayspring1.jpg','dayspring2.jpg','dayspring3.jpg','dayspring4.jpg','dayspring5.jpg','dayspring6.jpg'];
  var imageIndex = 0;

  function imageChanger() {
    if (imageIndex < 5) {imageIndex++;
      imageGotten.src = imageArray[imageIndex];
      }

    else if (imageIndex = 5){imageIndex = 0;
      imageGotten.src = imageArray[imageIndex];
      }
  }

  setInterval(imageChanger,5000);
}

// Text Visiblity
// function one
function myFunction1() {
    var x = document.getElementById("joinOne");

    if (x.classList.contains("join")) {
        x.classList.replace("join", "join1");
    } else if (x.classList.contains("join1")) {
        x.classList.replace("join1", "join");
    }
}
setTimeout(myFunction1,1000);

//underline
function underline() {
    var x = document.getElementById("joinOne");

    if (x.classList.contains("join1")) {
        x.classList.replace("join1", "join2");
    } else if (x.classList.contains("join2")) {
        x.classList.replace("join2", "join1");
    }
}
setInterval(underline,1000);

// function two
function myFunction2() {
    var x = document.getElementById("winningOne");

    if (x.classList.contains("winning")) {
        x.classList.replace("winning", "winning1");
    } else if (x.classList.contains("winning1")) {
        x.classList.replace("winning1", "winning");
    }
}
setTimeout(myFunction2,2000);

// function three
function myFunction3() {
    var x = document.getElementById("atOne");

    if (x.classList.contains("at")) {
        x.classList.replace("at", "at1");
    } else if (x.classList.contains("at1")) {
        x.classList.replace("at1", "at");
    }
}
setTimeout(myFunction3,3000);

// function four
function myFunction4() {
    var x = document.getElementById("dayOne");

    if (x.classList.contains("day")) {
        x.classList.replace("day", "day1");
    } else if (x.classList.contains("day1")) {
        x.classList.replace("day1", "day");
    }
}
setTimeout(myFunction4,4000);

// function five
function myFunction5() {
    var x = document.getElementById("tutorsOne");

    if (x.classList.contains("tutors")) {
        x.classList.replace("tutors", "tutors1");
    } else if (x.classList.contains("tutors1")) {
        x.classList.replace("tutors1", "tutors");
    }
}
setTimeout(myFunction5,5000);

// All text disappear
setTimeout(myFunction1,10000);
setTimeout(myFunction2,10000);
setTimeout(myFunction3,10000);
setTimeout(myFunction4,10000);
setTimeout(myFunction5,10000);

//Code Text Visiblity Repeats again
setTimeout(myFunction1,11000);
setTimeout(myFunction2,12000);
setTimeout(myFunction3,13000);
setTimeout(myFunction4,14000);
setTimeout(myFunction5,15000);

// All text disappear
setTimeout(myFunction1,20000);
setTimeout(myFunction2,20000);
setTimeout(myFunction3,20000);
setTimeout(myFunction4,20000);
setTimeout(myFunction5,20000);

//Code Text Visiblity Repeats again
setTimeout(myFunction1,21000);
setTimeout(myFunction2,22000);
setTimeout(myFunction3,23000);
setTimeout(myFunction4,24000);
setTimeout(myFunction5,25000);

// All text disappear
setTimeout(myFunction1,30000);
setTimeout(myFunction2,30000);
setTimeout(myFunction3,30000);
setTimeout(myFunction4,30000);
setTimeout(myFunction5,30000);

//Code Text Visiblity Repeats again
setTimeout(myFunction1,31000);
setTimeout(myFunction2,32000);
setTimeout(myFunction3,33000);
setTimeout(myFunction4,34000);
setTimeout(myFunction5,35000);
