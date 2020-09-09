const { io } = require('../server');
const {TicketControl} = require('../classes/ticket-control');
const ticketControl = new TicketControl();



io.on('connection', (client) => {
    io.emit('ultimoTicket',ticketControl.getLatest());

    client.on('siguienteTicket', (data, callbak)=>{        
        console.log(ticketControl.next());
        callbak(ticketControl.ultimo);
    });   
    
    client.on('atenderTicket',(data,callback)=>{
        if(!data.escritorio){
            return callback({
                err: true,
                message: 'el escritorio es obligatorio'
            })
        }
        let ticketAT = ticketControl.atenderTicket(data.escritorio);
        callback(ticketAT);
        io.emit('ultimoTicket',ticketControl.getLatest());
    });
    
});