function checkDate() {
  const checkDay = document.cvForm.dia.value;
  const checkMonth = document.cvForm.checkMonth.value;
  const checkYear = document.cvForm.year.value;

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

const buttonSendForm = document.getElementById('button-enviar');

buttonSendForm.addEventListener('click', checkDate);
