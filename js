const lista = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');

//crea l'array di oggetti con le task
const myTask = [ 
    {
        titoloTask: 'Pagare le bollette',
        priorita: 'alta',
        data: new Date(),
    },
    {
        titoloTask: 'Studiare JavaScript',
        priorita: 'media',
        data: new Date(),
    },
    {
        titoloTask: 'Comprare il pane',
        priorita: 'bassa',
        data: new Date(),
    },
    {
        titoloTask: 'Chiamare il dentista',
        priorita: 'alta',
        data: new Date(),
    },
    {
        titoloTask: 'Riposarsi',
        priorita: 'bassa',
        data: new Date(),
    },
    {
        titoloTask: 'Spritz Time',
        priorita: 'alta',
        data: new Date(),
    },
];

//crea una funzione per aggiungere le task 
function aggiungiTask() {
    myTask.forEach((task) => { // il forEach esamina un elemento alla volta, task non rappresenta l'intero array ma un singolo oggetto a ogni iterazione
        const newLi = document.createElement('li'); //crea l'elemento <li>
        newLi.classList.add(`priorita-${task.priorita}`); // se la priorità è alta risulterà priorita-alta, richiamando la classe in CSS

        const textSpan = document.createElement('span'); // crea l'elemento <span>
        textSpan.textContent = task.titoloTask; // inserisci nello <span> il titolo dell'attività corrente 
        newLi.appendChild(textSpan); // inserisci lo <span> dentro <li>

        const badge = document.createElement('span'); // crea l'elemento <span>
        badge.classList.add('badge'); // aggiungi la classe in CSS
        badge.textContent = task.priorita; // inserisci nello <span> la priorità
        newLi.appendChild(badge); // inserisci lo <span> dentro <li>

        const taskDate = document.createElement('span'); //crea l'elemento <span>
        taskDate.classList.add('data', 'divData'); //aggiungi due classi CSS
        taskDate.textContent = task.data.toLocaleString('it-IT');// inserisci la data formattata in italiano, .toLocalString la converte in stringa

        const elimina = document.createElement('button'); //crea l'elemento <button>
        elimina.textContent = 'Elimina'; // inserisci nel testo 'Elimina
        taskDate.appendChild(elimina); // inserisce il <button> nello <span> di data
        newLi.appendChild(taskDate); // inserisce lo <span> della data, che ora contiene anche il <button>, nel <li>

        lista.appendChild(newLi); // inserisce il <li> completo nella pagina
    });
}

//crea funzione per il contatore
function aggiornaContatore() {
    contatore.textContent = myTask.length; // modifica il testo rispetto al numero di elementi presenti nell'array 
}

aggiungiTask(); // richiama la funzione 
aggiornaContatore(); // richiama la funzione