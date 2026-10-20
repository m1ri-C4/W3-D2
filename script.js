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
  2. richiamo #contatore 
  3. creo la funzione aggiungiTask:
  - creo un nuovo elemento <li> per inserire testo e priorità 
  - creo un nuovo elemento <span> per le priorità
  - gestisco le priorità e assegno le classi corrispondenti in CSS 
  - aggiungo Date() nel formato italiano 
  - aggiungo un <button> elimina alla fine di ogni riga
  - creo il contatore che si aggiorna 
*/

const listaTask = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');

function aggiugniTask(p, priorita) {

  const lista = document.createElement("li"); // creo il nuovo elemento <li>
  const span = document.createElement("span"); // creo il nuovo elemento <span>

  if (priorita === 'ALTA') { // gestisco le priorità assegnando le classi CSS corrispondenti
    lista.classList.add("priorita-alta");

  } else if (priorita === 'MEDIA') {
    lista.classList.add("priorita-media");

  } else if (priorita === 'BASSA') {
    lista.classList.add("priorita-bassa");
  }

  lista.textContent = p; //insertisce il titolo dell'attività

  span.classList.add("badge"); //assegno la classe CCS al badge
  span.textContent = priorita; //inserisce la priorità nel badge
  lista.appendChild(span); // inserisce <span> badge nel <li>, dopo il titolo <p>

  const data = new Date(); //crea un oggetto contenente data e ora attuali 
  const date = document.createElement("span"); // creao lo <span> per data
  date.classList.add("data", "divData"); // assegno a date le classi in CSS
  date.textContent = data.toLocaleString('it-IT')// restituisce la data e l'ora formattata in italiano e convertita in stringa dentro lo <span> date
  lista.appendChild(date); //inserisco lo <span> date in <li>

  const bottone = document.createElement("button"); // creo l'elemento bottone
  bottone.classList.add("button", "liButton"); // assegno al bottone le sue classi
  bottone.textContent = 'Elimina'; //scrive 'Elimina' dentro al bottone 
  date.appendChild(bottone); // inserisco il <button> bottone dentro <sapn> date, affinchè il bottone sia dopo la data

  listaTask.appendChild(lista); //inserisci il <li> completo nell'HTML
};

// richiamo la funzione con gli argomenti 
aggiugniTask("Pagare la bolletta", "ALTA");
aggiugniTask("Studiare JavaScript", "MEDIA");
aggiugniTask("Comprare il pane", "BASSA");
aggiugniTask("Chaiamare il dentista", "ALTA");
aggiugniTask("Riposarsi", "BASSA");

const tuttiILi = listaTask.querySelectorAll('li'); // restituisce una collezione di elementi <li> all'intero di #lista-task, con le prorprità di un array 
contatore.textContent = tuttiILi.length; //mostra nella pagina il numero di <li> grazie a .length