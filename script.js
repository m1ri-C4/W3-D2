/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

const listaTask = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');
const bottoneAggiungi = document.querySelector('#bottone-aggiungi');
const newTask = document.querySelector("#nuovo-task");
const controlli = document.querySelector(".controlli");
const tuttiBtn = document.querySelector("#tutti");
const attiviBtn = document.querySelector("#attivi");
const completatiBtn = document.querySelector("#completati");


const tasks = []; // creo un array per salvare il testo delle nuove attività

//aggiungere una nuova attività
bottoneAggiungi.addEventListener('click', (e) => {
  e.preventDefault(); //evita il comportamento predefinito del pulsante 

  let task = newTask.value; // creo una variabile che recupera il testo scritto nell'input
  tasks.push(task); //aggiungo il testo all'array tasks
  aggiugniTask(task); //creo e mostro la nuova attività nella lista
  aggiornaContatore(); //aggiorna il numero delle attività attive
});

//aggiungi attività con il tasto enter
newTask.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') { // controlla se il tasto premuto è enter
    e.preventDefault();
    bottoneAggiungi.click();
  }
});

//filtro attivi
attiviBtn.addEventListener("click", () => {
  const tutteTask = document.querySelectorAll('li'); //recupera tutti i li 

  tutteTask.forEach((task) => { //controlla ogni attività della lista
    const checkbox = task.querySelector('input[type="checkbox"]'); //trova la checkbox del singolo li

    if (!checkbox.checked) { // se la checkbox non è selezionata 
      task.classList.remove("nascosto"); //mostra l'attività attiva
    } else {
      task.classList.add("nascosto");//nascondi l'attività completata
    }
  });
});

//filtro tutti
tuttiBtn.addEventListener("click", () => {
  const tutteTask = document.querySelectorAll('li');
  tutteTask.forEach((task) => {
    task.classList.remove("nascosto");//mostra tutte le attività
  });
});

//filtro completati
completatiBtn.addEventListener("click", () => {
  const tutteTask = document.querySelectorAll('li');

  tutteTask.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) { //se la checkbox è selezionata 
      task.classList.remove("nascosto");//mostra l'attività completata
    } else {
      task.classList.add("nascosto");//nasconde l'attività attiva
    }
  });
});

//funzione per creare una nuova attività
function aggiugniTask(p) {
  const lista = document.createElement("li"); // creo <li>

  const checkbox = document.createElement("input"); //creo <input>
  checkbox.setAttribute("type", "checkbox");//imposta l'input come checkbox
  lista.appendChild(checkbox);//inserisci la ceckbox nel <li>

  const spanTesto = document.createElement("span");//creo <span>
  spanTesto.textContent = p; //inserisce nello span il testo ricevuto dalla funzione
  lista.appendChild(spanTesto); //inserisci lo span nel <li>

  const bottone = document.createElement("button"); // creo <button>
  bottone.setAttribute("type", "button");//imposta il tipo button
  bottone.classList.add("elimina"); // assegno al bottone la classe
  bottone.textContent = 'Elimina'; //scrive 'Elimina' dentro al bottone 
  lista.appendChild(bottone); //inserisci il <button> nel <li>

  listaTask.appendChild(lista); //inserisci il <li> completo nell'HTML
};

// richiamo la funzione con gli argomenti 
aggiugniTask("Pagare la bolletta");
aggiugniTask("Studiare JavaScript");
aggiugniTask("Comprare il pane");
aggiugniTask("Chiamare il dentista");
aggiugniTask("Riposarsi");

//eliminare un attività
listaTask.addEventListener('click', (e) => {
  //controlla se l'elemento cliccato è un pulsante
  if (e.target.type === 'button') {
    const elemento = e.target.parentElement; //recupera il li che contiene il pulsante 
    elemento.remove(); //elimina il li dalla pagina
    aggiornaContatore(); //aggiorna il numero delle attvità attive
  }
});

//completamento di un attività
listaTask.addEventListener('change', (e) => {
  //controlla se l'elemento cliccato è un pulsante
  if (e.target.type === 'checkbox') {
    const spanTesto = e.target.nextElementSibling; //recupera lo span dopo la checkbox
    //aggiunge la classe checkbox se selezionata, la rimuove se deselezionata 
    spanTesto.classList.toggle("checkbox", e.target.checked);
    aggiornaContatore();
  }
});

//funzione per aggiornare il contatore 
function aggiornaContatore() {
  //recupera tutte le checkbox presenti nella lista
  const tutteCheckbox = listaTask.querySelectorAll('input[type="checkbox"]')
  let attivi = 0; // contatore iniziale delle attività non complete
  tutteCheckbox.forEach((checkbox) => { //controllas ogni checkbox
    if (!checkbox.checked) { //se la ceckbox non è selezionata
      attivi++; //aumenta di uno il valore delle atitività attive
    }
  })
  contatore.textContent = attivi; //mostra nella pagina il totale attivi
};
aggiornaContatore();

