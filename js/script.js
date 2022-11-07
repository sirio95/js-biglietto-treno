// Dichiarazione variabili
let age, km, ticket, ticket_human;
const price = 0.21;
const discount_under = 0.2;
const discount_over = 0.4;


//Inserimento dati variabili 
age = parseInt(prompt("Scrivi qui quanti anni hai"));
km = parseInt(prompt("Di quanti chilometri è la tratta da coprire?"));
document.getElementById("km").innerHTML =`${km} chilometri`;
document.getElementById("age").innerHTML = `${age} anni`;

//Calcolo biglietto

if(age<18){
    ticket= km * price * discount_under;
    document.getElementById("discount").innerHTML = `20&percnt;`;    

}else if(age>18 && age<65){
    ticket= km * price;
    document.getElementById("discount").innerHTML = `nessuno sconto`;

}else if(age>65){
    ticket= km * price * discount_over;
    document.getElementById("discount").innerHTML = `40&percnt;`;
}

//Informazioni biglietto utente
ticket_human = Math.round(ticket * 100) / 100;
document.getElementById("ticket").innerHTML =`${ticket_human} &euro;`;