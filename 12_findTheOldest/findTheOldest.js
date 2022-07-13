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

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
