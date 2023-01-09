//  Sort Data
const array = [
  {
    name: "vali",
    age: 12,
    address: "Qoqon",
  },
  {
    name: "hali",
    age: 39,
    address: "toshkent",
  },
  {
    name: "gali",
    age: 32,
    address: "Buxara",
  },
  {
    name: "ali",
    age: 33,
    address: "xiva",
  },
];
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

console.log(array.sort(compare));
