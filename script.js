let questions = [
{q:"20% of 450 = ?", options:["45","60","75","90"], answer:"90"},
{q:"25 × 16 = ?", options:["300","350","375","400"], answer:"400"},
{q:"√144 = ?", options:["10","11","12","13"], answer:"12"},
{q:"If 5x = 45, x = ?", options:["5","6","7","9"], answer:"9"},
{q:"12² = ?", options:["124","144","164","134"], answer:"144"}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion(){
let q = questions[currentQuestion];
questionEl.innerText = q.q;

optionsEl.forEach((btn, index)=>{
    btn.innerText = q.options[index];
});

resultEl.innerText="";

}

function checkAnswer(button){
let selected = button.innerText;
let correct = questions[currentQuestion].answer;

if(selected === correct){
    resultEl.innerText="✅ Correct!";
    score++;
    scoreEl.innerText=score;
}else{
    resultEl.innerText="❌ Wrong! Correct: "+correct;
}

}

function nextQuestion(){
currentQuestion++;

if(currentQuestion >= questions.length){
    questionEl.innerText="Quiz Completed!";
    resultEl.innerText="Final Score: "+score;
    return;
}

loadQuestion();

}

loadQuestion();
