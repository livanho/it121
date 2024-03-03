// Livan Hagi Osman 03/02/2024

let userWord = prompt("Enter a word: ");
let vowels = ['a', 'e', 'i', 'o', 'u'];
let firstConsonants = [];
let array = userWord.toLowerCase().split("");
let wordConverted = "";

if (userWord == "") {
  console.log("Warning, you should enter a word");
} else if (vowels.includes(array[0])) { //if the first letter is a vowel
    wordConverted = array.join("") + "way"; //I convert the word by appending way to the end
  } else if (!vowels.includes(array[0])) { //if the first letter is a consonant
    firstConsonants.push(array[0]); // I store the consonant in the array to be use later
    if (!vowels.includes(array[1])) { //if the second letter is a consonant
    firstConsonants.push(array[1]) // I add the consonant to the consonants array
    wordConverted =
      array.join("") + firstConsonants.join("") + "ay"; // I convert the word by adding both f the consonants (converted in a string) and the string "ay"

    } else {
    wordConverted =
    array.join("") + firstConsonants.join("") + "ay";// I convenrt the word by adding the consonant and the string "ay"
    
    }
  }

console.log(wordConverted); //just to verifiy