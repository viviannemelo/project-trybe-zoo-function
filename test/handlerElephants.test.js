const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificar se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verificar se parâmetro é diferente de string', () => {
    expect(handlerElephants(0)).toBe('Valor inválido, é necessário uma string');
  });
});
