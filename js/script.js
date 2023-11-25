const arr = [
  {
    name: "mariam",
    age: 18,
  },
  {
    name: "mariam",
    age: 18,
  },
  {
    name: "mariam",
    age: 18,
  },
];

arr.forEach((el) => {
  const { name, age } = el;
  console.log(name, age);
});
