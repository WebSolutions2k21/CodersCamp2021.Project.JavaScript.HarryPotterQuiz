export function getNumberRandomArrayFunction(chosenNumber, ALL_RECORDS) {
  return () => {
    const randomNumber = chosenNumber[chosenNumber.length - 1];
    const arrayWithDifferentIndex = [randomNumber];
    while (arrayWithDifferentIndex.length < 3) {
      const candidateInt = Math.floor(Math.random() * ALL_RECORDS) + 1;
      if (arrayWithDifferentIndex.indexOf(candidateInt) === -1) {
        arrayWithDifferentIndex.push(candidateInt);
      }
    }
    return arrayWithDifferentIndex;
  };
}
