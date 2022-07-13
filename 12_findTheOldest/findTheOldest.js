const findTheOldest = function(peopleArr) {
  return peopleArr.reduce((obj, elem) => {
    if (!elem.yearOfDeath) {
      elem.yearOfDeath = new Date().getFullYear();
    }
    const age1 = elem.yearOfDeath - elem.yearOfBirth;
    const age2 = obj.yearOfDeath - obj.yearOfBirth;
    if (age1 < age2) {
      return obj;
    } 
    return elem;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
