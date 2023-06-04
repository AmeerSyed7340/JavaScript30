window.addEventListener('keydown', (e)=>{
    //keycode has been deprecated so had to use key 
    let key = e.key.toUpperCase();
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    audio.currentTime = 0;
    //div.classList.remove('playing');
    if(!audio) return;
    audio.play();
    const div = document.querySelector(`div[data-key="${key}"]`);
    div.classList.add('playing');
});

// function removeTransition(e){
//     if(e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', (e) => {
        if(e.propertyName !== 'transform') return;
        key.classList.remove('playing');
    })
})
//The code below works as well but its my own implementation and might be subject to issues.However, this works better when holding down a button.
// window.addEventListener('keyup', (e) => {
//     //keycode has been deprecated so had to use key 
//     let key = e.key.toUpperCase();
//     const div = document.querySelector(`div[data-key="${key}"]`);
//     div.classList.remove('playing');
// })