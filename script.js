//your JS code here. If required.
const video = document.getElementById('video');
const audio = document.getElementById('audio');
const timeDisplay = document.querySelector('.time-display');
let timer;

function changeSound(sound) {
  audio.src = `sounds/${sound}.mp3`;
  video.src = `videos/${sound}.mp4`;
}

function setTime(minutes) {
  const seconds = minutes * 60;
  timeDisplay.textContent = `${minutes}:00`;
  clearInterval(timer);
  timer = setInterval(() => {
    secondsRemaining = seconds - 1;
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (secondsRemaining <= 0) {
      clearInterval(timer);
      // Additional logic when the timer reaches 0
    }
  }, 1000);
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    video.play();
  } else {
    audio.pause();
    video.pause();
  }
}
