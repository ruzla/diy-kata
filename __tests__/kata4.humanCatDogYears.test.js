const { humanCatDogYears } = require('../src');

describe('Convert human years to cat and dog', () => {
    it ('human, cat and dog years', () => {
        expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
    
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    
        expect(humanCatDogYears(15)).toEqual([15, 76, 89]);

        expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    });    
})
// Look Ma, no handlebars!!!
