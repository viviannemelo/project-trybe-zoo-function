// const { it } = require('node:test');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificar se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verificar se parâmetro é diferente de string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se retorna o número inteiro', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se Jefferson está incluso em names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se retorna uma string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se retorna um número maior ou igual a 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se retorna um array de dias da semana', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se quando não recebe argumento retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Verifica se passando por um objeto vazio, retorna uma string de mensagem de erro', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se uma string não contempla uma funcionalidade', () => {
    expect(handlerElephants('ahsjkddh')).toBe(null);
  });
});
