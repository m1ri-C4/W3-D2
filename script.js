/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

/*
  1. richiamo #lista-task
  2. creo la funzione aggiungiTask:
  - creo un nuovo elemento <li> per inserire testo e priorità 
  - gestisco le priorità e assegno le classi corrispondenti in CSS 
  - aggiungo Date() nel formato italiano 
  - aggiungo un <button> elimina alla fine di ogni riga
  - creo il contatore che si aggiorna 
*/

const listaTask = document.querySelector('#lista-task');

function aggiugniTask(p, priorita) {
  const lista = document.createElement("li"); // creo il nuovo elemento
  if (priorita === 'ALTA') { // gestisco le priorità assegnando le classi CSS corrispondenti
    lista.classList.add("priorita-alta");
  } else if (priorita === 'MEDIA') {
    lista.classList.add("priorita-media");
  } else {
    lista.classList.add("priorita-bassa");
  }
  lista.innerHTML = `${p} ${priorita} <button> Elimina </button>`
}

