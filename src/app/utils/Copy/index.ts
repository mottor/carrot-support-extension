export const Copy = (data: string = '') => {
  const el = document.createElement('textarea');
  el.value = data;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  chrome.extension.sendRequest({type: 'alert', title: 'Успешно!', message: 'Ссылка скопирована!'});
}