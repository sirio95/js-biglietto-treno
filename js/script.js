// Dichiarazione variabili
let age, km, ticket;
const price = 0.21;
const discount_under = 0.2;
const discount_over = 0.4;


//Inserimento dati variabili 
age = parseInt(prompt("Scrivi qui quanti anni hai"));
km = parseInt(prompt("Di quanti chilometri è la tratta da coprire?"));
document.getElementById("km").innerHTML =`${km} chilometri`;
document.getElementById("age").innerHTML = `${age} anni`

//Calcolo biglietto

if(age<18){
    ticket= km * price * discount_under;
    document.getElementById("discount").innerHTLM = "20%";

}else if(age>18 && age<65){
    ticket= km * price;
    document.getElementById("discount").innerHTML = "nessuno sconto";

}else if(age>65){
    ticket= km * price * discount_over;
    document.getElementById("discount").innerHTLM = "40%";
}

//Informazioni biglietto utente
document.getElementById("ticket").innerHTML =`${ticket} &euro;`;