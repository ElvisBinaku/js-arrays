const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(teacher => teacher.length >= 5 );
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
const searchTeacher = teachers.indexOf("Ed")
const deleteCount = 1
const removedTeacher = teachers.splice(searchTeacher, deleteCount)
console.log (`l'insegnante rimosso è ${removedTeacher}`)
console.log(`i nuovi insegnati sono ${teachers}`)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf("Luca");
console.log(isFabioPresent)
if (isFabioPresent > 0) {
  console.log("Si")
} else { 
  console.log("No")
}

const fabioPresente = teachers.indexOf("Nathan") === 0;
console.log(fabioPresente)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(", ");
console.log(teachersString)

const teachersStringSecond = `${teachers}`;
console.log(teachersString)
