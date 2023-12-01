export const changeSort = (postQuery: string) => {
  let getAllOptions: NodeListOf<HTMLOptionElement> =
    document.querySelectorAll('option');
  for (let i = 0; i < getAllOptions.length; i++) {
    let item = getAllOptions[i] as HTMLOptionElement;
    if (item.value === postQuery) {
      item.selected = true;
    }
  }
};
