var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

var port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

//Socket.io
io.on('connection', function(socket) {
  console.log("A User has Connected!");
  
  socket.on('disconnect', function(){
    console.log('A User Has Disconnected!');
  })
});


app.get('*', function (req, res){
  res.render('index.ejs');
});


http.listen(port, function(){
  console.log('SERVER RUNNING .....PORT:  ' + port);
})


