var imageGotten=document.querySelector('.pic');
imageArray=['ovak1.jpg','ovak2.jpg','ovak3.jpg'];
var imageIndex=0;
function imageChanger(){
  if (imageIndex<2){imageIndex++;
                           imageGotten.src=imageArray[imageIndex];
                          }
  else if (imageIndex=2){imageIndex=0;
                    imageGotten.src=imageArray[imageIndex];
                                     }
}

setInterval(imageChanger,5000);

// Navigation Bar - Mobile viewport
function myFunction() {
  var x = document.getElementById("mynavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}
