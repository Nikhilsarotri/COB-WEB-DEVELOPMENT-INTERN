const quiz= [
    {
        question: "Q1. A language is regular if and only if",
        a: "accepted by DFA",
        b: "accepted by PDA ",
        c: "accepted by LBA",
        d: "accepted by Turing machine",
        ans: "ans1"
        
    },
    {
        question: "Q2. What is a regular expression",
        a: "A regular expression is a string that describes the whole set of string acc to some rules",
        b: " A redular expression is way of defining regular languages",
        c: "Both of above ",
        d: "None of the above",
        ans: "ans3"
        
    },
    {
        question: "Q3. ........denotes all strings of 0,s and 1,s",
        a: "0 1",
        b: "(0+1)*",
        c: "(0+1)",
        d: "0+1",
        ans: "ans2"
        
    },
    {
        question: "Q4. Let r is a regular expression,(ε+r)*=.......",
        a: "r*",
        b: "ε r",
        c: "ε",
        d: "r",
        ans: "ans1"
        
    }
]
const question = document.querySelector(".question")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const submit = document.querySelector("#submit")
const answers= document.querySelectorAll(".answer")
const showscore=document.querySelector("#showscore")

let questionCount=0;
let score =0;
const loadquestion=()=>{
    const questionList= quiz[questionCount];
    question.innerText= (questionList.question)
    option1.innerText= questionList.a
    option2.innerText= questionList.b
    option3.innerText= questionList.c
    option4.innerText= questionList.d

}
loadquestion();
function getCheckanswer() {
    let answer;
    answers.forEach((curransele)=>{
        if (curransele.checked){
            answer= curransele.id;
        }

    });
    return answer
    };

    const deselect=()=>{
        answers.forEach((curransele)=> curransele.checked=false);

        
    }
submit.addEventListener("click",()=>{
    const checkedanswer= getCheckanswer();
    console.log(checkedanswer);

    if(checkedanswer==quiz[questionCount].ans){
        score++;
    };

    questionCount++;

    deselect();
    if(questionCount<quiz.length){
        loadquestion() ;
    }else{
        showscore.innerHTML= `
         <h3>you scored ${score}/${quiz.length} </h3>
         <button class="btn" onclick="location.reload()">Retry</button>
        `;
        showscore.classList.remove("areascore");
}

});
