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
  - creo un nuovo elemento <li> per inserire testo
  - aggiungo un <button> elimina alla fine di ogni riga
  - creo il contatore che si aggiorna 
*/

const listaTask = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');

function aggiugniTask(p) {

  const lista = document.createElement("li"); // creo il nuovo elemento <li>
  lista.textContent = p; //insertisce il titolo dell'attività

  const bottone = document.createElement("button"); // creo l'elemento bottone
  bottone.classList.add("button", "liButton"); // assegno al bottone le sue classi
  bottone.textContent = 'Elimina'; //scrive 'Elimina' dentro al bottone 
  lista.appendChild(bottone); // inserisco il <button> bottone dentro <sapn> date, affinchè il bottone sia dopo la data

  listaTask.appendChild(lista); //inserisci il <li> completo nell'HTML
};

// richiamo la funzione con gli argomenti 
aggiugniTask("Pagare la bolletta");
aggiugniTask("Studiare JavaScript");
aggiugniTask("Comprare il pane");
aggiugniTask("Chaiamare il dentista");
aggiugniTask("Riposarsi");

function aggiornaContatore(){
const tuttiILi = listaTask.querySelectorAll('li'); // restituisce una collezione di elementi <li> all'intero di #lista-task, con le prorprità di un array 
contatore.textContent = tuttiILi.length; //mostra nella pagina il numero di <li> grazie a .length
};

aggiornaContatore();