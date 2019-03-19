const inputFinder = (): Promise<HTMLInputElement> => {
  return new Promise<HTMLInputElement> (resolve => {
    const intId: number = window.setInterval(() => {
      const inp: HTMLInputElement = document.querySelector('input[name="search"]') as HTMLInputElement;
      const dataTable: HTMLTableElement = document.querySelector('table');
  
      if (inp && dataTable) {
        const userEmail: string = (new URL(window.location.href).searchParams).get('user');
        inp.value = userEmail.slice(0 ,15); // потому что в инпут можно ввести только 15 символов
  
        clearInterval(intId);
  
        resolve(inp);
      }
    }, 500);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  inputFinder().then(inp => {
    const evt: Event = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    inp.dispatchEvent(evt);
  });
});