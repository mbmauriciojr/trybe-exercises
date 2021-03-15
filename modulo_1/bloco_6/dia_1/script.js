function checkDate() {
  const checkDay = parseInt(document.getElementById('input-day'));
  const checkMonth = parseInt(document.getElementById('input-month'));
  const checkYear = parseInt(document.getElementById('input-year'));

  if (checkDay < 0 && checkDay > 31) {
    return 'Formato de dia inválido';
  }
  if (checkMonth <= 0 && checkMonth > 12) {
    return 'Formato de mês inválido';
  }
  if (checkYear < 0) {
    return 'Formato de ano inválido';
  }
}

const buttonSendForm = getElementById('button-enviar');

buttonSendForm.addEventListener('click', checkDate);
