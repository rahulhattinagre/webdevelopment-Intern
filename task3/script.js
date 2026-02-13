// QUIZ DATA
let questions=[
 {q:"JavaScript is a programming language",a:true},
 {q:"HTML is a database",a:false}
];

let index=0;
let score=0;

// LOAD QUESTION
function loadQuestion(){
 document.getElementById("question").innerText=
 questions[index].q;
}

// RUN FIRST TIME
loadQuestion();

// ANSWER FUNCTION
function answer(ans){
 if(ans===questions[index].a){
  score++;
 }
 index++;

 if(index<questions.length){
  loadQuestion();
 }else{
  document.getElementById("score").innerText=
  "Score: "+score;
 }
}
let images=["1.jpg","2.jpg","3.jpg"];
let imgIndex=0;

function autoSlide(){
 imgIndex++;
 if(imgIndex>=images.length){
  imgIndex=0;
 }
 document.getElementById("carousel").src=images[imgIndex];
}

setInterval(autoSlide,3000);
