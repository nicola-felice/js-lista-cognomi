
// creo array lista cognomi
const listaCognomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];

// chiedi all’utente il cognome e inseriscilo in un array con gli altri cognomi
const cognomeUtente = prompt('inserisci il tuo cognome').toLowerCase();
listaCognomi.push(cognomeUtente);

// riordina la lista cognomi alfabeticamente
listaCognomi.sort();
// stampa la lista cognomi
console.log(listaCognomi);

// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log(`sei il numero "${listaCognomi.indexOf(cognomeUtente) + 1}" della lista`);