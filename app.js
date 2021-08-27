
// create list of surnames
const listaCognomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];

// ask for user surname
let cognomeUtente = prompt('inserisci il tuo cognome').toLowerCase();

// function to validate input
function validateUserSurname() {

    // check if it is empty
    if (cognomeUtente == "") {
        return true;
    }

    // check if it contains numbers
    for (let i = 0; i < cognomeUtente.length; i++) {
        if ( !isNaN(cognomeUtente[i]) ) {
            return true;
        }
    }

    // check if it includes invalid characters
    const invalidCharacters = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "^", "]", "_", "`", "|", "{", "~", "}", "\\"];
    for (let i = 0; i < invalidCharacters.length; i++) {
        if (cognomeUtente.includes(invalidCharacters[i])) {
            return true;
        }        
    }

    // reurn false if the input is valid
    return false;
}

// ask for the surname until it is valid
while (validateUserSurname()) {
    cognomeUtente = prompt("errore, inserisci il tuo cognome in modo valido!").toLowerCase();
}

// insert it in the list
listaCognomi.push(cognomeUtente);

// sort list alphabetically
listaCognomi.sort();

// print list
console.log(listaCognomi);

// print position on the list (start by 1)
console.log(`sei il numero "${listaCognomi.indexOf(cognomeUtente) + 1}" della lista`);
