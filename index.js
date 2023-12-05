const btns = document.querySelectorAll('.btn');
const messages = document.querySelectorAll('.message');
const closes = document.querySelectorAll('.close');
const playBtn = document.querySelector('.playBtn');
const loader = document.getElementById('loader')
const audio = new Audio('./assets/cumple.mp3');
const mute = document.querySelector('.mute');
const go = document.getElementById('go')
audio.loop = true;

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        messages.forEach(message => {
            message.classList.remove('active');
        });
        const message = this.closest('.card').querySelector('.message');
        message.classList.add('active');
    });  
});


closes.forEach(close => {
    close.addEventListener('click', function() {
        const message = this.closest('.message');
        message.classList.remove('active');
    });  
});

playBtn.addEventListener('click', function(){
    loader.classList.add('disable');
    audio.play();
    mute.classList.add('play')
   
})

mute.addEventListener('click', function(){
    if(mute.classList.contains('play')){
        audio.pause();
        mute.classList.remove('play')
        mute.classList.remove('ri-volume-up-line')
        mute.classList.add('ri-volume-mute-line')
        
    }else{
        audio.play();
        mute.classList.add('play')  
        mute.classList.add('ri-volume-up-line')
        mute.classList.remove('ri-volume-mute-line')
    }
})

go.addEventListener('click', function(){
    audio.pause();
        mute.classList.remove('play')
        mute.classList.remove('ri-volume-up-line')
        mute.classList.add('ri-volume-mute-line')
})