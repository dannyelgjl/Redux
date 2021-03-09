import reducer from './index';

describe('Layout Reducer', () => {
  test('deve retorna o state inicial', () => {
    expect(reducer(undefined, {})).toEqual({ showMessage: false });
  });

  test('deve retorna o state com a props showMessage: true', () => {
    expect(reducer(undefined, { type: 'SHOW_MESSAGE' })).toEqual({ showMessage: true });
  });

  test('deve retorna o state com a props showMessage: false', () => {
    expect(reducer({ showMessage: true }, { type: 'HIDE_MESSAGE' })).toEqual({ showMessage: false });
  });
});