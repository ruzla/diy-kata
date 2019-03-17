const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.');
    expect(reachDestination(80, 120)).toBe('I should be there in 1 hour.');
    expect(reachDestination(69, 7)).toBe('I should be there in 10 hours.');
  });
});
