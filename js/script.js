/** Esercizio
 * !Quali campi inserire nel form:
 * Una casella di testo per il form del passeggero x
 * Una casella numerica per i km                    x
 * Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65) x
 *??  NON E' NECESSARIA ALCUNA VALIDAZIONE ??
 * !Come calcolare  il prezzo: x
 * il prezzo del biglietto è definito in base ai km (0.21 € al km) 
 * va applicato uno sconto del 20% per i minorenni
 * va applicato uno sconto del 40% per gli over 65.
 * L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
 * Cosa stampare sul biglietto:
 * Nome passeggero
 * Codice treno (inseriamo una stringa a caso, per ora)
 * Numero carrozza (randomizziamo una carrozza da 1 a 12)
 * Prezzo (stampato con due decimali)
 * Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)
 * !Per la parte grafica x
 * x  Facciamola solo se tutto il resto della logica è funzionante, vi allego uno screen dell'esercizio fatto in classe senza stile e una da prendere come esempio per la parte visiva. Sentitevi liberi di personalizzare ulteriormente la grafica se vi va.
 * !Bonus X
 * Nascondiamo la sezione del biglietto se non è ancora stato generato il biglietto stesso.
 * Aggiungiamo una funzione che ci permetta di resettare i campi del form ai valori originali.
 */
// ? 1: Inizializzo elementi sezione form

var fullName = document.getElementById('full-name');
var kms = document.getElementById('kms');
var discountAge = document.getElementById('age');
var btnInsert = document.getElementById('btn-insert');
var btnReset = document.getElementById('btn-reset');



//? 2: Inizializzo elementi sezione ticket
var header = document.getElementById("sub-header");
var preview = document.getElementById("section-preview");
var passenger = document.getElementById("passenger");
var discount = document.getElementById("discount");
var car = document.getElementById("car");
var cap = document.getElementById("cap");
var result = document.getElementById("result");

//? 3: aggiungo listener event  al click del mio btn insert
btnInsert.addEventListener('click', function () {

    //** recupero i valori dal form */
    var valueName = fullName.value;
    var valueKms = kms.value;
    var valueDiscountAge = discountAge.value;

    //debug inline
    console.log(valueName);
    console.log(valueKms);
    console.log(valueDiscountAge);

    //** Calcolo il biglietto */

    var price = 0.21 * valueKms;
    var msgDiscount = 'tariffa ordinaria';
    var carRandom = Math.floor(Math.random() * 12) + 1;
    var capRandom = Math.floor(Math.random() * (100000 - 90000) + 90000);
    console.log(capRandom);

    if (valueDiscountAge === "under") {
        price -= (price * 20) / 100;
        msgDiscount = 'Tariffa minori -- sconto 20%';
    }

    if (valueDiscountAge === "over") {
        price -= (price * 40) / 100;
        msgDiscount = 'Tariffa over 65 -- sconto 40%';
    }
    //debug inline
    console.log(price, msgDiscount);

    price = "€ " + price.toFixed(2);


    //** Stampo gli inner text in html */
    passenger.innerText = valueName;
    discount.innerText = msgDiscount;
    car.innerText = carRandom;
    result.innerText = price;
    cap.innerText = capRandom;
    // ** Rendo visibile la sezione ticket in pagina  */
    preview.classList.remove('hidden');
    header.classList.remove('hidden');
});


//? 4: aggiungo listener event  al click del mio btn reset

btnReset.addEventListener("click", function () {
    fullName.value = "";
    discountAge.value = "adult";
    kms.value = "10";
    // ** Rendo nascosta la sezione ticket in pagina  */
    preview.classList.add('hidden');
    header.classList.add('hidden');
});