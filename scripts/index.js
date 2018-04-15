import screensavers from './screensavers.js';

window.onload = function () {
    const vid = document.querySelector('video');
    const loc = document.querySelector('h1.description');
    let video = screensavers[Math.floor(Math.random() * screensavers.length) - 1];
    while (video.timeOfDay == '4K')
        video = screensavers[Math.floor(Math.random() * screensavers.length) - 1];
    vid.src = video.url;
    loc.innerText = video.location;
}
