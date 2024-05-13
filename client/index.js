// music player
const songPaths = [
  '/assets/we-are.mp3',
  '/assets/opening-5.mp3',
  '/assets/opening-6.mp3',
  '/assets/opening-18.mp3',
  '/assets/op-20.mp3',
  '/assets/op-22.mp3',
  '/assets/op-26.mp3',
  '/assets/ost-overtaken.mp3',
];

const songButtons = document.querySelectorAll('#song-btn');
const audioElement = document.getElementById('audio');

songButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    audioElement.src = songPaths[index];
    audioElement.play();
  });
});

const audio = document.getElementById('audio');

audio.addEventListener('loadeddata', () => {
  audio.volume = 0.06; 

  localStorage.setItem("Volume", audio.volume);
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

//luffy flying hat
document.querySelector('.luffys-hat').addEventListener('click', function() {
  this.style.animation = 'fly-away 20s forwards';

  let audio = new Audio('/assets/luffy-eyecatcher.mp3');
  audio.volume = 0.06;
  audio.play();
});

// const changeColorBtn = document.querySelector('.light-switch');
// const lightModeElements = document.querySelectorAll('p, li, a, button, b, #song-btn, h2, small, span');
// const body = document.body;
// const songBtn = document.querySelector('#song-btn');

// changeColorBtn.addEventListener('click', () => {
//     lightModeElements.forEach(element => {
//         element.classList.toggle('blueText', false);
//         element.classList.toggle('greenText', false);
//         element.classList.toggle('tealColor');
//     });
//     body.classList.toggle('backgroundColor');
// });




