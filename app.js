
// creo array lista cognomi
const listaCognomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];

// chiedi all’utente il cognome e salvalo
let cognomeUtente = prompt('inserisci il tuo cognome').toLowerCase();

// funzione che controlla la validità dell'input
function validateUserSurname() {

    if (cognomeUtente == "") {
        return true;
    }

    // check if it contains numbers
    for (let i = 0; i < cognomeUtente.length; i++) {
        if ( !isNaN(cognomeUtente[i]) ) {
            return true;
        }
    }

    // checking if it includes invalid characters
    const invalidCharacters = [" ", "!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "^", "]", "_", "`", "|", "{", "~", "}", "\\"];
    for (let i = 0; i < invalidCharacters.length; i++) {
        if (cognomeUtente.includes(invalidCharacters[i])) {
            return true;
        }        
    }

    // reurn false if the input is valid
    return false;
}

// fai reinserire il cognome finchè non è valido
while (validateUserSurname()) {
    cognomeUtente = prompt("errore, inserisci il tuo cognome in modo valido!").toLowerCase();
}

// una volta validato inseriscilo con gli altri cognomi
listaCognomi.push(cognomeUtente);

// riordina la lista cognomi alfabeticamente
listaCognomi.sort();
// stampa la lista cognomi
console.log(listaCognomi);

// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log(`sei il numero "${listaCognomi.indexOf(cognomeUtente) + 1}" della lista`);
