const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  const value = button.dataset.value;
  const action = button.dataset.action;

  button.addEventListener('click', () => {
    if (value !== undefined) {
      display.value += value;
    } else if (action === 'clear') {
      display.value = '';
    } else if (action === 'delete') {
      display.value = display.value.slice(0, -1);
    } else if (action === 'equals') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }
  });
});
