var number = 1;
var userAnswer = [];
var checkMarvel = false;
var marvelAnswer = ["B", "A", "C", "C", "B", "C", "B", "B", "A", "C"];
var checkDC = false;
var dcAnswer = ["C", "A", "B", "C", "A", "A", "B", "C", "A", "C"];
document.getElementById("bar").style.width = number * 9.1 + "%";


function MarvelTime(){
	checkMarvel = true;
}
function checkAnswers(){
	//check answer
	var numCorrect = 0;
	if(checkMarvel == true){
		for(var i = 0; i < marvelAnswer.length; i++){
			if(userAnswer[i] == marvelAnswer[i]){
				numCorrect++;
			}
		}
	}
	document.getElementById("results").innerHTML = "You got " + numCorrect + " out of 10!"
}

function DCTime(){
	checkDC = true;
}
function checkAnswers(){
	//check answer
	var numCorrect = 0;
	if(checkDC == true){
		for(var i = 0; i < dcAnswer.length; i++){
			if(userAnswer[i] == dcAnswer[i]){
				numCorrect++;
			}
		}
	}
	document.getElementById("results").innerHTML = "You got " + numCorrect + " out of 10!"
}

function barPercent(){
	//change the progress bar's value
	document.getElementById("bar").style.width = number * 9.1 + "%";
}
function store(x){
	//stores the user inputs into an array for checking later
	var addtoArray = userAnswer.push();
	userAnswer[number - 1] = x;
	document.getElementById("test").innerHTML = userAnswer;
}

function numberForward()
  {
	//hides and shows the questions using id
	document.getElementById(number).style.display = "none";
	number += 1;
	if(number <= 11){	
		document.getElementById(number).style.display = "block";
	}
	//check your answers
	if(number == 11){
		checkAnswers();
	}
	barPercent();
  }
function resetVariables(){
	number = 1;
	userAnswer = [];
}