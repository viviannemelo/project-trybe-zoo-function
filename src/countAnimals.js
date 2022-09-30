// const { count } = require('console');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const todosAnimais = {};
    species.forEach((specie) => {
      todosAnimais[specie.name] = specie.residents.length;
    });
    return todosAnimais;
  }
  if (typeof animal === 'object' && animal.sex !== undefined) {
    return data.species.find((qntAnimais) => qntAnimais.name === animal.specie).residents
      .filter((genero) => genero.sex === animal.sex).length;
  } if (animal) {
    return data.species.find((qntAnimais) => qntAnimais.name === animal.specie).residents.length;
  }
}
console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes' }));
// console.log(countAnimals({ specie: 'lions', sex: 'male' }));
module.exports = countAnimals;
