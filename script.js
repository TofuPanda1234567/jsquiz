let qNumber = document.querySelector('.questionNumber');
let btn = document.querySelector('.answer');
let num = 1;
qNumber.innerHTML = 'Question ' + num;

btn.addEventListener('click', (e) => {
    num++;
    qNumber.innerHTML = 'Question ' + num;
});