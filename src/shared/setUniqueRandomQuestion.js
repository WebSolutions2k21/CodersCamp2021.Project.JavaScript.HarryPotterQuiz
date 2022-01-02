import randomNumberOfIndex from '../shared/randomIndexGenerator';

export function setUniqueRandomQuestion(ALL_RECORDS, chosenNumber) {
  return () => {
    let newNumber = randomNumberOfIndex(ALL_RECORDS);
    console.log('new number', newNumber);

    while (chosenNumber.includes(newNumber)) {
      console.log('nowy numer', newNumber, chosenNumber);
      newNumber = randomNumberOfIndex(ALL_RECORDS);
    }
    console.log('tablica', chosenNumber);
    chosenNumber.push(newNumber);
    console.log('tablica', chosenNumber);
    return newNumber;
  };
}
