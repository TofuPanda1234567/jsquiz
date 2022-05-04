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
    if (num == 1 || num == 5) {
        score++;
    }
    else {
        score = score;
    }
    scoreCount.innerHTML = 'Score: ' + score;

    num = 2;
    qNumber.innerHTML = 'Question ' + num;

    question.innerHTML = 'How many hearts does an octopus have?';
    qNumber.innerHTML = 'Question ' + num;
    ans1.innerHTML = '1';
    ans2.innerHTML = '3';
    ans3.innerHTML = '7';
    scoreCount.innerHTML = 'Score: ' + score;

    num = 3;
    // QUESTION THREE OF ANSWER ONE

    ans1.addEventListener('click', (e) => {

        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });
    });


    ans2.addEventListener('click', (e) => {
        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });
    });

    ans3.addEventListener('click', (e) => {
        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });
    });
});









// ANSWER TWO
ans2.addEventListener('click', (e) => {
    if (num == 2 || num == 3) {
        score++;
    }
    else {
        score = score;
    }
    scoreCount.innerHTML = 'Score: ' + score;

    num = 2;
    qNumber.innerHTML = 'Question ' + num;

    question.innerHTML = 'How many hearts does an octopus have?';
    qNumber.innerHTML = 'Question ' + num;
    ans1.innerHTML = '1';
    ans2.innerHTML = '3';
    ans3.innerHTML = '7';
    scoreCount.innerHTML = 'Score: ' + score;

    num = 3;
    // QUESTION THREE OF ANSWER TWO
    ans1.addEventListener('click', (e) => {

        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });
    });


    ans2.addEventListener('click', (e) => {

        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });
    });

    ans3.addEventListener('click', (e) => {
        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;


            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });
    });
});



// ANSWER THREE
ans3.addEventListener('click', (e) => {
    if (num == 4) {
        score++;
    }
    else {
        score = score;
    }
    scoreCount.innerHTML = 'Score: ' + score;

    num = 2;
    qNumber.innerHTML = 'Question ' + num;

    question.innerHTML = 'How many hearts does an octopus have?';
    qNumber.innerHTML = 'Question ' + num;
    ans1.innerHTML = '1';
    ans2.innerHTML = '3';
    ans3.innerHTML = '7';
    scoreCount.innerHTML = 'Score: ' + score;

    num = 3;
    // QUESTION THREE OF ANSWER THREE
    ans1.addEventListener('click', (e) => {

        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });
    });


    ans2.addEventListener('click', (e) => {

        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });


        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;
        });

        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

    });

    ans3.addEventListener('click', (e) => {
        question.innerHTML = 'Pt is the chemical symbol of which element?';
        qNumber.innerHTML = 'Question ' + num;
        ans1.innerHTML = 'Hydrogen';
        ans2.innerHTML = 'Mercury';
        ans3.innerHTML = 'Platinum';
        scoreCount.innerHTML = 'Score: ' + score;

        num = 4;
        // QUESTION FOUR
        ans1.addEventListener('click', (e) => {

            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans2.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });

        num = 4;
        ans3.addEventListener('click', (e) => {
            question.innerHTML = 'What is the capital city of Spain?';
            qNumber.innerHTML = 'Question ' + num;
            ans1.innerHTML = 'Madrid';
            ans2.innerHTML = 'Shanghai';
            ans3.innerHTML = 'Ulaanbaatar';
            scoreCount.innerHTML = 'Score: ' + score;

            num = 5;
            //QUESTION FIVE
            ans1.addEventListener('click', (e) => {

                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });


            ans2.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });

            ans3.addEventListener('click', (e) => {
                question.innerHTML = 'About how many taste buds does the average human tongue have?';
                qNumber.innerHTML = 'Question ' + num;
                ans1.innerHTML = '10,000';
                ans2.innerHTML = '5,000';
                ans3.innerHTML = '100,000';
                scoreCount.innerHTML = 'Score: ' + score;
                num = 6;
            });
        });
    });
});


question.innerHTML = 'Congratulations! Your score was ' + score;
document.querySelector('.questionNumber').style.display = 'none';
document.querySelector('.answer1').style.display = 'none';
document.querySelector('.answer2').style.display = 'none';
document.querySelector('.answer3').style.display = 'none';
