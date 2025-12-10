// ================================
// ESERCIZI LIVELLO 1
// ================================

// ---------- Esercizio A ----------
/*
  Data la lista:

  const courses = ["HTML", "CSS", "JavaScript", "React", "PHP", "Node"];

  1. Crea un nuovo array contenente solo i corsi con più di 3 lettere.
  2. Trasforma tutti i corsi in minuscolo.
  3. Ordina alfabeticamente.
  4. Unisci tutto in una stringa separata da " | ".
*/
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Node']
console.log(courses)

// nuovo array contenente solo i corsi con più di 3 lettere.
const threeWords = courses.filter(elements => elements.length > 3);
console.log(threeWords);

//tutti i corsi in minuscolo.


//Ordina alfabeticamente.
const orderedCourses = courses.sort();
console.log(orderedCourses);

//tutto in una stringa separata da " | ".
const joinedCourses = courses.join(" | ");
console.log(joinedCourses);


// ---------- Esercizio B ----------
/*
  Dato:

  const numbers = [3, 5, 10, 7, 2, 8];

  1. Crea un array con solo i numeri pari.
  2. Calcola la somma dei numeri con reduce().
  3. Trova il numero più grande senza usare Math.max().
  4. Moltiplica tutti i numeri × 3 usando map().
*/
const numbers = [3, 5, 10, 7, 2, 8];



// ================================
// ESERCIZI LIVELLO 2
// ================================

// ---------- Esercizio C ----------
/*
  Hai una lista di studenti:

  const students = [
    { name: "Marco", age: 20 },
    { name: "Laura", age: 17 },
    { name: "Gianni", age: 22 },
    { name: "Sofia", age: 16 }
  ];

  1. Crea un array con solo i nomi.
  2. Filtra solo gli studenti maggiorenni.
  3. Trova lo studente più giovane.
  4. Ordina gli studenti per età crescente.
  5. Crea una frase tipo: "Gli studenti maggiorenni sono: Marco, Gianni"
*/
const students = [
  { name: "Marco", age: 20 },
  { name: "Laura", age: 17 },
  { name: "Gianni", age: 22 },
  { name: "Sofia", age: 16 }
];



// ---------- Esercizio D ----------
/*
  Hai una lista di prezzi:

  const prices = [10, 50, 30, 100, 25];

  1. Calcola la media dei prezzi.
  2. Aggiungi IVA 22% a tutti i prezzi.
  3. Sconta del 20% solo i prezzi sopra i 40€.
  4. Trova il prezzo più basso e il più alto.
*/
const prices = [10, 50, 30, 100, 25];



// ================================
// ESERCIZI LIVELLO 3 (DIFFICILI)
// ================================

// ---------- Esercizio E ----------
/*
  Dato un array di parole:

  const words = ["boolean", "academy", "javascript", "front-end", "developer"];

  1. Crea un nuovo array contenente la lunghezza di ogni parola.
  2. Trova la parola più lunga.
  3. Trasforma ogni parola in: "BOOLEAN (7 letters)"
  4. Filtra solo le parole che contengono la lettera "a".
  5. Concatena tutte le parole in una stringa tipo:
     "boolean - academy - javascript - front-end - developer"
*/
const words = ["boolean", "academy", "javascript", "front-end", "developer"];



// ---------- Esercizio F (Challenge) ----------
/*
  Dato:

  const people = [
    { name: "Luca", salary: 1200 },
    { name: "Anna", salary: 1800 },
    { name: "Marco", salary: 1600 },
    { name: "Sara", salary: 2200 }
  ];

  1. Calcola la somma di tutti gli stipendi.
  2. Trova chi guadagna di più.
  3. Aggiungi +10% allo stipendio solo di chi guadagna meno di 1800€.
  4. Crea la frase: "Sara è quella che guadagna di più con 2200€".
  5. Trasforma tutto in un oggetto:
     {
       Luca: 1200,
       Anna: 1800,
       Marco: 1600,
       Sara: 2200
     }
*/
const people = [
  { name: "Luca", salary: 1200 },
  { name: "Anna", salary: 1800 },
  { name: "Marco", salary: 1600 },
  { name: "Sara", salary: 2200 }
];


// ================================
// FINE ESERCIZI
// Buon allenamento 💪🔥
// ================================