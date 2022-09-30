// const { it } = require('node:test');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificar se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verificar se parâmetro é diferente de string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('teste', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('teste', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('teste', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('teste', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('teste', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('teste', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('teste', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('teste', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('teste', () => {
    expect(handlerElephants('ahsjkddh')).toBe(null);
  });
});
