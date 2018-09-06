const AnagramFinder = function (word) {
    this.word = word;

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const wordAsArray = word.split("");
    const resultOfFilter = otherWords.filter((otherWord)=> {
        const resultOfEvery = wordAsArray.every((letter) =>{
            return otherWord.include(letter);
        })
        return resultOfEvery;
    })
    return resultOfFilter;
}

module.exports = AnagramFinder;
