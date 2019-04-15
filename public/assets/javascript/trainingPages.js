

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

  //side nave open and close functions for Materialize
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $('.sidenav').sidenav();

  

var images = [];
var imageNumber = 0;
var imageLength = 0;


window.onload = function(){

  

  function ParseURLParameter(Parameter){

    //Usage: var PageName = ParsedURLParameter('page')

    var FullURL = window.location.search.substring(1);
    var ParametersArray = FullURL.split('&');
    for (var i = 0; i < ParametersArray.length ; i++){
      var CurrentParameter = ParametersArray[i].split("=");
      if(CurrentParameter[0]==Parameter){
        return CurrentParameter[1];
      }
    }
  }

  var PageName = ParseURLParameter('page');

  if (typeof PageName !=="undefined"){
    //parses for concrete modules
    if(PageName == 'concrete'){
      
      images = ["assets/images/ConcreteModule/concretePRAC1.PNG","/assets/images/ConcreteModule/concretePRAC2.PNG","/assets/images/ConcreteModule/concretePRAC3.PNG", "/assets/images/ConcreteModule/concretePRAC4.PNG", "/assets/images/ConcreteModule/concretePRAC5.PNG", "/assets/images/ConcreteModule/concretePRAC6.PNG"];
      imageNumber = 0;
      imageLength = (images.length-1);
    }
    //parses for soils modules
    if(PageName == 'soils'){
      images = ["assets/images/SoilsModule/asphalt.jpeg","assets/images/SoilsModule/concreteImg.jpg","assets/images/SoilsModule/constructionImg-jumbotron.jpg", "/assets/images/ConcreteModule/concretePRAC4.PNG", "/assets/images/ConcreteModule/concretePRAC5.PNG", "/assets/images/ConcreteModule/concretePRAC6.PNG"];
      imageNumber = 0;
      imageLength = (images.length-1);
    }
  } 
}

//beginning of Concrete Module
function concreteModule(){
  alert("Found the Concrete Page");
  // images = ["assets/images/ConcreteModule/concretePRAC1.PNG","/assets/images/ConcreteModule/concretePRAC2.PNG","/assets/images/ConcreteModule/concretePRAC3.PNG", "/assets/images/ConcreteModule/concretePRAC4.PNG", "/assets/images/ConcreteModule/concretePRAC5.PNG", "/assets/images/ConcreteModule/concretePRAC6.PNG"];
  // imageNumber = 0;
  // imageLength = (images.length-1);


  
}

//beginning of Soils Module
function soilsModule(){

  alert("Found the Soils Page");

}



//counter function to implement slide counter
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







// var coll = document.getElementsByClassName("collapsible");
// var i;

// //collapsible setting for side element
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// }

// //collapsing setting for top navigation bar
// /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

//   $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });
//   $('.sidenav').sidenav();


//   $(".sectionTab").click(function(){
//     alert("The paragraph was clicked.");
//     $(document).ready(function(){
//         console.log($(this).attr("data-name"));
//       });

    
//     //if ($(this).attr(data))

//   });
  
// var images = ["assets/images/ConcreteModule/concretePRAC1.PNG","/assets/images/ConcreteModule/concretePRAC2.PNG","/assets/images/ConcreteModule/concretePRAC3.PNG", "/assets/images/ConcreteModule/concretePRAC4.PNG", "/assets/images/ConcreteModule/concretePRAC5.PNG", "/assets/images/ConcreteModule/concretePRAC6.PNG"];
// var imageNumber = 0;
// var imageLength = (images.length-1);

// function changeImage(x){
//     imageNumber += x;   
//     if(imageNumber > imageLength){
//         imageNumber = 0; // in the future change this to open a Quiz or exam page
//     }
//     if(imageNumber < 0){
//         imageNumber = 0; // in the future change this to open a Quiz or exam page
//     }

//     document.getElementById("slideshow").src=images[imageNumber];

//     return false;
// }