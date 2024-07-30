// Chiedi all’utente il suo nome,poi chiedi il suo cognome,poi chiedi il suo colore preferito infine stampa in console nomecognomecolorepreferito21


/* 
1-Recuperare gli elementi di mio interesse 
2- Chiedi il nome del utente
3- Chiedi il cogniome del utente
4- Chiedi il suo colore preferito
5- Stampa in console nomecognomecolorepreferito21
*/ 


// Fase preparatoria
//1-Recuperare gli elementi di mio interesse
resultElement = document.getElementById ('result');


// Fase raccolta dati
//1 chiedi il nume del utente

const firstName = prompt('Dimmi il tuo nome','abdi')
console.log(firstName)

//2 chiedi il cognume del utente

const lastName = prompt('Dimmi il tuo nome','mohamed')
console.log(lastName)

//3 chiedi il colore del utente

const favColor = prompt('Dimmi il tuo colore preferito','rosso')
console.log(favColor)



// Fase di lavorazione dati
const fullName =  firstName + lastName
const password = fullName + favColor + '21'
console.log(password)



// fase produzione imput 
result.innerText = 'La mia password creata è ' + password