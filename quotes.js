var quotes = [
  'Fill your life with adventures, not things. Have stories to tell, not stuff to show.',
  'Be strong, be weak, be whoever you want to be.',
  'You are enough.',
  'Do more things that make you forget to check your phone.',
  'Be soft. Do not let the world make you hard. Do not let pain make you hate. Do not let the bitterness steal your sweetness. Take pride that even though the rest of the world may disagree, you still believe it to be a beautiful place. - Iain S. Thomas',
  'Act as if it were impossible to fail. - Dorothea Brande',
  'People wait all week for Friday, all year for summer, and all of life for happiness.',
  'Be the reason someone smiles today.',
  'Happiness looks good on you.',
  'The best view comes after the hardest climb.',
  'You were not born to just pay bills and die.',
  'Be who you needed when you were younger.',
  'Be a combination of all the best people you have ever met, not the worst.',
  'Stop being afraid of what could go wrong and start being positive about what could go right.',
  'A tiger does not lose sleep over the opinion of sheep.',
  'Be a Fruit Loop in a world of Cheerios.',
];

var quoteElement = document.getElementsByClassName('quote')[0];
var quotesLength = quotes.length;
function replaceQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.innerHTML = randomQuote;
}
replaceQuote();
window.onclick = replaceQuote;
