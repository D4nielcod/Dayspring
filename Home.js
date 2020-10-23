var imageGotten=document.querySelector('.pic');
imageArray=['Image11.jpg','Image20.jpg','Image3.webp'];
var imageIndex=0;
function imageChanger(){
  if (imageIndex<2){imageIndex++;
                           imageGotten.src=imageArray[imageIndex];
                          }
  else if (imageIndex=2){imageIndex=0;
                    imageGotten.src=imageArray[imageIndex];
                                     }
}

setInterval(imageChanger,3000);
