var socketPublico = io();
//lblTicket2
//lblEscritorio2
var lblticket1 = $('#lblTicket1');
var lblticket2 = $('#lblTicket2');
var lblticket3 = $('#lblTicket3');
var lblticket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblticket1,lblticket2,lblticket3,lblticket4];
var lblEscritorios = [lblEscritorio1,lblEscritorio2,lblEscritorio3,lblEscritorio4]

socketPublico.on('ultimoTicket',function(data){
    console.log(data);
    if(data.last4){
        updateHTML(data.last4);
    }else{
        console.log('paila socito');
    }
});

function updateHTML (last4){    
    for (let i = 0; i < last4.length ; i++) {        
        lblTickets[i].text('Ticket: '+last4[i].ticket); 
        lblEscritorios[i].text('Escritorio:'+last4[i].escritorio);    
    }
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    
}