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
  $('.sidenav').sidenav();



var pos = 0, test, test_status, question,  choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
  ['what is the color of the sky?', 'red', "green", "blue", "purple", "C"],
  ['what is the color of the ocean?', 'red', "amber", "blue", "yellow", "C"],
  ['what is the color of grass?', 'blue', "green", "red", "purple", "B",]
];

function _(x) {
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
  test.innerHTML += "<input type='radio' name='choices' value='A'class='choices'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'class='choices'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'class='choices'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'class='choices'> "+chD+"<br><br>";
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

//renderQuestion();

window.addEventListener("load", renderQuestion(), false);






























/*var concreteQuestions = [];
var choosenAnswers =[];
var length = 0;
// Constructor for creating questions into array
function Question(question, guess1, guess2, guess3, guess4, trueAnswer,dropper) {
    this.question = question;
    this.guess1 = guess1;
    this.guess2 = guess2;
    this.guess3 = guess3;
    this.guess4 = guess4;
    this.trueAnswer = trueAnswer;
    this.array = dropper.toUpperCase().trim();

    console.log(this.array);

    //Questions for concrete Exam
    if(this.array == "CONCRETE"){
      var element = [];
      element.push(this.question, this.guess1, this.guess2, this.guess3, this.guess4, this.trueAnswer, this.array);
      concreteQuestions.push(element);
      length++;
    }
  } 

var concreteQ1 = new Question('what is the color of the sky?', 'red', "green", "blue", "purple", "blue", "concrete");
var concreteQ2 = new Question('what is the color of the ocean?', 'red', "amber", "blue", "yellow", "blue", "concrete");
var concreteQ3 = new Question('what is the color of grass?', 'blue', "green", "red", "purple", "green", "concrete");
//this is always the last new Question
var concreteExamEnd = new Question('You completed the exam', ' ', " ", " ", " ", " ", "concrete");

console.log(concreteQuestions);
console.log("The length is: "+length);

// gathering variables from the DOM
// span gather of DOM
var question = document.getElementById("questions");
var choice1 = document.getElementById("guess1");
var choice2 = document.getElementById("guess2");
var choice3 = document.getElementById("guess3");
var choice4 = document.getElementById("guess4");
var count = 0;   

//input gathering from DOM
var questionInput = document.getElementById("questionsInput");
var choice1Input = document.getElementById("guess1Input");
var choice2Input = document.getElementById("guess2Input");
var choice3Input = document.getElementById("guess3Input");
var choice4Input = document.getElementById("guess4Input");

$(document).ready(function(){
  $("input[type='radio']").click(function(){
    var radioValue = $("input[name='choice']:checked").val();
    if(radioValue){
        //alert("The value that you clicked was " + radioValue);
        console.log(radioValue);
        choosenAnswers.push(radioValue);
    }
  });

});


questionFunction();

console.log(concreteQuestions[0]);

function questionFunction(){

    question.innerHTML = concreteQuestions[count][0];
    choice1.innerHTML = concreteQuestions[count][1];
    choice2.innerHTML = concreteQuestions[count][2];
    choice3.innerHTML = concreteQuestions[count][3];
    choice4.innerHTML = concreteQuestions[count][4];
  
    //setting value for spans
    question.setAttribute("value", concreteQuestions[count][0]);
    choice1.setAttribute("value", concreteQuestions[count][1]);
    choice2.setAttribute("value", concreteQuestions[count][2]);
    choice3.setAttribute("value", concreteQuestions[count][3]);
    choice4.setAttribute("value", concreteQuestions[count][4]);
  
    //setting value for inputs
    choice1Input.setAttribute("value", concreteQuestions[count][1]);
    choice2Input.setAttribute("value", concreteQuestions[count][2]);
    choice3Input.setAttribute("value", concreteQuestions[count][3]);
    choice4Input.setAttribute("value", concreteQuestions[count][4]);    
    
    count++;
    
    if (count === length){
      endExam(count);
    }

}
function endExam(count){

if (count === length){
  alert("You finished the exam!");
}

console.log(choosenAnswers);

}

*/
