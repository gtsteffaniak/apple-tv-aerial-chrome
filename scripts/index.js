import screensavers from './screensavers.js';

window.onload = function () {
    const vid = document.querySelector('video');
    const loc = document.querySelector('h1.description');
    const video = screensavers[Math.floor(Math.random() * screensavers.length) - 1];
    vid.src = video.url;
    loc.innerText = video.location;
}
