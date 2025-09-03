const myBoard = document.querySelector('#board');
const mySwitch = document.querySelector('#switch');
const myonoff = document.querySelector('#onoff');
const myText = document.querySelector('#text');
const myhead = document.querySelector('#head');
const defaultText = myText.innerText;
const defaultonoff = myonoff.innerText;
let isLightOn = false;

myBoard.addEventListener('click', () => {
    if (!document.body.classList.contains('light-on')) {
        document.body.classList.add('light-on');
        typeWriter(myText, "Hope you can see the light now!");
    } else {
        document.body.classList.remove('light-on');
        typeWriter(myText, defaultText);
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

function typeWriter(element, newText, callback) {
    let oldText = element.innerText;
    let i = oldText.length;

    // Delete old text
    function deleteChar() {
        if (i >= 0) {
            element.innerText = oldText.substring(0, i);
            i--;
            setTimeout(deleteChar, 10); // speed of deleting
        } else {
            typeChar();
        }
    }

    let j = 0;
    // Type new text
    function typeChar() {
        if (j <= newText.length) {
            element.innerText = newText.substring(0, j);
            j++;
            setTimeout(typeChar, 30); // speed of typing
        } else if (callback) {
            callback();
        }
    }

    deleteChar();
}

