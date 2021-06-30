const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const TutWordArrays = tutorials.map(tutorial => tutorial.split(' '));
TutWordArrays

// I want to call .map on each wordArray in TutWordArrays and do element[0].toUpperCase

const FirstWordArrayCapped = TutWordArrays[0].map(word => word[0].toUpperCase()+ word.substring(1))

FirstWordArrayCapped.join(" ")

//^^^This code is the .map method to use WITHIN a .map method that is looping through the TutWordArrays

const titleCasedWordArrays = TutWordArrays.map(wordArray => wordArray.map(word => word[0].toUpperCase()+ word.substring(1)))

function titleCased() {
  return titleCasedWordArrays.map(wordArray => wordArray.join(" "))
}
