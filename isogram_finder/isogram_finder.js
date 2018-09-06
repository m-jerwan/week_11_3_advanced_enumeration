const IsogramFinder = function (word) {
    this.word = word;
}

// this.journeys.forEach((journey) => {
//     if (!uniqueModesOfTransport.includes(journey.transport)) {
//         uniqueModesOfTransport.push(journey.transport);
//     }
// })




IsogramFinder.prototype.isIsogram = function () {
    const wordAsLowCase =  this.word.toLowerCase();
    const wordAsArrayLowCase = wordAsLowCase.split('');

    let uniqueWordAsArrayLowCase = [];

    wordAsArrayLowCase.forEach((letter) =>{
        if (!uniqueWordAsArrayLowCase.includes(letter)){
            uniqueWordAsArrayLowCase.push(letter);
        }
    })
//  debugger
    let wordConstructedBack = wordAsArrayLowCase.join("");
    let uniqueWordConstructedBack = uniqueWordAsArrayLowCase.join("");


    if (wordConstructedBack == uniqueWordConstructedBack){
        return true;
    }
    return false;
}




module.exports = IsogramFinder;
