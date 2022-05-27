[]  // list of values or objects

var fruits = ["apple","pineapple","cherry","strwberry"];
console.log(friuts);

fruits.length; // number of elements, we start with 0

var moreFruits = fruits.push("grapes");
var last = fruits.pop("grapes");

var newLength = fruits.unshift("grapes"); // add element zt the beginning

var eraseFruit = fruits.shift("grapes"); // erase element at the beginning

var position = fruits.indexOf("cherry");


var articles = [
    {name: "Bici", price: 3000},
    {name: "Tv", price: 2500},
    {name: "Book", price: 320},
    {name: "CellPhone", price: 10000},
    {name: "Laptop", price: 20000},
    {name: "Keyboard", price: 500},
    {name: "earphones", price: 1700}
];

var filter = articles.filter(function(article){
    return article.price <=500
});


var nameArticles = articles.map(function(article){
    return article.name
});


var findArticle = articles.find(function(article){
    return article.name === "Laptop"
});


articles.forEach(function(article){
    console.log(article.name);
});

var cheapArticles = articles.some(function(article){
    return article.price <= 700;
});