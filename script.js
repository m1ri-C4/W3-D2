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


const tasks = [];

bottoneAggiungi.addEventListener('click', (e) => { // crea la funzione aggiungi
  e.preventDefault();
  let task = newTask.value;
  tasks.push(task);
  aggiugniTask(task);
  aggiornaContatore();
});

attiviBtn.addEventListener("click", () => {
  const tutteTask = document.querySelectorAll('li');

  tutteTask.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');

    if (!checkbox.checked) {
      task.classList.remove("nascosto");
    } else {
      task.classList.add("nascosto");
    }
  });
});

tuttiBtn.addEventListener("click", () => {
  const tutteTask = document.querySelectorAll('li');
  tutteTask.forEach((task) => {
    task.classList.remove("nascosto");
  });
});

completatiBtn.addEventListener("click", () => {
  const tutteTask = document.querySelectorAll('li');

  tutteTask.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      task.classList.remove("nascosto");
    } else {
      task.classList.add("nascosto");
    }
  });
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

listaTask.addEventListener('click', (e) => {
  if (e.target.type === 'button') {
    const elemento = e.target.parentElement;
    elemento.remove();
    aggiornaContatore();
  }
});

listaTask.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const spanTesto = e.target.nextElementSibling;
    spanTesto.classList.toggle("checkbox", e.target.checked);
    aggiornaContatore();
  }
});

function aggiornaContatore() {
  const tutteCheckbox = listaTask.querySelectorAll('input[type="checkbox"]')// restituisce una collezione di elementi <li> all'intero di #lista - task, con le prorprità di un array 
  let attivi = 0;
  tutteCheckbox.forEach((checkbox) => {
    if (!checkbox.checked) {
      attivi++;
    }
  })
  contatore.textContent = attivi;
};
aggiornaContatore();

