const fs = require('fs');
const path = require('path');
const { isNull } = require('util');

class Ticket{
    constructor(numero,escritorio){
        this.numero = numero;
        this.escritorio = escritorio;
    }
}


class TicketControl {
    constructor(){
        this.ultimo = 0;
        this.tikets = [];
        this.last4 = [];
        this.hoy = new Date().getDate();
        let data = require('../data/data.json');
        if(data.hoy === this.hoy){
            this.ultimo = data.ultimo;
            this.tikets = data.tickets;
        }else{
            this.reiniciarConteo()
        }
    }
    
    next(){ 
        if(!this.tikets){
            this.tikets = [];
        }       
        this.ultimo += 1;
        let tik = new Ticket(this.ultimo,null);
        this.tikets.push(tik);
        this.savefile();
        return `ticket :${this.ultimo}`
    }
    
    reiniciarConteo(){
        this.ultimo = 0;
        this.tikets = [];
        this.savefile();
    }

    savefile(){
        let jsonData = {
            ultimo:this.ultimo, 
            hoy: new Date().getDate(),
            tikets:this.tikets,
            last4:this.last4
        }
        fs.writeFileSync(path.resolve(__dirname,'../data/data.json'),JSON.stringify(jsonData));
    }

    getLatest(){
        return {
            latest: this.ultimo,
            last4:  this.last4
        }

    }

    atenderTicket(escritorio){
        if(!this.tikets){
            this.tikets = [];
        }
        if (this.tikets.length === 0){
            return 'no hay tickets'
        }else{
            let ticket = {ticket:this.tikets[0].numero,escritorio:escritorio}
            this.tikets.shift();
            if(this.last4.length <= 5){
                this.last4.push(ticket);                
            }
            if(this.last4.length == 5){                   
                this.last4.shift();                
            }        
            return ticket;
        }
    }
}

module.exports = {
    TicketControl
}