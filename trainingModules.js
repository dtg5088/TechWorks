var coll = document.getElementsByClassName("collapsible");
var i;

$(document).ready(function(){
  $('.sidenav').sidenav();
});

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

var trainingModule = function (){
  var page = 0, pos = 0, status, question;
  var pageStatus = document.getElementById("pageStatus");
  var pageInformation = document.getElementById("pageInformation");

  

//function collects all of the concrete training information
  function concreteModule (){
      var concreteInformation = [
          ['what is Concrete?',
              ['Concrete is made up of two components, aggregates and paste. Aggregates are generally classified into two groups, fine and coarse, and occupy about 60 to 80 percent of the volume of concrete. The paste is composed of cement, water, and entrained air and ordinarily constitutes 20 to 40 percent of the total volume.',
              'Each aggregate particle is completely coated with paste, and the space between the aggregate particles is completely filled with paste. The quality of the concrete is greatly dependent upon the quality of paste, which in turn, is dependent upon the ratio of water to cement content used, and the extent of curing.',
              'More water is used in mixing concrete than is required for complete hydration of the cement. This is required to make the concrete plastic and more workable; however, as the paste is thinned with water, its quality is lowered, it has less strength, and it is less resistant to weather. For quality concrete, a proper proportion of water to cement is essential.'
              ]
          ],
          ['Desirable Properties of Concrete?', 
              ['Durability: Ability of hardened concrete to resist deterioration caused by weathering, chemicals, and abrasion',
              "Workability: Ease of placing, handling, and finishing",
              "Weather Resistance: Resistance to deterioration caused by freezing and thawing, wetting and drying, and heating and cooling",
              "Erosion Resistance: Resistance to deterioration caused by water flow, traffic, and wind blasting",
              "Chemical Resistance: Resistance to deterioration caused by de-icing salts, salt water, sulfate salts",
              "Water Tightness: Resistance to water infiltration",
              "Strength: current and projected strenght of the concrete",
              "Economy: Cost to produce the concrete",
              ]
          ], 
      ];
      //calls function to execute the page
      pageExecution(concreteInformation);  
  }

  //function to organize information
  function pageExecution (information){

    //creating DOM elements
    var container = document.createElement('div');
    var paragragh = document.createElement('p');
    var heading = document.createElement('h2');

    for(var i = 0; i < information[0].length; i++){
        paragragh.append
    }



    console.log("This should be the length of con qs "+information[0][1]);
  }

  function domInput (){

      

  }




  function soilClassification(){

  }

  return{
      domInput:domInput,
      concreteModule: concreteModule
    }
}();




//window.addEventListener("load", trainingModule.concreteModule(), false);




















/*function _(x) {
  return document.getElementById(x);
}

function renderQuestion() {
  test = _("test");
    if(pos >= questions.length){
        _("test_status").innerHTML = "Test Completed";
        test.innerHTML = "<h3> You got "+correct+" of "+questions.length+" questions correct</h3><br>";
        test.innerHTML += "<h3>"+100*(correct/questions.length)+"%</h3>";
    
        return false;
    }



  //console.log(correct);
  _("test_status").innerHTML = "Question " + (pos+1) + " of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  test.innerHTML = "<h3>" + question + "</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  test.innerHTML += "<button onClick='checkAnswer()'> Submit Answer </button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i =0; i<choices.length; i++){
    if (choices[i].checked){
        choice = choices[i].value;
    }
  }
  if (choice == questions[pos][5]){
    correct++;
  }
  pos++;
  renderQuestion();
}

//renderQuestion();*/


