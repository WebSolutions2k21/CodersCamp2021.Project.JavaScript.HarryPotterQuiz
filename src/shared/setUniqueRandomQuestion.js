import randomNumberOfIndex from '../shared/randomIndexGenerator';

export function setUniqueRandomQuestion(ALL_RECORDS, chosenNumber) {
  return () => {
    let newNumber = randomNumberOfIndex(ALL_RECORDS);

    while (chosenNumber.includes(newNumber)) {
      newNumber = randomNumberOfIndex(ALL_RECORDS);
    }

    chosenNumber.push(newNumber);
    return newNumber;
  };
}
