const myBoard = document.querySelector('#board');
const mySwitch = document.querySelector('#switch');
const myonoff = document.querySelector('#onoff');
const myText = document.querySelector('#text');
const myhead = document.querySelector('#head');
const defaultText = myText.innerText;
const defaultonoff = myonoff.innerText;
let isLightOn = false;
let isAnimating = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(element, newText) {
    isAnimating = true;

    let oldText = element.innerText;

    // Delete old text
    for (let i = oldText.length; i >= 0; i--) {
        element.innerText = oldText.substring(0, i);
        await sleep(10); // delay between deletions
    }

    // Type new text
    for (let j = 0; j <= newText.length; j++) {
        element.innerText = newText.substring(0, j);
        await sleep(30); // delay between typing
    }

    isAnimating = false;
}

myBoard.addEventListener('click', async () => {
    if (isAnimating) return; // ignore clicks mid-animation

    if (!document.body.classList.contains('light-on')) {
        document.body.classList.add('light-on');
        await typeWriter(myText, "Hope you can see the light now!");
    } else {
        document.body.classList.remove('light-on');
        await typeWriter(myText, defaultText);
    }
});


myBoard.addEventListener('click', () => {
    if (isLightOn === false){
        myBoard.style.border = '1px solid rgb(12, 12, 12)';
        mySwitch.style.border = '1px solid rgb(12, 12, 12)';
        mySwitch.style.backgroundColor = 'rgba(151, 255, 153, 1)';
        myText.innerText = 'Hope you can see the light now!';
        myText.style.color = 'rgb(12, 12, 12)';
        myhead.style.color = 'rgb(12, 12, 12)';
        myonoff.style.color = 'rgb(12, 12, 12)';
        myonoff.innerText = 'ON';

        document.body.style.backgroundColor = '#ffffffff';
        isLightOn = true;
    }

    else{
         myBoard.style.border = '1px solid white';
        mySwitch.style.border = '1px solid white';
        mySwitch.style.backgroundColor = 'rgb(247, 106, 106)';
        myText.innerText = defaultText;
        myText.style.color = 'white';
        myhead.style.color = 'white';
        myonoff.style.color = 'white';
        myonoff.innerText = defaultonoff;

        document.body.style.backgroundColor = 'rgb(12, 12, 12)';
        isLightOn = false;
    }
});



