var modu = require('./module')

let obj = new modu();
obj.on('sign', function(data) {
	console.log('Notification is sent to ' + data);
});

obj.emit('sign',"passant")

//****************************************** */
