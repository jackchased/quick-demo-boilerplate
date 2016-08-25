var EventEmitter = require('events').EventEmitter,
    util = require('util'),
    io = require('socket.io-client')('http://localhost');

function IoClient () {}

util.inherits(IoClient, EventEmitter);

IoClient.prototype.start = function (callback) {
	if (typeof callback === 'function') 
		callback();
};

IoClient.prototype.sendReq = function (cmd, args, callback) {
    console.log('***sendReq*** ' + cmd + ' , args: ' + args);

    if (cmd === 'getDevs')
    	callback(1, { 'AA:BB:CC': { permAddr: 'AA:BB:CC' }, 'AA:BB:DD': { permAddr: 'AA:BB:DD' } });
    else
    	callback();
};

var ioClient = new IoClient();

module.exports = ioClient;
