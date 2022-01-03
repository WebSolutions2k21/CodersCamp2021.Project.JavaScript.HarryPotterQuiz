export function getNumberRandomAndShuffleOtherNumberFunction(chosenNumber, ALL_RECORDS) {
  return () => {
    let randomNumber = chosenNumber[chosenNumber.length - 1];
    let arrayWithDifferentIndex = [randomNumber];
    while (arrayWithDifferentIndex.length < 3) {
      var candidateInt = Math.floor(Math.random() * ALL_RECORDS) + 1;
      if (arrayWithDifferentIndex.indexOf(candidateInt) === -1) arrayWithDifferentIndex.push(candidateInt);
    }
    return arrayWithDifferentIndex;
  };
}
