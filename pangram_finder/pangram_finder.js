const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function() {
  const phraseTolowCase = this.phrase.toLowerCase();
  const sentenceAsArray = phraseTolowCase.split('');
  const result  = this.alphabet.every((letter) =>{
  return sentenceAsArray.includes(letter);
  })
  return result;
}

module.exports = PangramFinder;
