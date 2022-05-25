import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



const onPlay = function () {
 
    player.getCurrentTime().then(function (seconds) {
        // console.log(seconds);
        localStorage.setItem('videoplayer-current-time', seconds);
    }).catch(function (error) {
        // console.log(error);
    });

};

player.on('timeupdate', throttle(onPlay, 1000));



// console.log(localStorage);
// console.log(localStorage.getItem('videoplayer-current-time'));

function populateCurrentTime() {
    const savedTime = localStorage.getItem('videoplayer-current-time');

    if (savedTime) {
    
        player.setCurrentTime(savedTime).then(function(seconds) {
            // seconds = the actual time that the player seeked to
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                    break;

                default:
                    // some other error occurred
                    break;
            }
        });
    }
}

populateCurrentTime();





