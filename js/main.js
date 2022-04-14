//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('.generateExcuse').addEventListener('click', randomExcuseAndFact);
document.querySelector('.yoMama').addEventListener('click', insultMother);

function randomExcuseAndFact() {
    
    fetch("https://excuser.herokuapp.com/v1/excuse")
    .then(res => res.json())
    .then(data => {
        document.querySelector('.excuse').innerText = data[0].excuse
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('.fact').innerText = data.text + '?';
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function insultMother() {
    fetch("https://api.codetabs.com/v1/proxy?quest=http://yomomma-api.herokuapp.com/jokes")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('.startInsult').innerText = 'What do you mean I\'m lying!? Oh yea, well...';
        document.querySelector('.insult').innerText = data.joke + '!';
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

