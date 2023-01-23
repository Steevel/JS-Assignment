// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ["Indonesia", "India", "Jamaica", "Ethiopia", "Vietnam"];
const country = "Ethiopia";

if (countries.includes("Ethiopia")) {
  console.log(country.toUpperCase());
} else {
  countries.push(country);
  console.log(countries);
}
