const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");

form.addEventListener("submit", handleForm);

function handleForm(event) {
    event.preventDefault();
    validQuizz();
}

const input = document.querySelectorAll("input");
const displayQuizz = document.querySelectorAll(".input-group");
const result = document.querySelector(".result");

function validQuizz() {
    var count = 0;
    let tab = [];

    while (count < input.length) {
        if (input[count].checked) {
            tab.push(input[count].className);
        }
        count++;
    }
    isValid(tab);
}

function isValid(tab) {
    var i = 0;
    var nbChecked = 0;

    while (i < responses.length) {
        if (tab[i] === responses[i]) {
            nbChecked++;
            displayQuizz[i].style.background = 'linear-gradient(to right, #a8ff78, #78ffd6)';
        }
        else {
            displayQuizz[i].style.background = 'linear-gradient(to right, #f5567b, #fd674c)';
        }
        i++;
    }
    displayResult(nbChecked);
}

function displayResult(count) {
    let text = `${count}/5`;

    switch (count) {
        case 1 : 
        result.textContent = `Vous n'avez qu'un score de ${text} ${emojis[4]} ! Recommencez !`
        break;
        case 2 : 
        result.textContent = `Pas mal mais vous n'avez que ${text} ${emojis[3]} ! Mieux vaut recommencez !`
        break;
        case 3 : 
        result.textContent = `Bonne lancée ! Vous êtes à ${text} ${emojis[2]} !`
        break;
        case 4 : 
        result.textContent = `Super, il vous en manque qu'un ! ${text} ${emojis[1]} !`
        break;
        case 5 : 
        result.textContent = `Parfait ! Un score de ${text} ${emojis[0]} !`
        break;
    }
}

const radioInputs = document.querySelectorAll("input[type='radio']");

radioInputs.forEach(radioInput => radioInput.addEventListener('input', resetColor));

function resetColor(e) {
    const index = e.target.getAttribute("name").slice(8) - 1;
    const parentQuestionBlock = displayQuizz[index];

    parentQuestionBlock.style.background = "#f1f1f1";
}

function resetAllColor () {
    for(let i = 0; i < 5; i++)
    {
        displayQuizz[i].style.background = "#f1f1f1";
    }
    
}