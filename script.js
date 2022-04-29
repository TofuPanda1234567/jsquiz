let qNumber = document.querySelector('.questionNumber');
let ans1 = document.querySelector('.answer1');
let ans2 = document.querySelector('.answer2');
let ans3 = document.querySelector('.answer3');
let num = 1;
qNumber.innerHTML = 'Question ' + num;

ans1.addEventListener('click', (e) => {
    num++;
    qNumber.innerHTML = 'Question ' + num;
});
ans2.addEventListener('click', (e) => {
    num++;
    qNumber.innerHTML = 'Question ' + num;
});
ans3.addEventListener('click', (e) => {
    num++;
    qNumber.innerHTML = 'Question ' + num;
});