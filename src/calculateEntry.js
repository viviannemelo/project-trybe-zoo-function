const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// const entrants = [
//   { name:  'Lara Carvalho', age:  5 },
//   { name:  'Frederico Moreira', age:  5 },
//   { name:  'Pedro Henrique Carvalho', age:  5 },
//   { name:  'Maria Costa', age:  18 },
//   { name:  'Núbia Souza', age:  18 },
//   { name:  'Carlos Nogueira', age:  50 },
// ];

function countEntrants(entrants) {
  const qntChild = entrants.filter((entrada) => entrada.age < 18).length;
  const qntAdults = entrants.filter((entrada) => entrada.age >= 18 && entrada.age < 50).length;
  const qntSenior = entrants.filter((entrada) => entrada.age >= 50).length;
  const resultado = {
    child: qntChild,
    adult: qntAdults,
    senior: qntSenior,
  };
  return resultado;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const priceChild = countEntrants(entrants).child * prices.child;
  const priceAdult = countEntrants(entrants).adult * prices.adult;
  const priceSenior = countEntrants(entrants).senior * prices.senior;
  const total = priceChild + priceAdult + priceSenior;
  console.log(total);
  return total;
}

module.exports = { calculateEntry, countEntrants };
