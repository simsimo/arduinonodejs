


var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

var port = 3000;

app.listen(port, () =>{
	console.log('server on port ' + port);
	} 
);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


var SerialPort = require('serialport');
var Readline = SerialPort.parsers.Readline;

var port = new SerialPort('COM13',{baudRate: 115200}, function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});

var parser = port.pipe(new Readline());
parser.on('data', function(val){
	console.log(val);
	io.emit('getValue',val);
});




