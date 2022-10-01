const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se não recebe nenhum argumento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se retorna um erro ao passar os argumentos Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Verifica se retorna um erro ao passar os argumentos Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Verifica se retorna um erro ao passar os argumentos Wednesday e 09:00-AM', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se retorna um erro ao passar os argumentos Thu e 09:00-AM', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00-AM');
    }).toThrow();
  });
  it('Verifica se retorna um erro ao passar os argumentos Friday e 09:00-ZM', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrow();
  });
  it('Verifica se retorna um erro ao passar os argumentos Saturday e C9:00-AM', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow();
  });
  it('Verifica se retorna um erro ao passar os argumentos Sunday e 09:c0-AM', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrow();
  });
  it('Verifica se retorna um erro ao passar os argumentos Monday e 13:00-AM', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrow();
  });
  it('Verifica se retorna um erro ao passar os argumentos Tuesday e 09:60-AM', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:60-AM');
    }).toThrow();
  });
});
