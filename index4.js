var express = require('express'),
app = express();

app.use(express.bodyParser());

app.get('/speak', function (req, res) {
   console.log(req.body.example);
});

app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000')
});