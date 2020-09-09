var socketClient = io();

var label = $('#lblNuevoTicket');
socketClient.on('connect',function(){
    console.log('conected to the server');
});

socketClient.on('disconnect', function(){
    console.log('connection lost');
});

socketClient.on('ultimoTicket', function(data){
    label.text(data.lastone);
});

$('button').on('click',function(){    
    socketClient.emit('siguienteTicket',null,function(siguienteTicket){
        label.text(siguienteTicket);
    });
});