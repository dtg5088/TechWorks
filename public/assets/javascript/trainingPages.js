var coll = document.getElementsByClassName("collapsible");
var i;

//collapsible setting for side element
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//collapsing setting for top navigation bar
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });


  $(".sectionTab").click(function(){
    alert("The paragraph was clicked.");
    $(document).ready(function(){
        console.log($(this).attr("data-name"));
      });

    
    //if ($(this).attr(data))

  });
  
var images = ["/public/assets/images/ConcreteModule/concretePRAC1.PNG","/public/assets/images/ConcreteModule/concretePRAC2.PNG","/public/assets/images/ConcreteModule/concretePRAC3.PNG", "/public/assets/images/ConcreteModule/concretePRAC4.PNG", "/public/assets/images/ConcreteModule/concretePRAC5.PNG", "/public/assets/images/ConcreteModule/concretePRAC6.PNG"];
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