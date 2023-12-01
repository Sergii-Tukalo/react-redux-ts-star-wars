export const toUpperCaseFirstLetter = (word: string) => {
  return word.split('')[0].toUpperCase() + word.slice(1);
};
