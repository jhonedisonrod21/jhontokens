var socketEsc = io();
var searchParams = new URLSearchParams(window.location.search);
if(!searchParams.has('escritorio')){
    window.location = 'index.html'
    throw new Error('el escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

$('h1').text('escritorio'+ escritorio);


let label = $('small');

$('button').on('click',function(){
    socketEsc.emit('atenderTicket',{escritorio:escritorio},function(res){
        if(res==='no hay tickets'){
            alert(res);
            label.text(res)
        }else{
            label.text(res.ticket);
        }
    });
});
