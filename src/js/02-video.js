import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeUpdate = function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};

player.on('timeupdate', throttle(timeUpdate, 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');
console.log(saveTime);
const timeStop = JSON.parse(saveTime);
// console.log(timeStop.seconds);


function setTime () {
  if (timeStop) {
    player.setCurrentTime(timeStop.seconds);
   } else player.setCurrentTime(0);
}
   setTime();

// player.setCurrentTime(timeStop.seconds || 0);
