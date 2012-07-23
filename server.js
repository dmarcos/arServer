var express = require('express');
var app = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/');
  app.set('view engine', 'mustache');
  app.register(".mustache", require('stache'));
  app.set('view options', {layout: false });
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public')); 
});

var message = "I am interested in ideas, not merely in visual products, Marcel Duchamp";

app.post('/message', function(req, res){
	message = req.body.message; 
	res.send("OK\n");
});

app.get('/message', function(req, res){
	res.send(message + "\n");
});

app.get('/board', function(req, res){
    res.render("board", {
      locals: {
        message: message
      }
    });});

 app.listen(80);
 console.log("AR server listening on port %d", app.address().port);