export const TableParse = (table: HTMLTableElement) => {
  const data = {};

  if (!table) return data;

  table.querySelectorAll('tr').forEach(el => {
    const key: string = el.querySelectorAll('td')[0].innerText.replace(/[^ a-zа-яё\d]/ui, '')
    const value: string = el.querySelectorAll('td')[1].innerText;

    data[key] = value;
  });

  return data;
}