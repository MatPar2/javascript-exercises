const getTheTitles = function(booksArr) {
  return booksArr.reduce((arr, elem) => {
    return arr.concat(elem.title);
  }, []);
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
