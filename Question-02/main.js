var personName = "John Doe";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
