const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;

// Removes randomization and provides consistent output.
utils.getWinner = jest.fn((player1, player2) => player1);


const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
assert.strictEqual(winner, 'Kent C. Dodds');

// Cleanup + reset of the original value.
utils.getWinner = originalGetWinner;
