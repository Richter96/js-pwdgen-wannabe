

/*
Decrizione passaggi:
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 
*/


// Chiedi all'utente il suo nome,
let userName = prompt('Inserisci il tuo nome')


// poi chiedi il suo cognome
let surname=prompt('Inserisci il tuo cognome')



// poi chiedi il suo colore preferito
let userFavouriteColor = prompt('inserisci il tuo colore preferito')



//Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 
/* console.log( `questa è la tua password sicurissima : ${userName}${surname}${userFavouriteColor}23`)
 */

let securePassword=document.getElementById ('password')
console.log(securePassword)

securePassword.innerHTML=`Questa è la tua password sicurissima : ${userName}${surname}${userFavouriteColor}23`