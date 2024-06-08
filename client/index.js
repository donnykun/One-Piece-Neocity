// music player
const songPaths = [
  '/assets/we-are.mp3',
  '/assets/opening-5.mp3',
  '/assets/opening-6.mp3',
  '/assets/opening-18.mp3',
  '/assets/op-20.mp3',
  '/assets/op-22.mp3',
  '/assets/sekai-no-owari.mp3',
  '/assets/op-26.mp3',
  '/assets/sekai-no-owari.mp3',
];

const songButtons = document.querySelectorAll('#song-btn');
const audioElement = document.getElementById('audio');

songButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    audioElement.src = songPaths[index];
    audioElement.play();
  });

const audio = document.getElementById('audio');

audio.addEventListener('loadeddata', () => {
  audio.volume = 0.06; 

  localStorage.setItem("Volume", audio.volume);
  });
});



// brook gif toggle
  function playGif() {
    let gif = document.getElementById('brook-gif');
    let src = gif.getAttribute('data-src');

    gif.setAttribute('src', src);
    audioElement.src = '/assets/binks-sake.mp3';
    audioElement.play();
}

//current song color
const buttons = document.querySelectorAll('#song-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

//chopper hiding
document.querySelector('.chopper-hiding').addEventListener('click', function() {
  let chopper = this;

  chopper.classList.add('chopper-animate'); // Add class to trigger animation

  let audio = new Audio('/assets/voice-chopper.mp3')

  audio.volume = 0.5;
  audio.play()

  chopper.addEventListener('animationend', function() {
      chopper.classList.remove('chopper-animate');
  }, { once: true });
});



// luffy flying hat
window.addEventListener('DOMContentLoaded', () => {
  const luffyHat = document.querySelector('.luffys-hat')
  luffyHat.addEventListener('click', () => {
    luffyHat.style.animation = 'fly-away 20s forwards';
    console.log(luffyHat)
  
    let audio = new Audio('/assets/luffy-eyecatcher.mp3');
    audio.volume = 0.07;
    audio.play();
  });
})


//chatbox
const nameInput = document.getElementById('chat-name');
const messageInput = document.getElementById('chat-message');
const chatBtn = document.getElementById('chat-btn');
const messageBox = document.getElementById('msg-box');

chatBtn.addEventListener('click', () => {
  const card = document.createElement('div');
  const date = new Date();
  const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}.${date.getFullYear()}`;
  const formattedTime = date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  card.classList.add('chat-card');
  card.innerHTML = `
  <small>${formattedDate}, ${formattedTime}</small>
  <h2>${nameInput.value}</h2>
  <p>${messageInput.value}</p>
  `;

  messageBox.appendChild(card);
  nameInput.value = '';
  messageInput.value = '';
  
})










