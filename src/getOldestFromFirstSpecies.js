const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsible = employees.find((employeesId) => employeesId.id === id).responsibleFor[0];
  const findAnimal = species
    .find((animalId) => animalId.id === responsible).residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(findAnimal);
}

module.exports = getOldestFromFirstSpecies;
