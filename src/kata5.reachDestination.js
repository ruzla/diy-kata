const reachDestination = (distance, speed) => {
    const time = Math.ceil(distance/speed * 2)/ 2;
    
    if (time === 1) {
        return (`I should be there in ${time} hour.`); 
    } else
      return (`I should be there in ${time} hours.`);
}

module.exports = reachDestination;
