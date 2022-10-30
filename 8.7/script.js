let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (minValue < -999){minValue = -999;}
if (minValue > 999){minValue = 999;}
if (maxValue < -999){maxValue = -999;}
if (maxValue > 999){maxValue = 999;};   
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let MathRound = Math.round(Math.random() * 3);

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    if (minValue < -999){minValue = -999;}
    if (minValue > 999){minValue = 999;}
    if (maxValue < -999){maxValue = -999;}
    if (maxValue > 999){maxValue = 999;};
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;

    MathRound = Math.round(Math.random() * 3);
    if (MathRound === 1) {
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
    }
    if (MathRound === 2) {
        answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
    }
    if (MathRound === 3) {
        answerField.innerText = `Наверное, это число ${answerNumber }?`;
    }

    
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    MathRound = Math.round(Math.random() * 3);
    if (MathRound === 1) {
        answerField.innerText = `Я всегда угадываю!!`;
        gameRun = false;
    }
    if (MathRound === 2) {
        answerField.innerText = `Легко!`;
        gameRun = false;
    }
    if (MathRound === 3) {
        answerField.innerText = `Угадал не думая`;
        gameRun = false;
    }
})



