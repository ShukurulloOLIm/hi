let score = 0;
const title = document.getElementById('title');

let screenWidth = parseInt(window.innerWidth);
let screenHeight = parseInt(window.innerHeight);
console.log(`The screen Height is currently: \n${screenHeight} px`);
console.log(`The screen Width is currently: \n${screenWidth} px`)
// if (screenWidth <= 1284) {
//     const h1 = document.getElementById('centered');
    
// } else if (screenWidth <= 750) {
//     const h1 = document.getElementById('centered');
//     h1.remove();
//     h1 = document.createElement('h3');
//     h1.setAttribute('id', 'centered');
//     h1.innerHTML = 'Mental Math Game!';
//     document.body.append(h1);
// };

let lang = localStorage.getItem('whichLang');
let langSystem = 0;
if (lang == undefined || lang == null) {
    lang = 'English';
};
const switchLang = () => {
    if (lang === 'English') {
        lang = 'jp';
        localStorage.setItem('whichLang', lang);
        updateElements();
    } else if (lang === 'jp') {
        lang = 'English';
        localStorage.setItem('whichLang', lang);
        updateElements();
    };
};
const updateElements = () => {
    if (langSystem === 0) {
        const newH1 = document.getElementById('centered');
        const newButton = document.getElementById('Basic');
        if (lang === 'English') {
            newH1.innerHTML = 'Mental Math Game!';
            newButton.innerHTML = 'Click here to play';
            newButton.style.width = '150px';
            newH1.style.fontSize = '2em';
        } else if (lang === 'jp') {
            newH1.innerHTML = '暗算ゲーム';
            newButton.innerHTML = 'このボタンを押したらできます';
            newButton.style.width = '260px';
            newH1.style.fontSize = '1.8em';
        };
    } else if (langSystem === 1) {
        const newH1 = document.getElementById('centered');
        if (lang === 'English') {
            newH1.innerHTML = 'Solve the following equation.';
            newH1.style.fontSize = '2em';
        } else if (lang === 'jp') {
            newH1.innerHTML = '画面に映されている問題を解きなさい。';
            newH1.style.fontSize = '1.8em';
        };
    } else if (langSystem === 2) {
        const newH1 = document.getElementById('centered');
        const newCalButton = document.getElementById('Cal');
        if (lang === 'English') {
            newH1.innerHTML = 'You got it correct!';
            newCalButton.innerHTML = 'Next Problem';
            newH1.style.fontSize = '2em';
        } else if (lang === 'jp') {
            newH1.innerHTML = '正解です!';
            newCalButton.innerHTML = '次の問題';
            newH1.style.fontSize = '1.8em';
        };
    } else if (langSystem === 3) {
        const newH1 = document.getElementById('centered');
        const newTrigButton = document.getElementById('Trig');
        const scoreText = document.querySelector('.box5');
        if (lang === 'English') {
            newH1.innerHTML = 'Game Over!';
            newTrigButton.innerHTML = 'Start Over!';
            scoreText.innerHTML = `<h3 id="centered">Your score was ${score}</h3>`;
            newH1.style.fontSize = '2em';
        } else if (lang === 'jp') {
            newH1.innerHTML = 'ゲームオーバー!';
            newTrigButton.innerHTML = 'もう一回やる';
            scoreText.innerHTML = `<h3 id="centered">あなたの点数は、${score}です。</h3>`;
            newH1.style.fontSize = '1.8em';
        };
    } else {
        console.log(`There is a error currently \n lang = ${lang} \n Please wait for the error to be fixed \n Error code: ${Math.floor(Math.random * 8964) + 8351}x02`);
    }
};
document.getElementById('switchLang').addEventListener("click", switchLang);
updateElements();

let scoreSystem = localStorage.getItem('scoreSystemData');
scoreSystem = [parseInt(scoreSystem)];
scoreSystem.slice(1);
if (scoreSystem === undefined || scoreSystem === null) {
    scoreSystem = [];
};
removeCatche = () => {
    localStorage.removeItem('scoreSystemData');
}

let darkOrLightMode = localStorage.getItem('whichMode');
let time = new Date();
time = time.getHours();
if (darkOrLightMode != 'darkMode') {
    if (time >= 8) {
        darkOrLightMode = 'lightMode'
    } else if (time <= 18) {
        darkOrLightMode = 'darkMode';
    };
};
if (darkOrLightMode == undefined && darkOrLightMode == null) {
    darkOrLightMode = 'lightMode';
};
if (darkOrLightMode == 'darkMode') {
    localStorage.setItem('whichMode', darkOrLightMode);
    document.body.style.backgroundColor = '#1e1e1e';
    document.body.style.color = 'white';
} else if (darkOrLightMode == 'lightMode') {
    localStorage.setItem('whichMode', darkOrLightMode);
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';   
};

const Start = (playAmount) => {
    let Question =  Math.floor(Math.random() * 1) + 1;
    let h1 = document.getElementById('centered');
    langSystem = 1;
    score = 0;
    if (playAmount == 1) {
        const Basic = document.getElementById("Basic");
        Basic.remove();
    } else if (playAmount == 2) {
        const Trig = document.getElementById('Trig');
        const element = document.querySelector('.box5');
        element.remove();
        Trig.remove();
    };
    if (lang == 'English') {
        h1.innerText = 'Solve the following equation.';
    } else if (lang == 'jp') {
        h1.innerText = '画面に映されている問題を解きなさい。';
    } else {
        console.log(`There is a error currently \n lang = ${lang} \n Please wait for the error to be fixed \n Error code: ${Math.floor(Math.random * 8964) + 8351}x01`);
    };
    if (Question == 1){
            let Randomness = Math.floor(Math.random() * 4) + 1;
            let possiblities = Math.floor(Math.random() *6) + 1;
            //  Generates line 32 to line 41
            let Amount = Math.floor(Math.random() * 300) + 1;
            let Amount2 = Math.floor(Math.random() * 100) + 1; 
            //  Generates the numbers
            let Problem = document.createElement('div');
            Problem.setAttribute('class', 'box2');
            console.log(Randomness);
            if (Randomness == 1) {
                Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount2} + ${Amount}</h3>`;
                let box2 = document.createElement('div');
                box2.setAttribute('class', 'box3');
                let Answer = Amount + Amount2;
                let FakeAnswer = Amount2 + Amount + Math.floor(Math.random() * 15) + 3;
                let FakeAnswer2 = Amount2 + Amount - Math.floor(Math.random() * 15) + 3;
                FakeAnswer2 - Math.floor(Math.random * 9) + 2;
                if (FakeAnswer2 == Answer) {
                    FakeAnswer - 3
                    document.body.append(Problem);
                    if (possiblities ==  1) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if  (possiblities == 2) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 3) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 4) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 5) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 6) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else {
                        return false;
                    };  
                } else {
                    document.body.append(Problem);
                    if (possiblities ==  1) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if  (possiblities == 2) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 3) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 4) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 5) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 6) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else {
                        return false;
                    };  
                }  
            } else if (Randomness = 2) {
                Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} + ${Amount2}</h3>`;
                let box2 = document.createElement('div');
                box2.setAttribute('class', 'box3');
                let Answer = Amount2 + Amount;
                let FakeAnswer = Amount2 + Amount + Math.floor(Math.random() * 15) + 3;
                let FakeAnswer2 = Amount2 + Amount - Math.floor(Math.random() * 15) + 3;
                FakeAnswer2 - Math.floor(Math.random * 9) + 2;
                if (FakeAnswer2 == Answer) {
                    FakeAnswer - 3
                    document.body.append(Problem);
                    if (possiblities ==  1) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if  (possiblities == 2) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 3) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 4) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 5) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 6) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else {
                        return false;
                    };  
                } else {
                    document.body.append(Problem);
                    if (possiblities ==  1) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if  (possiblities == 2) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 3) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 4) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 5) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 6) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else {
                        return false;
                    };  
                }
            } else if (Randomness = 3) {
                Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} - ${Amount2}</h3>`;
                let box2 = document.createElement('div');
                box2.setAttribute('class', 'box3');
                let Answer = Amount - Amount2;
                let FakeAnswer = Amount - Amount2 + Math.floor(Math.random() * 15) + 3;
                let FakeAnswer2 = Amount - Amount2 - Math.floor(Math.random() * 15) + 3;
                if (FakeAnswer2 == Answer) {
                    FakeAnswer - 3
                    document.body.append(Problem);
                    if (possiblities ==  1) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if  (possiblities == 2) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 3) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 4) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 5) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 6) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else {
                        return false;
                    };  
                } else {
                    document.body.append(Problem);
                    if (possiblities ==  1) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if  (possiblities == 2) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 3) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 4) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 5) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 6) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else {
                        return false;
                    };  
                }
            } else if (Randomness = 4) {
                Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount2} - ${Amount}</h3>`;
                let box2 = document.createElement('div');
                box2.setAttribute('class', 'box3');
                let Answer = Amount2 - Amount;
                let FakeAnswer = Amount2 - Amount + Math.floor(Math.random() * 15) + 3;
                let FakeAnswer2 = Amount2 - Amount - Math.floor(Math.random() * 15) + 3;
                if (FakeAnswer2 == Answer) {
                    FakeAnswer - 3
                    document.body.append(Problem);
                    if (possiblities ==  1) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if  (possiblities == 2) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 3) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 4) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 5) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 6) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else {
                        return false;
                    };  
                } else {
                    document.body.append(Problem);
                    if (possiblities ==  1) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if  (possiblities == 2) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 3) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 4) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 5) {
                        box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                        document.body.append(box2);
                    } else if (possiblities == 6) {
                        box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                        document.body.append(box2);
                    } else {
                        return false;
                    };  
                }
        }
    } else if (Question == 2) {
        let Randomness = Math.floor(Math.random() * 5) + 1;
        let possiblities = Math.floor(Math.random() *6) + 1;
        //  Generates line 32 to line 41
        let Amount = Math.floor(Math.random() * 300) + 1;
        let Amount2 = Math.floor(Math.random() * 100) + 1; 
        //  Generates the numbers
        let Problem = document.createElement('div');
        Problem.setAttribute('class', 'box2');
        if (Randomness == 1) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount2} &times; ${Amount}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount * Amount2;
            let FakeAnswer = Amount2 * Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 * Amount - Math.floor(Math.random() * 15) + 3;
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness == 2) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} &times; ${Amount2}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount * Amount2;
            let FakeAnswer = Amount2 * Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 * Amount - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness == 3) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} &times; ${Amount}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount * Amount;
            let FakeAnswer = Amount * Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount * Amount - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness == 4) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount2} &times; ${Amount2}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount2 * Amount2;
            let FakeAnswer = Amount2 * Amount2 + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 * Amount2 - Math.floor(Math.random() * 15) + 3;
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness == 5) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} &divide; ${Amount2}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount / Amount2;
            let FakeAnswer = Amount2 / Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 / Amount - Math.floor(Math.random() * 15) + 3;
            Answer.toFixed(2);
            FakeAnswer.toFixed(2);
            FakeAnswer2.toFixed(2);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        }    
    }
};


const Start2 = () => {
    Times = 0;
    langSystem = 1;
    scoreSystem.slice(1);
    Question =  Math.floor(Math.random() * 2) + 1;
    let NextButton = document.getElementById('Cal');
    let box2 = document.querySelector('.box2');
    let h3 = document.querySelector('.deleteThisLater');
    let h1 = document.querySelector('#centered'); 
    let button = document.querySelectorAll('.basicActive');
    button.forEach(function (buttons) {
        buttons.remove();
    });
    if (lang == 'English') {
        h1.innerText = 'Solve the following equation.';
    } else if (lang == 'jp') {
        h1.innerText = '画面に映されている問題を解きなさい。';
    } else {
        return false;
    };
    h3.remove();
    NextButton.remove();
    box2.remove();
    if (Question == 1) {
        let Randomness = Math.floor(Math.random() * 4) + 1;
        let possiblities = Math.floor(Math.random() *6) + 1;
        let Amount = Math.floor(Math.random() * 300) + 1;
        let Amount2 = Math.floor(Math.random() * 100) + 1;  
        //  Generates the numbers
        let Problem = document.createElement('div');
        Problem.setAttribute('class', 'box2');
        if (Randomness == 1) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount2} + ${Amount}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount + Amount2;
            let FakeAnswer = Amount2 + Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 + Amount - Math.floor(Math.random() * 15) + 3;
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }  
        } else if (Randomness = 2) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} + ${Amount2}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount2 + Amount;
            let FakeAnswer = Amount2 + Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 + Amount - Math.floor(Math.random() * 15) + 3;
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness = 3) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} - ${Amount2}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount - Amount2;
            let FakeAnswer = Amount - Amount2 + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount - Amount2 - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness = 4) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount2} - ${Amount}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount2 - Amount;
            let FakeAnswer = Amount2 - Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 - Amount - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        };
    } else if (Question == 2) {
        let Randomness = Math.floor(Math.random() * 5) + 1;
        let possiblities = Math.floor(Math.random() * 6) + 1;
        //  Generates line 32 to line 41
        let Amount = Math.floor(Math.random() * 300) + 1;
        let Amount2 = Math.floor(Math.random() * 100) + 1; 
        //  Generates the numbers
        let Problem = document.createElement('div');
        Problem.setAttribute('class', 'box2');
        if (Randomness == 1) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount2} &times; ${Amount}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount * Amount2;
            let FakeAnswer = Amount2 * Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 * Amount - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness == 2) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} &times; ${Amount2}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount * Amount2;
            let FakeAnswer = Amount2 * Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 * Amount - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness == 3) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} &times; ${Amount}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount * Amount;
            let FakeAnswer = Amount * Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount * Amount - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness == 4) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount2} &times; ${Amount2}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount2 * Amount2;
            let FakeAnswer = Amount2 * Amount2 + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 * Amount2 - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        } else if (Randomness == 5) {
            Problem.innerHTML = `<h3 id='Math-mode' class='deleteThisLater'>${Amount} &divide; ${Amount2}</h3>`;
            let box2 = document.createElement('div');
            box2.setAttribute('class', 'box3');
            let Answer = Amount / Amount2;
            let FakeAnswer = Amount2 / Amount + Math.floor(Math.random() * 15) + 3;
            let FakeAnswer2 = Amount2 / Amount - Math.floor(Math.random() * 15) + 3;
            document.body.append(Problem);
            if (FakeAnswer2 == Answer) {
                FakeAnswer - 3
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            } else {
                document.body.append(Problem);
                if (possiblities ==  1) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if  (possiblities == 2) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 3) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button>`
                    document.body.append(box2);
                } else if (possiblities == 4) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 5) {
                    box2.innerHTML = `<button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button>`
                    document.body.append(box2);
                } else if (possiblities == 6) {
                    box2.innerHTML = `<button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer}</button><button id='Math-mode' class='Basic' onclick="checkAnswers('Incorrect', 'Easy');">${FakeAnswer2}</button><button id='Math-mode' class='BasicCorrect' onclick="checkAnswers('Correct', 'Easy');">${Answer}</button>`
                    document.body.append(box2);
                } else {
                    return false;
                };  
            }
        };
    }
}

const checkAnswers = (ifcorrect, Type) => {
        if (ifcorrect == 'Correct') {
            ++score;
            langSystem = 2;
            document.querySelectorAll('.BasicCorrect').forEach(function (all) {
                all.style.cursor = "not-allowed";
            })
            document.querySelectorAll('.Basic').forEach(function(all) {
                all.style.cursor = "not-allowed";
                all.style.opacity = "0.6";
            });
            document.querySelectorAll('.Basic').forEach(function(all) {
                all.classList.remove("Basic");
                all.classList.add("basicActive");
            });
            document.querySelectorAll('.BasicCorrect').forEach(function (element2) {
                element2.classList.remove('BasicCorrect');
                element2.classList.add("basicActive")
            });
            let element = document.createElement('div');
            element.setAttribute('class', 'box4');
            if (lang == 'English') {
                element.innerHTML = `<button onclick="Start2('${Type}')" id='Cal'>Next Problem</button>`
            } else if (lang == 'jp') {
                element.innerHTML = `<button onclick="Start2('${Type}')" id='Cal'>次の問題</button>`
            } else {
                return false;
            };
            document.body.append(element);
        } else if (ifcorrect != 'Correct') {
            langSystem = 3;
            document.querySelectorAll('.Basic').forEach(function(all) {
                all.classList.remove("Basic");
                all.classList.add("basicActive");
            });
            document.querySelectorAll('.BasicCorrect').forEach(function (element2) {
                element2.classList.remove('BasicCorrect');
                element2.classList.add("basicActive")
            });
            document.querySelectorAll('.Basic').forEach(function(all) {
                all.classList.remove("Basic");
                all.classList.add("basicActive");
            });
            document.querySelectorAll('.BasicCorrect').forEach(function (element2) {
                element2.classList.remove('BasicCorrect');
                element2.classList.add("basicActive")
            });
            let box2 = document.querySelector('.box2');
            let h3 = document.querySelector('.deleteThisLater');
            let h1 = document.querySelector('#centered'); 
            let button = document.querySelectorAll('.basicActive');
            button.forEach(function (buttons) {
                buttons.remove();
            });
            h3.remove();
            box2.remove();
            const scoreText = document.createElement('div');
            const playAgain = document.createElement('div');
            playAgain.setAttribute('class', 'box2');
            scoreText.setAttribute('class', 'box5');
            if (lang == 'English') {
                h1.innerHTML = 'Game Over!';
                playAgain.innerHTML = '<button id="Trig" onclick="Start(2);">Start Over!</button>';
                scoreText.innerHTML = `<h3 id="centered">Your score was ${score}</h3>`;
            } else if (lang == 'jp') {
                h1.innerHTML = 'ゲームオーバー!';
                playAgain.innerHTML = '<button id="Trig" onclick="Start(2);">もう一回やる</button>';
                scoreText.innerHTML = `<h3 id="centered">あなたの点数は、${score}です。</h3>`;
            } else {
                return false;
            };
            scoreSystem.push(score);
            scoreSystem.slice(1);
            localStorage.setItem('scoreSystemData', JSON.stringify(scoreSystem));
            console.log(scoreSystem);  
            document.body.append(scoreText);
            document.body.append(playAgain); 
    };
};

