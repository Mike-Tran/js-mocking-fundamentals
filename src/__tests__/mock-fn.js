const thumbWar = require('../thumb-war')
const utils = require('../utils')

describe('mocks-fn', () => {
  const originalGetWinner = utils.getWinner;
  beforeEach(() => {
    const originalGetWinner = utils.getWinner;
    utils.getWinner = jest.fn((p1, p2) => p1);
  });
  afterEach(()=> {
    utils.getWinner = originalGetWinner;
  });

  test('returns winner', () => {
    const winner = thumbWar('Michael Tran', "Ken Wheeler");

    expect(winner).toBe('Michael Tran');

  });

  test('number', () => {
    const winner = thumbWar('Michael Tran', "Ken Wheeler");

    // Ensuring that the getWinner function runs twice
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
  });

  test('write things at write time', () => {
    const winner = thumbWar('Michael Tran', "Ken Wheeler");
    // Ensuring that the getWinner function runs twice
    expect(utils.getWinner).toHaveBeenCalledWith('Michael Tran', "Ken Wheeler");
    expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Michael Tran', "Ken Wheeler")
    expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Michael Tran', "Ken Wheeler")
  });

  test('utils.getWinner call stack', () => {
    const winner = thumbWar('Michael Tran', "Ken Wheeler");

    expect(utils.getWinner.mock.calls).toEqual([ [ 'Michael Tran', 'Ken Wheeler' ],
      [ 'Michael Tran', 'Ken Wheeler' ] ]);
  });
});
