var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var PosQRandomArr=0;
var p;

var mins;
var questions = [
    [ "What is 10 + 4?", "12", "14", "16", "B" ],
	[ "What is 20 - 9?", "7", "13", "11", "C" ],
	[ "What is 7 x 3?", "21", "24", "25", "A" ],
    [ "What is 8 / 2?", "10", "2", "4", "C" ],
    ["what is 2 * 10","50", "20" ,"200","B"],
    ["what is 20 + 10","30", "20" ,"200","A"],
    ["what is 1 * 10","20", "11" ,"10","C"],
    ["what is 5 * 5","50", "25" ,"200","B"],
    ["what is 60 - 10","50", "20" ,"200","A"],
    ["what is 20 + 100","50", "120" ,"200","B"]
];
var answersChoosed=[];
for(var i=0;i<questions.length;i++){
    answersChoosed[i]="x";
}

var mark=[];
for(var i=0;i<questions.length;i++){
    mark[i]="x";
}
for (var arrShowed=[],i=0;i<questions.length;++i) arrShowed[i]=i;


function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

arrShowed = shuffle(arrShowed);
     console.log(arrShowed)


function _(x){
	return document.getElementById(x);
}


var marqInSow=[]
var markPos=[]

function markQ(){
    arrShowed[PosQRandomArr]
    pos;  
marqInSow.push(arrShowed[PosQRandomArr])

if(markPos.indexOf(pos)==-1)
{
    markPos.push(pos)
    _("markQuestions").innerHTML+='<input class="btn" type="button" onclick="showmark('+pos+','+arrShowed[PosQRandomArr]+')" value="question no '+(pos+1)+'">'
arrShowed[PosQRandomArr];
}


}
function prevQ(){
    PosQRandomArr--;
pos--;
show(); 
}

function nextQ(){
    PosQRandomArr++;
    pos++;
    show();
    
    }

function showmark(pos1,x){
    console.log(x)
 
	question = questions[x][0];//pos
	chA = questions[x][1];
	chB = questions[x][2];
	chC = questions[x][3];
    _('mark').innerHTML = "<h3>"+question+"</h3>";
    var z=answersChoosed[pos1]
    console.log(answersChoosed[pos1])
    console.log("pos1"+pos1)
    console.log("z"+z)
   
 
  _('mark').innerHTML +="<div class='divC'><input type='radio' name='choices2' value='A'> "+"<span >"+chA+"</span></div>";
  _('mark').innerHTML += "<div class='divC'><input type='radio' name='choices2' value='B'> "+"<span >"+chB+"</span></div>";
  _('mark').innerHTML += "<div class='divC'><input type='radio' name='choices2' value='C'> "+"<span >"+chC+"</span></div>";
    

        _('mark').innerHTML += "<button class='btn-S-Answer' onclick='checkAnswer2()'>Submit Answer</button>";
      
  
    if(z=='A'){
        document.getElementsByName('choices2')[0].checked=true;
        document.getElementsByName('choices2')[1].checked=false;
        document.getElementsByName('choices2')[2].checked=false;
     console.log("A choosed")
    }
     if(z=='B')
     {
        document.getElementsByName('choices2')[0].checked=false;
        document.getElementsByName('choices2')[1].checked=true;
        document.getElementsByName('choices2')[2].checked=false;
        console.log("B choosed")
   
    }
     
     if(z=='C'){
        document.getElementsByName('choices2')[0].checked=false;
        document.getElementsByName('choices2')[1].checked=false;
        document.getElementsByName('choices2')[2].checked=true;
        console.log("C choosed")
     
     }
    console.log(z)
	
}
function show(){
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[arrShowed[PosQRandomArr]][0];//pos
	chA = questions[arrShowed[PosQRandomArr]][1];
	chB = questions[arrShowed[PosQRandomArr]][2];
	chC = questions[arrShowed[PosQRandomArr]][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    var z=answersChoosed[pos]
    console.log(z)
   
  //  questions[]
	test.innerHTML +="<div class='divC'><input type='radio' name='choices' value='A'> "+"<span >"+chA+"</span></div>";
	test.innerHTML += "<div class='divC'><input type='radio' name='choices' value='B'> "+"<span >"+chB+"</span></div>";
    test.innerHTML += "<div class='divC'><input type='radio' name='choices' value='C'> "+"<span >"+chC+"</span></div>";
    if(PosQRandomArr==0){
        test.innerHTML += "<button style=' visibility: hidden;' class'btn-prev' onclick='prevQ()'>prev</button>";
        test.innerHTML += "<button class='btn-S-Answer' onclick='checkAnswer()'>Submit Answer</button>";
        test.innerHTML += "<button class='btn-next' onclick='nextQ()'>next</button>";
        test.innerHTML += "<button class='btn-Mark' onclick='markQ()'>mark</button>";
        test.innerHTML += "<button class='btn-All' onclick='submitall()'>Submit All</button>"; 
    }
    else if(PosQRandomArr==(questions.length-1)){
        test.innerHTML += "<button class'btn-prev' onclick='prevQ()'>prev</button>";
        test.innerHTML += "<button class='btn-S-Answer' onclick='checkAnswer()'>Submit Answer</button>";
        test.innerHTML += "<button class='btn-Mark' onclick='markQ()'>mark</button>";
        test.innerHTML += "<button class='btn-All'  onclick='submitall()'>Submit All</button>"; 
    }
    else{

        test.innerHTML += "<button class'btn-prev' onclick='prevQ()'>prev</button>";
        test.innerHTML += "<button class='btn-S-Answer' onclick='checkAnswer()'>Submit Answer</button>";
        
        test.innerHTML += "<button class='btn-next' onclick='nextQ()'>next</button>";
        test.innerHTML += "<button class='btn-Mark' onclick='markQ()'>mark</button>";
        test.innerHTML += "<button class='btn-All' onclick='submitall()'>Submit All</button>";   
    }
    if(z=='A'){
        document.getElementsByName('choices')[0].checked=true;
        document.getElementsByName('choices')[1].checked=false;
        document.getElementsByName('choices')[2].checked=false;
     console.log("A choosed")
    }
     if(z=='B')
     {
        document.getElementsByName('choices')[0].checked=false;
        document.getElementsByName('choices')[1].checked=true;
        document.getElementsByName('choices')[2].checked=false;
        console.log("B choosed")
    }
     
     if(z=='C'){
        document.getElementsByName('choices')[0].checked=false;
        document.getElementsByName('choices')[1].checked=false;
        document.getElementsByName('choices')[2].checked=true;
        console.log("C choosed")
     }
    console.log(z)
	
}


function submitall(){

       
        document.getElementById("mark").style.display='none';
        document.getElementById("markQuestions").style.display='none';
    
       
        onTimesUp();
        PosQRandomArr=0;
        	for(var i=0; i<answersChoosed.length; i++){
    		if( answersChoosed[i]==questions[arrShowed[i]][4]){
    			correct++;
    		}
        }
        test = _("test");
        _("test_status").style.display='none'
        test.style.display='none'
        _("app").style.display='none';

        if(mins==-1){
            _('d2').innerHTML = "<img src='images/time2.gif'  height='100px'><br><br><h2>congratulation "+getCookie("fname")+" "+getCookie("lname")+"You got "+correct+" of "+questions.length+" questions correct</h2>";
    
            console.log("mins -1")
        }else
        {
            _("d4").innerHTML = "<img src='images/b.gif' height='100px'><br><br><h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    		_("d3").innerHTML = "<h1>Test Completed</h1>"+"<h2>"+getCookie("fname")+" "+getCookie("lname")+"</h2>";
            console.log("mins "+mins)
        }

        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    		_("test_status").innerHTML = "Test Completed";
    		pos = 0;
    		correct = 0;
    		return false;
    }
function renderQuestion(){
     test = _("test");
    
    show();
    
}

/////////ckeck the answer////////
function checkAnswer(){
choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
            answersChoosed[PosQRandomArr]=choices[i].value;
            console.log( answersChoosed[PosQRandomArr])
			
		}
    }
    if(pos<(questions.length-1)){
	if(choice == questions[arrShowed[PosQRandomArr]][4]){
		correct++;
    }
    PosQRandomArr++;
    pos++;
    
       show(); 
    }
    
	
}
function checkAnswer2(){
    choices = document.getElementsByName("choices2");
        for(var i=0; i<choices.length; i++){
            if(choices[i].checked){
                answersChoosed[PosQRandomArr]=choices[i].value;
                console.log( answersChoosed[PosQRandomArr])
                
            }
        }
        
        if(choice == questions[arrShowed[PosQRandomArr]][4]){
            correct++;
        }
        
    }

///////////////////////Timer//////////////////////

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT =60*3;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
        mins=-1;
        submitall();
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}


// window.addEventListener("load",function () {
//     window.location = "https://www.w3schools.com";
// },false);
// // window.onload = function () {
//   window.location = "https://www.w3schools.com";
// }
//window.location.reload("../login.html");

window.addEventListener("load", renderQuestion, false);