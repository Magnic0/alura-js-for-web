// Lista de botões
const keyList = document.querySelectorAll('.tecla');
// Lista de sons
const soundList = document.querySelectorAll('.som');

function playSound(num) { // num representa uma tecla do MIDI
    keyList[num].focus();
    keyList[num].classList.add('ativa');
    soundList[num].play();
}

for(let i = 0; i < keyList.length; i++) {
    
    let key = keyList[i];
    let sound = soundList[i];

    key.focus();

    key.onclick = (event) => {
        sound.play();
    };

    key.onkeydown = (event) => {
        if(event.code === "Numpad7") {
            playSound(0);
        } else if(event.code === "Numpad8") {
            playSound(1);
        } else if(event.code === "Numpad9") {
            playSound(2);
        } else if(event.code === "Numpad4") {
            playSound(3);
        } else if(event.code === "Numpad5") {
            playSound(4);
        } else if(event.code === "Numpad6") {
            playSound(5);
        } else if(event.code === "Numpad1") {
            playSound(6);
        } else if(event.code === "Numpad2") {
            playSound(7);
        } else if(event.code === "Numpad3") {
            playSound(8);
        }
    }

    key.onkeyup = () => {
        key.classList.remove('ativa');
    }
    
}
