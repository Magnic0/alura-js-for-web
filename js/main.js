// Lista de botões
const keyList = document.querySelectorAll('.tecla');
// Lista de sons
const soundList = document.querySelectorAll('.som');

// Condição que varre ambas as listas e relaciona uma com a outra
for(let i = 0; i < keyList.length; i++) {
    
    let key = keyList[i];
    let sound = soundList[i];

    key.onclick = () => {
        sound.play();
    };

    key.onkeydown = (event) => {
        if(event.code === "Space") {
            key.classList.add('ativa');
            sound.play();
        }
    }

    key.onkeyup = () => {
        key.classList.remove('ativa');
    }
    
}
