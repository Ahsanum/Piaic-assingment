let Name: string = "Ahsan Umer";

console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(toTitleCase(Name));

function toTitleCase(str: string):
string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
