const changeDateFormat = (date) => {
  const arr = date.split(".");
  const formatedDate = arr[1] + "." + arr[0] + "." + arr[2];
  const newDate = new Date(formatedDate);

  const day = newDate.getDate();
  const year = newDate.getFullYear();
  let month = newDate.getMonth();
  let dayOfTheWeek = newDate.getDay();

  if (month === 0) {
    month = "янв";
  } else if (month === 1) {
    month = "февр";
  } else if (month === 2) {
    month = "март";
  } else if (month === 3) {
    month = "апр";
  } else if (month === 4) {
    month = "май";
  } else if (month === 5) {
    month = "июнь";
  } else if (month === 6) {
    month = "июль";
  } else if (month === 7) {
    month = "авг";
  } else if (month === 8) {
    month = "сент";
  } else if (month === 9) {
    month = "окт";
  } else if (month === 10) {
    month = "нояб";
  } else if (month === 11) {
    month = "дек";
  }

  if (dayOfTheWeek === 0) {
    dayOfTheWeek = "Вс";
  } else if (dayOfTheWeek === 1) {
    dayOfTheWeek = "Пн";
  } else if (dayOfTheWeek === 2) {
    dayOfTheWeek = "Вт";
  } else if (dayOfTheWeek === 3) {
    dayOfTheWeek = "Ср";
  } else if (dayOfTheWeek === 4) {
    dayOfTheWeek = "Чт";
  } else if (dayOfTheWeek === 5) {
    dayOfTheWeek = "Пт";
  } else if (dayOfTheWeek === 6) {
    dayOfTheWeek = "Сб";
  }

  return `${day} ${month} ${year}, ${dayOfTheWeek} `;
};

export default changeDateFormat;
