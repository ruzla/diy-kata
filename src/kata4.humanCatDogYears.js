const humanCatDogYears = (number) => {
   
    let catYears = (number > 0 ? ((number > 1 ? 15 : '') + (number > 1 ? +9 : '') + (number > 2 ?  (number * 4) - 8 : '')): 0);
    let dogYears = (number > 0 ? ((number > 1 ? 15 : '') + (number > 1 ? +9 : '') + (number > 2 ?  (number * 5) - 10 : '')): 0);
    
    const years =[number, catYears, dogYears];
    
    return years;

}

module.exports = humanCatDogYears;
