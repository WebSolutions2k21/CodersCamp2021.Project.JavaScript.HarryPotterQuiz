function randomNumberOfIndex(max) {
  const generateIndex = () => Math.floor(Math.random() * max + 1);

  const numberIndex = generateIndex();

  return numberIndex;
}
export default randomNumberOfIndex;

