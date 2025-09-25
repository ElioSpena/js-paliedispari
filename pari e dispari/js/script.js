/*Chiediamo un numero all'utente tramite prompt (1 a 6)
    @param {number}; 
Chiediamo all'utente pari o dispari
    @param {string};
Generiamo un numero random usando una funzione isEven per generare un numero casuale sommarlo 
a quello dell'utente e dichiarare il vincitore*/

const userNumber = parseInt(prompt("Inserisci un numero", 5));

if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
    alert("Errore: Inserisci un numero valido da 1 a 6");
} else {
    const userBet = prompt("Scegli tra pari o dispari", "pari");
    if (userBet != "pari" && userBet != "dispari") {
        alert("Errore: Inserisci pari o dispari!")
    } else {
        alert(isEven(userBet, userNumber));
    }
}


function isEven(bet, number) {
    const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const gameSum = computerNumber + number;
    //console.log(`Numero utente: ${number}, Numero computer: ${computerNumber}, Somma: ${gameSum}`);
    let message
    if (gameSum % 2 === 0 && bet === "pari" || gameSum % 2 !== 0 && bet === "dispari") {
        message = (`Numero utente: ${number}, Numero computer: ${computerNumber}, Somma: ${gameSum}  HAI VINTO!`);
    } else {
        message = (`Numero utente: ${number}, Numero computer: ${computerNumber}, Somma: ${gameSum}  HAI PERSO!`)
    }
    return message
}
