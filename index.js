var express=require('express');
var socket=require('socket.io');

var app=express();
var server=app.listen(4000,function(){
    console.log('4000 port dinleniyor');
    
})

app.use(express.static('public'));

var io=socket(server);

io.on('connection',function(socket){
    console.log('socket baglantısı yapıldı.',socket.id);

    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    
    socket.on('yaziyor', function(data){
        socket.broadcast.emit('yaziyor', data);
    });

})