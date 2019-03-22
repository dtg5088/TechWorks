var trigger = false;
var location;
var phases = 5;
var selected = [];
var tell;

//Concrete Variables
var mold, sets, moldsPerSet, sampleAmount, pourAmount, airContent, slump, temperature;


var pos = 0, reportInput, test_status, question, choice = [], choices, chA, chB, chC, chD, chE, chF, correct = 0;
var questions = [
        ['What type of inspection did you perform? (If multiple, add one at a time)', 'Concrete', "Soils and Compaction", "Asphalt", "Masonry", "Fireproofing", "Steel Inspection", 'Reinforcing Steel (Rebar)'],
        ['What is the location of the work done?'],
  ];


function _(x) {
    return document.getElementById(x);
  }

function renderQuestion() {
    reportInput = _("reportInput");
        if(pos >= phases){
            _("test_status").innerHTML = "Test Completed";
            reportInput.innerHTML = "<h3> You got "+correct+" of "+questions.length+" questions correct</h3><br>";
            reportInput.innerHTML += "<h3>"+100*(correct/questions.length)+"%</h3>";
            
            return false;
        }
    //status of the page;
    _("test_status").innerHTML = "Question " + (pos+1) + " of "+phases;
    question = questions[0][0];
    question2 = questions[1][0];
    chA = questions[0][1];
    chB = questions[0][2];
    chC = questions[0][3];
    chD = questions[0][4];
    chE = questions[0][5];
    chF = questions[0][6];
    chG = questions[0][7];


    reportInput.innerHTML = "<form name = 'reportField' method='post'> ";

    //question one on first phase
    reportInput.innerHTML += "<h3>" + question + "</h3><br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Concrete'> "+chA+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Soils and Compaction'> "+chB+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Asphalt'> "+chC+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Masonry'> "+chD+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Fireproofing'> "+chE+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Steel Inspection'> "+chF+"<br>";
    reportInput.innerHTML += "<input class= 'op' type='radio' name='choices' value='Rebar'> "+chF+"<br><br>";

    //question 2 on first phase
    reportInput.innerHTML += "<h3>" + question2 + "</h3>";
    /***/reportInput.innerHTML += "<input class='location op' style='width: 500px;'type='text' name='INPUT' placeholder='(ex): between gridline A-B on gridline 1' required><br><br>";
    location = document.getElementsByClassName("location").value;
    console.log("this is the location: "+ location);

    //submit button
    reportInput.innerHTML += "<input type='submit' onClick='compareAnswer()'></input>";
    reportInput.innerHTML += "</form>";
}





//Begining of concrete Form to DOM
function concrete(){

    var concrete = [
            [ "What was the size of the molds casted?", "4x8 cylinder molds", "6x12 cylinder molds"],
            [ "How many sets were created?"],
            [ "How many molds per set were created?"],
            [ "How many cubic yards of concrete was poured approximatly?"],
            [ "Slump (inches):"],
            [ "Air Content (%):"],
            [ "Temperature of the concrete (F*):"],
            [ "What structural element was poured?"]
        ]
    
    _("test_status").innerHTML = "Question " + (pos+1) + " of "+phases;
    conQuestion = concrete[0][0];
    var ch1A = concrete[0][1];
    var ch1B = concrete[0][2];
    conQuestion2 = concrete[1][0]; // Set created
    conQuestion3 = concrete[2][0]; // molds per set created
    conQuestion4 = concrete[3][0]; // amount of concrete poured
    conQuestion5 = concrete[4][0]; // Slump
    conQuestion6 = concrete[5][0]; // Air Content
    conQuestion7 = concrete[6][0]; // Temperature
    conQuestion8 = concrete[7][0]; // Pour element    


    reportInput.innerHTML = "<form name = 'reportField' method='post'> ";

    //question 1 on phase 2 
    reportInput.innerHTML = "<h4>" + conQuestion + "</h4><br>";
    reportInput.innerHTML += "<input class= 'selected op' type='radio' name='choices' value='4x8'> "+ch1A+"<br>";
    reportInput.innerHTML += "<input class= 'selected op' type='radio' name='choices' value='6x12'> "+ch1B+"<br><br>";

    //question 2 on phase 2 
    reportInput.innerHTML += "<h4>" + conQuestion2 + "</h4>";
    reportInput.innerHTML += "<input  class='sets op' style='width: 200px;'type='text'  name='choices' placeholder='(ex): 2 ' required ><br><br>";

     //question 3 on phase 2 
     reportInput.innerHTML += "<h4>" + conQuestion3 + "</h4>";
     reportInput.innerHTML += "<input  class='moldsPerSet op' style='width: 200px;'type='text'  name='choices' placeholder='(ex): 6 or 9' required ><br><br>";

     //question 4 on phase 2 
    reportInput.innerHTML += "<h4>" + conQuestion4 + "</h4>";
    reportInput.innerHTML += "<input class='amount op' style='width: 200px;'type='text' name='choices' placeholder='(ex): 70 ' required ><br><br>";

    //question 5 on phase 2
    reportInput.innerHTML += "<h4>" + conQuestion5 + "</h4>";
    reportInput.innerHTML += "<input class='slump op' style='width: 200px;'type='text' name='choices' placeholder='(ex): 3 ' required ><br><br>";

    //question 6 on phase 2
    reportInput.innerHTML += "<h4>" + conQuestion6 + "</h4>";
    reportInput.innerHTML += "<input class='airContent op' style='width: 200px;'type='text' name='choices' placeholder='(ex): 4 ' required ><br><br>";

    //question 7 on phase 2 
    reportInput.innerHTML += "<h4>" + conQuestion7 + "</h4>";
    reportInput.innerHTML += "<input class='temperature op' style='width: 200px;'type='text' name='choices' placeholder='(ex): 75 ' required ><br><br>";

    //question 8 on phase 2
    reportInput.innerHTML += "<h4>" + conQuestion8 + "</h4>";
    reportInput.innerHTML += "<input class='element op' style='width: 200px;'type='text' name='choices' placeholder='(ex): 75 ' required ><br><br>";
 

    //submit button
    reportInput.innerHTML += "<input type='submit' onClick='saveConInfo()'></input>";
    reportInput.innerHTML += "</form>";

}


// Saves the Concrete information to global variables
function saveConInfo(selected){

    choices = document.getElementsByName("choices");

    console.log("This is choices: "+choices)
    for(var i = 0; i<choices.length; i++){
        if (choices[i].checked){
            choice.push(choices[i].value);
            console.log("choices[i].value: "+ choices[i].value);
            mold = choices[i].value;
        }
    }
    
    // if(selected[0] == "6x12"){ mold = "6x12";} 
    // else { mold = "4x8";}

    console.log("Mold is: "+ mold);

    sets = document.getElementsByClassName("sets")[0].value;
    moldsPerSet = document.getElementsByClassName("moldsPerSet")[0].value;
    pourAmount = document.getElementsByClassName("amount")[0].value;
    slump = document.getElementsByClassName("slump")[0].value;
    airContent = document.getElementsByClassName("airContent")[0].value;
    temperature = document.getElementsByClassName("temperature")[0].value;
    element = document.getElementsByClassName("element")[0].value;

    console.log("Mold is: "+ mold);
    console.log("Sets: "+ sets);
    console.log("Molds per Set: "+ moldsPerSet);
    console.log("Pour amount: "+ pourAmount);
    console.log("Slump: "+ slump);

    compareAnswer();

}











function soils(){
    alert("soils section");

}

function asphalt(){
    alert("asphalt section");

}



// Non conformance function
function nonCompliance(){

    var discrepancies = [
        [ "Were there any non-compliances or discrepancies during your inspection? If so please explain below."],
    ]

    _("test_status").innerHTML = "Question " + (pos+1) + " of "+phases;
    reportInput.innerHTML = "<h4>" + "yo" + "</h4>";
}




///////Comparing User input values
function compareAnswer(){

    validateForm();
    selected = [];
    choices = document.getElementsByName("choices");

        for(var i =0; i<choices.length; i++){
            if (choices[i].checked){
                choice.push(choices[i].value);
                selected.push(choices[i].value);
            }
        }
    phaseShifter();   
}

function validateForm(){
    var iterate = true;
    var x = document.getElementsByClassName('op');
    console.log("x is: "+ x[0]);
        for(var i = 0; i<x.length; i++){
            var element = x[i].value;
            //console.log("element is: "+ element);
            if (element == "") {
                iterate = false;
            }
        }
        if (iterate == false){
            alert("All fields must be filled out");
            pos--;
        }
        pos++;
        iterate = true;
}


function phaseShifter(){
    if (pos == 1){
        for(var i = 0; i<choice.length; i++){
            if (choice[i] == "Concrete"){
                tell = "Concrete";
                concrete();
            }
            if (choice[i] == "Soils and Compaction"){
                tell = "Soils and Compaction";
                soils();
            }
            if (choice[i] == "Asphalt"){
                tell = "Asphalt";
                asphalt();
            }
            //### Need to add more  statements to link to other inspection functions
        }
    }

    if (pos == 2){
        nonCompliance(); 
    }

    if (pos == 3){
        generateReport(); 
    }
}

//IMPORTANT REPORT FEATURES
/* 
- name of technician company
- location
- Type of test performed
- outcome of the test
- ASTM Method performed (can be done dynamically)
- nearest landmark 
- non compliances captured


*/

window.addEventListener("load", renderQuestion(), false);