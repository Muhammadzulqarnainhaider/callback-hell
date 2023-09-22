"use strict";
// array push----------------
let colors = ["orange", "green", "blue", "white", "black", "purple", "grey"];
colors.push("yellow");
console.log(colors);
// -------------------------------
// arrays pop--------------
// let colors=["orange","green","blue","white","black","purple","grey"]
let lastcolor = colors.pop();
console.log(colors);
// ---------------------------------
// array shift--------------
let firstcolors = colors.shift();
console.log(colors);
// ---------------------------------
let addcolor = colors.unshift("gelb");
console.log(colors);
// ---------------------------------
// arrays Concat---------
let languages = ["urdu", "hindi", "english", "german", "spanich"];
let locallanguages = ["punjabi", "pushto", "sindhi", "balochi"];
let combine = languages.concat(locallanguages);
console.log(combine);
// ---------------------------------
// Array join
let germanuniversities = ["charite", "uniklinik koln", "MHD", "uni of lubeck", "Heildelberg uni"];
let jointhem = germanuniversities.join("--");
console.log(jointhem);
// ---------------------------------
let counting = [1, 2, 3, 4, 5, 6, 7];
let number = counting.indexOf(4);
console.log(number);
