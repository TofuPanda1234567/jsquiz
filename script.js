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
    score++;
    scoreCount.innerHTML = 'Score: ' + score;

    num = 2;
    qNumber.innerHTML = 'Question ' + num;

    question.innerHTML = 'How many hearts does an octopus have?';
    qNumber.innerHTML = 'Question ' + num;
    ans1.innerHTML = '1';
    ans2.innerHTML = '3';
    ans3.innerHTML = '7';
    scoreCount.innerHTML = 'Score: ' + score;

    ans1.addEventListener('click', (e) => {
        score = score;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 3;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'Question 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });

    ans2.addEventListener('click', (e) => {
        score++;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 2;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'QUestion 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });

    ans3.addEventListener('click', (e) => {
        score = score;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 2;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'Question 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });
});




// ANSWER TWO
ans2.addEventListener('click', (e) => {
    score = score;
    scoreCount.innerHTML = 'Score: ' + score;

    num = 2;
    qNumber.innerHTML = 'Question ' + num;

    question.innerHTML = 'How many hearts does an octopus have?';
    qNumber.innerHTML = 'Question ' + num;
    ans1.innerHTML = '1';
    ans2.innerHTML = '3';
    ans3.innerHTML = '7';
    scoreCount.innerHTML = 'Score: ' + score;

    ans1.addEventListener('click', (e) => {
        score = score;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 2;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'Question 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });


    ans2.addEventListener('click', (e) => {
        score++;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 2;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'Question 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });


    ans3.addEventListener('click', (e) => {
        score = score;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 2;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'Question 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });
});



// ANSWER THREE
ans3.addEventListener('click', (e) => {
    score = score
    scoreCount.innerHTML = 'Score: ' + score;

    num = 2;
    qNumber.innerHTML = 'Question ' + num;

    question.innerHTML = 'How many hearts does an octopus have?';
    qNumber.innerHTML = 'Question ' + num;
    ans1.innerHTML = '1';
    ans2.innerHTML = '3';
    ans3.innerHTML = '7';
    scoreCount.innerHTML = 'Score: ' + score;

    ans1.addEventListener('click', (e) => {
        score = score;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 2;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'Question 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });


    ans2.addEventListener('click', (e) => {
        score++;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 2;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'Question 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });

    ans3.addEventListener('click', (e) => {
        score = score;
        scoreCount.innerHTML = 'Score: ' + score;
    
        num = 2;
        qNumber.innerHTML = 'Question ' + num;
    
        question.innerHTML = 'Question 3?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = '1';
        ans2.innerHTML = '3';
        ans3.innerHTML = '7';
        scoreCount.innerHTML = 'Score: ' + score;
    });
});