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
const bottoneAggiungi = document.querySelector('#bottone-aggiungi');
const newTask = document.querySelector("#nuovo-task");

const tasks = [];

bottoneAggiungi.addEventListener('click', (e) => { // crea la funzione aggiungi
  e.preventDefault();
  let task = newTask.value;
  tasks.push(task);
  aggiugniTask(task);
});

function aggiugniTask(p) { //funzione della lista
  const lista = document.createElement("li"); // creo il nuovo elemento <li>
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  lista.appendChild(checkbox);

  const spanTesto = document.createElement("span");
  spanTesto.textContent = p; //insertisce il titolo dell'attività
  lista.appendChild(spanTesto);

  const bottone = document.createElement("button"); // creo l'elemento bottone
  bottone.setAttribute("type", "button");
  bottone.classList.add("button"); // assegno al bottone le sue classi
  bottone.textContent = 'Elimina'; //scrive 'Elimina' dentro al bottone 
  lista.appendChild(bottone); // inserisco il <button> bottone dentro <sapn> date, affinchè il bottone sia dopo la data

  listaTask.appendChild(lista); //inserisci il <li> completo nell'HTML
};

listaTask.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.type === 'button') {
    const elemento = e.target.parentElement;
    elemento.remove();
  }
});

// richiamo la funzione con gli argomenti 
aggiugniTask("Pagare la bolletta");
aggiugniTask("Studiare JavaScript");
aggiugniTask("Comprare il pane");
aggiugniTask("Chaiamare il dentista");
aggiugniTask("Riposarsi");

function aggiornaContatore() {
  const tuttiILi = listaTask.querySelectorAll('li'); // restituisce una collezione di elementi <li> all'intero di #lista-task, con le prorprità di un array 
  contatore.textContent = tuttiILi.length; //mostra nella pagina il numero di <li> grazie a .length
};

aggiornaContatore();