// VARIABLES
let qNumber = document.querySelector('.questionNumber');
let ans1 = document.querySelector('.answer1');
let ans2 = document.querySelector('.answer2');
let ans3 = document.querySelector('.answer3');
let scoreCount = document.querySelector('.score');
let num = 1;
let score = 0;
let question = document.querySelector('.question');

// LOAD HTML VALUES
question.innerHTML = 'What is the most populated city in the world?';
qNumber.innerHTML = 'Question ' + num;
ans1.innerHTML = 'Tokyo';
ans2.innerHTML = 'New York City';
ans3.innerHTML = 'Manila';
scoreCount.innerHTML = 'Score: ' + score;

// ANSWER ONE
ans1.addEventListener('click', (e) => {
    num++;
    qNumber.innerHTML = 'Question ' + num;

    if(num == 1){
        score = score++
        score.innerHTML = 'Score: ' + score;
    };
});

// ANSWER TWO
ans2.addEventListener('click', (e) => {
    num++;
    qNumber.innerHTML = 'Question ' + num;

    if(num == 1){
        score = score;
        score.innerHTML = 'Score: ' + score;
    };
});

// ANSWER THREE
ans3.addEventListener('click', (e) => {
    num++;
    qNumber.innerHTML = 'Question ' + num;

    if(num == 1){
        score = score
        score.innerHTML = 'Score: ' + score;
    };
});