//fetching how many elements are present by using tag name
console.log(document.getElementsByTagName("h1"));

// Fetch By Using Tagname
var jo = document.getElementsByTagName("h1");
console.log(jo[0]);

// Fetch By Using Id
var jo2 = document.getElementById('joy');
console.log(jo2);

// Classname and changing the content of the class name

console.log(document.getElementsByClassName("jothy"));
var jo1 = document.getElementsByClassName("jothy");
console.log(jo1[0].type);
console.log(jo1[0].placeholder);
console.log(jo1[0].placeholder="value changed");
console.log(jo1[0].placeholder);

