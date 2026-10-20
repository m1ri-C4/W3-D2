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
  2. creo l'array di oggetti 
  3. creo la funzione aggiungiTask:
  - creo un nuovo elemento <li> per inserire testo e priorità 
  - creo un nuovo elemento <span>
  - gestisco le priorità e assegno le classi corrispondenti in CSS 
  - aggiungo Date() nel formato italiano 
  - aggiungo un <button> elimina alla fine di ogni riga
  - creo il contatore che si aggiorna 
*/

const listaTask = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');

const myTask = 

function aggiugniTask() {

  const lista = document.createElement("li"); // creo il nuovo elemento <li>
  const span = document.createElement("span"); // creo il nuovo elemento <span>

  if (priorita === 'ALTA') { // gestisco le priorità assegnando le classi CSS corrispondenti
    lista.classList.add("priorita-alta");

  } else if (priorita === 'MEDIA') {
    lista.classList.add("priorita-media");

  } else if (priorita === 'BASSA') {
    lista.classList.add("priorita-bassa");
  } 
  listaTask.appendChild(lista); 
  lista.innerHTML = ` 
  ${p},
  ${priorita}
  <button> Elimina </button>`  //aggiungo a <ul> il <li>  //inserisce alla pagina
  span.classList.add("badge"); //assegno la classe allo <span> 
  span.textContent = priorita; 
  lista.appendChild(span); // aggiungo a <li> lo <span>
};
aggiugniTask("Pagare le bollette", "ALTA");