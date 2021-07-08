/** Esercizio
 * !Quali campi inserire nel form:
 * Una casella di testo per il form del passeggero x
 * Una casella numerica per i km                    x
 * Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65) x
 *?  NON E' NECESSARIA ALCUNA VALIDAZIONE
 * !Come calcolare  il prezzo:
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
 * !Bonus
 * Nascondiamo la sezione del biglietto se non è ancora stato generato il biglietto stesso.
 * Aggiungiamo una funzione che ci permetta di resettare i campi del form ai valori originali.
 */
// ? 1: Inizializzo elementi sezione form
var fullName= document.getElementById('fullName');
var kms=document.getElementById('kms');
var dicountAge=document.getElementById('age');
var btnInsert=document.getElementById('btn-insert');
var btnReset=document.getElementById('btn-reset');



//? 2: Inizializzo elementi sezione ticket
var passenger=document.getElementById("passenger");
var discount=document.getElementById("discount");
var car=document.getElementById("car");
var car=document.getElementById("cap");
var result=document.getElementById("result");

//? 3: aggiungo listener event  al click del mio btn
btnInsert.addEventListener('click',function(){

//** recupero i valori dal form */












});