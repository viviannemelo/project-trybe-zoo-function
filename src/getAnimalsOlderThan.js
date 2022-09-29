const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const spec = species.find((especie) => especie.name === animal);
  // console.log(spec);
  return spec.residents.every((especie) => especie.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
