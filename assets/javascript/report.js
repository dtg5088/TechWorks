var trigger = false;
var location;
var phases = 5;
var seleced = [];
var tell;

// Concrete variables
var mold,sets,moldsPerSet,sampleAmount,pourAmount,airContent,slump,temperature;

var pos= 0, reportInput, test_status, question,choice=[],choices, chA,chB,chC,chD,chE,chF,correct=0;
var questions = [
    ['what type of inspection did you perform?(add one inspection at a time)'],
    ['what is the location of the work done?']
]


//window.addEventListener("load", renderQuestion(),true);
renderQuestion();

function _(x) {
    return document.getElementById(x);
}


//function to render first set of questions
function renderQuestion(){
    reportInput = _("reportInput");
    
    //Status of the page;
    _("test_status").innerHTML = "Question " +(pos + 1)+" out of "+ phases;
    question = questions[0][0];
    question2 = questions[1][0];
    chA = questions[0][1];
    chB = questions[0][2];
    chC = questions[0][3];
    chD = questions[0][4];
    chE = questions[0][5];
    chF = questions[0][6];
    chG = questions[0][7];

    //begining of created form
    reportInput.innerHTML = "<form name = 'reportField' method='post'> ";
    
    //Question One of first phase
    reportInput.innerHTML += "<h3>" +question + "</h3><br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Concrete'> "+chA+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Soils and Compaction'> "+chB+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Asphalt'> "+chC+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Masonry'> "+chD+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Fireproofing'> "+chE+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Steel Inspection'> "+chF+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Rebar'> "+chG+"<br>";

    //question two on first phase
    reportInput.innerHTML += "<h3>" +question2 + "</h3><br>";
    reportInput.innerHTML += "<input class= 'location op' type='text' name='input' style=' width: 500px;'placeholder='(ex): between gridline A-B on gridline 1' required><br><br>>";
    location = document.getElementsByClassName("location").value;
    console.log("THis is the location: "+ location);

    //Submit button for form
    reportInput.innerHTML += "<input type='submit' onClick='compareAnswer()'></input><br>";
    reportInput.innerHTML += "</form>"

}