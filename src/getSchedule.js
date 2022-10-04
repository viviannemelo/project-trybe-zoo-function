// const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfWeek = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Tuesday')).map((e) => e.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Wednesday')).map((e) => e.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Thursday')).map((e) => e.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Friday')).map((e) => e.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Saturday')).map((e) => e.name),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Sunday')).map((e) => e.name),
  },
};

function getSchedule(scheduleTarget = 0) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (data.species.find((especie) => especie.name === scheduleTarget)) {
    return data.species.find((nameOfSpecies) => nameOfSpecies.name === scheduleTarget).availability;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    const daysOpen = {};
    daysOpen[scheduleTarget] = {
      officeHour: `Open from ${data.hours[scheduleTarget].open}am until ${
        data.hours[scheduleTarget].close}pm`,
      exhibition: data.species.filter((dayOfEachAnimal) =>
        dayOfEachAnimal.availability.includes(scheduleTarget))
        .map((dayOfEachAnimal) => dayOfEachAnimal.name),
    };
    return daysOpen;
  }
  return daysOfWeek;
}
// console.log(getSchedule('lions'));
// console.log(getSchedule('Sunday'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule());
module.exports = getSchedule;
