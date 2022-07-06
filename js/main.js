// Lista de botões
const keyList = document.querySelectorAll('.tecla');
// Lista de sons
const soundList = document.querySelectorAll('.som');

// Condição que varre ambas as listas e relaciona uma com a outra
for(let i = 0; i < keyList.length; i++) {
    keyList[i].onclick = () => {
        soundList[i].play();
    };
}
