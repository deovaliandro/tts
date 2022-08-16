const express = require('express')
var parseUrl = require('body-parser')
const app = express()
const gTTS = require('gtts');
var path = require('path');

let encodeUrl = parseUrl.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/v3.html')
})

app.use(express.static('public'));

app.post('/', encodeUrl, (req, res) => {
  console.log('Form request:', req.body);

  if(req.body.name != "" || req.body.to != "") {
    var speech = 'Perhatian perhatian, kepada saudara ' + req.body.name + ' diharapkan segera menuju ' + req.body.to + ', Sekali lagi, kepada saudara ' + req.body.name + ' diharapkan segera menuju ' + req.body.to + ', Terima kasih.';
    var gtts = new gTTS(speech, 'id');
    gtts.save('public/sound.mp3', function (err, result) {
      if(err) { throw new Error(err) }
    });
  }

  res.redirect('/');
})

app.listen(4000)