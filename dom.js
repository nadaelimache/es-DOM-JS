// Otteniamo riferimenti agli elementi HTML utilizzando il DOM
/**const lista = document.getElementById("lista");
const inputNuovaAttivita = document.getElementById("nuovaAttivita");
const bottoneAggiungi = document.getElementById("aggiungi");

// Aggiungiamo un gestore di eventi al pulsante "Aggiungi" per rispondere al clic
bottoneAggiungi.addEventListener("click", function() {
    const nuovaAttivita = inputNuovaAttivita.value;

    if (nuovaAttivita !== "") {
        // Creiamo un nuovo elemento li
        const nuovoElemento = document.createElement("li");
        nuovoElemento.textContent = nuovaAttivita;

        // Aggiungiamo il nuovo elemento alla lista
        lista.appendChild(nuovoElemento);

        // Puliamo l'input
        inputNuovaAttivita.value = "";
    }
}); */

/** prendo in considerazione gli elementi principali*/
  const newTaskInput = document.getElementById('nuovaAttivita')
  const button = document.getElementById('aggiungi')
  const list = document.getElementById('lista')
  
  button.addEventListener('click', function() {
  const inputValue = newTaskInput.value
  
  if (inputValue !== "") {
  const creoElemento = document.createElement('li');
  creoElemento.textContent = inputValue;
  list.appendChild(creoElemento);
  newTaskInput.value = "";
  }
  })
 






