export const defineTypeSortText = (type: string) => {
  return (
    (type === 'people' && 'hight ') ||
    (type === 'starships' && 'length ') ||
    (type === 'vehicles' && 'length ') ||
    (type === 'films' && 'release date ') ||
    (type === 'species' && 'average height ') ||
    (type === 'planets' && 'diameter ')
  );
};
