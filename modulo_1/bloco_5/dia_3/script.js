function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1

function createCalendar() {
  let numberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysMonthList = document.querySelector('#days');

  for (index = 0; index < numberDays.length; index += 1) {
    let daysMonth = numberDays[index];
    let daysList = document.createElement('li');
    

    if (daysMonth === 24 | daysMonth === 31) {
      daysList.className = 'day holiday';
      daysList.innerHTML = daysMonth;
      daysMonthList.appendChild(daysList);
    } if (daysMonth === 4 || daysMonth === 11 || daysMonth === 18) {
      daysList.className = 'day friday';
      daysList.innerHTML = daysMonth;
      daysMonthList.appendChild(daysList);
    } if (daysMonth === 25) {
      daysList.className = 'day holiday friday';
      daysList.innerHTML = daysMonth;
      daysMonthList.appendChild(daysList);
    } else {
      daysList.className = 'day';
      daysList.innerHTML = daysMonth;
      daysMonthList.appendChild(daysList);
    }
    
  }
}

createCalendar();

// Exercício 2

function holidaysCreate(feriados) {
  let divButton = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  buttonHoliday.innerHTML = 'Feriados'

  buttonHoliday.id = 'btn-holiday';
  divButton.appendChild(buttonHoliday);
}

holidaysCreate();

// Exercício 3

function buttonHolidayClick(){
  let actionButton = document.querySelector('#btn-holiday');
  let holidayDays = document.querySelectorAll('.holiday');
  let backgroundColorChange = 'red';
  let normalcolor = 'white';

  actionButton.addEventListener('click', function() {
    for (let index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor === normalcolor) {
        holidayDays[index].style.backgroundColor = backgroundColorChange;
      } else {
        holidayDays[index].style.backgroundColor = normalcolor;
      }
    }
  })
};

buttonHolidayClick();

  