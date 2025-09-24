/*Chiedo all'utente di inserire una parola con il prompt
    creiamo una funzione isPalindrome che attraverso il ciclo for inverte la parola 
   e confrontiamo le due per ottenere un valore booleano

    @param{"String"}; parola fornita dall'utente
    @param{"bool"}; output true se è palindroma */


let userWord = prompt("Inserisci una parola per verificare se è palindroma", "ingegni");


alert(isPalindrome(userWord));

/*const bool = isPalindrome(userWord);

console.log(reversedWord);
console.log(bool);*/




function isPalindrome(word) {

    const reversedWordAsArray = [];
    let message

    for (let i = word.length - 1; i >= 0; i--) {
        const letter = word[i];
        reversedWordAsArray.push(letter);
    }
    reversedWord = reversedWordAsArray.join("");


    if (reversedWord === word) {
        message = `La parola: ${word} invertita è: ${reversedWord}, la tua parola è palindroma!`;
    } else {
        message = `${word} invertita è ${reversedWord}, la tua parola non è palindroma!`;
    }

    return message;

    //return  reversedWord === word;
}


