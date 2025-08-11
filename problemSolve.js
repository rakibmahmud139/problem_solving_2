// 1.Task: Array Filtering And Mapping

const persons = [
  { name: "Rakib", age: 20, gender: "male" },
  { name: "Rayhan", age: 19, gender: "male" },
  { name: "Afra", age: 20, gender: "female" },
  { name: "Saikat", age: 17, gender: "male" },
  { name: "Kahifa", age: 20, gender: "female" },
];

const getNames = (items) => {
  const personsName = items
    .filter((item) => item.gender === "male")
    .map((item) => item.name);

  return personsName;
};

const names = getNames(persons);

console.log(names);

//2.Task: Object Manipulation

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

const getBooksName = (items) => {
  const booksTitle = items.map((item) => item.title);

  return booksTitle;
};

const booksTitle = getBooksName(books);

console.log(booksTitle);

//3.Task: Function Composition

const getSquareNumber = (number) => {
  return number * number;
};

const getDoubleNumber = (number) => {
  return number * 2;
};

const getAddFive = (number) => {
  return number + 5;
};

const getSquareDoubleAddFive = (number) => {
  return getAddFive(getDoubleNumber(getSquareNumber(number)));
};

const finalResult = getSquareDoubleAddFive(10);
console.log(finalResult);

// 4.Task: Sorting Objects

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2016 },
  { make: "Ford", model: "Mustang", year: 2027 },
  { make: "Chevrolet", model: "Camaro", year: 2018 },
];

const getCarsSortByYear = (items) => {
  const sortedCar = items.sort((item1, item2) => item1.year - item2.year);

  return sortedCar;
};

const sortedCar = getCarsSortByYear(cars);
console.log(sortedCar);

//5.Task: Array Reduction

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const getSumOfAllNumber = (items) => {
  const sum = items.reduce(
    (acc, item) => (item % 2 === 0 ? acc + item : acc),
    0
  );

  return sum;
};

const sumOfAllNumber = getSumOfAllNumber(numbers);
console.log(sumOfAllNumber);
