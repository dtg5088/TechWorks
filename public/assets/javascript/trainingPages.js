var images = ["/public/assets/images/conDele1.PNG","/public/assets/images/conDele2.PNG","/public/assets/images/conDele3.PNG"];
var imageNumber = 0;
var imageLength = (images.length-1);

function changeImage(x){
    imageNumber += x;
    if(imageNumber > imageLength){
        imageNumber = 0; // in the future change this to open a Quiz or exam page
    }
    if(imageNumber < 0){
        imageNumber = 0; // in the future change this to open a Quiz or exam page
    }

    document.getElementById("slideshow").src=images[imageNumber];

    return false;
}