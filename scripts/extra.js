const missSound = document.getElementById('missSound');
const hitSound = document.getElementById('hitSound');
const muteBtn = document.querySelector('#muteBtn');
const audios = document.querySelectorAll('audio');

function muteSounds() {
    audios.forEach(audio => {
        if (audio.muted == false) {
            audio.muted = true;
        } else {
            audio.muted = false;
        }
    })
    changeBg(audios[0].muted)
}

function changeBg(boolean) {
    boolean ? muteBtn.style.backgroundImage = 'url(./assets/feature/muted.svg)' : muteBtn.style.backgroundImage = 'url(./assets/feature/full.svg)'
}

    /* padding: 5px; */
// muteBtn.addEventListener('mouseover', () => muteBtn.style.backgroundImage = 'url(./assets/feature/low.svg)')