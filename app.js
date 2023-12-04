const app = document.createElement('div');
app.classList.add('app');
document.body.appendChild(app)

let startTime;
let killedDivs = 0;

const son = new Audio('https://www.myinstants.com/media/sounds/sonic-ring-sound-effect.mp3');

const settings = document.createElement('div');
settings.classList.add('settings');

app.appendChild(settings);

const startButton = document.createElement('button');
startButton.classList.add('start-button');
startButton.innerText = 'Start';

startButton.addEventListener('click', () => {
    startButton.remove();
    startTime = Date.now();

    const newDivToKill = document.createElement('div');
    newDivToKill.classList.add('div-to-kill');
    newDivToKill.style.top = `${Math.random() * 100}%`;
    newDivToKill.style.left = `${Math.random() * 100}%`;
    
    newDivToKill.addEventListener('click', () => {
        son.pause();
        son.currentTime = 0;
        son.play();
        killedDivs++;
        newDivToKill.remove();

        if(killedDivs === 10) {
            const endTime = Date.now();
            const timeTaken = (endTime - startTime) / 1000;
            alert(`You won! It took you ${timeTaken} seconds to kill 10 divs!`)
        }
        else {
            newDivToKill.style.top = `${Math.random() * 100}%`;
            newDivToKill.style.left = `${Math.random() * 100}%`;
            app.appendChild(newDivToKill);
        }
    })

    app.appendChild(newDivToKill);
})

app.appendChild(startButton);

const timer = document.createElement('div');
timer.classList.add('timer');
app.appendChild(timer);

setInterval(() => {
    if(startTime && killedDivs < 10) {
        const currentTime = Date.now();
        const timeTaken = (currentTime - startTime) / 1000;
        timer.innerText = `Time taken: ${timeTaken} seconds (${killedDivs} / 10 killed)`;
    }
}, 100)