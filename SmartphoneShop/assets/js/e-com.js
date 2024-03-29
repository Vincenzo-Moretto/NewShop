/* /* <!-- Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML:

  ES.1: Inserisci un tag h1 con il nome del tuo negozio

  ES.2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio

  ES.3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo

  ES.4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente

  ES.5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio

  ES.6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire
  nessuna "vera" funzionalità di post/salvataggio!)
  
  
  Il resto delle risposte deve essere scritto in JavaScript:
  
  
  ES.7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

  ES.8: Scrivi una funzione per cambiare il colore di background della pagina

  ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio

  ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

  ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

  ES.12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata --> */

function newH1() {
  let newH1 = document.getElementById("h1");
  newH1.innerHTML = "ShopDaVin";
}
function newBg() {
  let newBg = document.body;
  newBg.style.backgroundColor = "gray";
}

function newFooter() {
  let newFooter = document.getElementById("address");
  newFooter.innerHTML = "72023 Mesangeles, Brindisi Italy";
}
function newCss() {
  let arrayNewCss = document.querySelectorAll("a");
  for (let i = 0; i < arrayNewCss.length; i++) {
    const element = arrayNewCss[i];
    element.classList.add("aggiunta");
  }
}

/* function newImg() {
  let newImg = document.querySelectorAll("img");
  for (let i = 0; i < newImg.length; i++) {
    const element = newImg[i];
    element.classList.toggle("visibility");
  }
} */
function newImg() {
  let arrayNewImg = document.querySelectorAll("img");
  for (let i = 0; i < arrayNewImg.length; i++) {
    const element = arrayNewImg[i * 2];
    element.classList.toggle("visibility");
  }
}

function newPrezzo() {
  let arrayNewPrez = document.querySelectorAll("td.prezzo span");
  for (let i = 0; i < arrayNewPrez.length; i++) {
    const element = arrayNewPrez[i];
    element.classList.add("prezzo2");
    element.innerHTML = "1.800 €";
  }
}
