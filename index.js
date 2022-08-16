const gTTS = require('gtts');

// var audio = new Audio("https://upload.wikimedia.org/wikipedia/commons/3/34/Sound_Effect_-_Door_Bell.ogg");

var speech = 'Halo dunia';
var gtts = new gTTS(speech, 'id');

gtts.save('sound.mp3', function (err, result){
    if(err) { throw new Error(err); }
    console.log("Text to speech converted!");
});