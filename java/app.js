let input=document.querySelectorAll("input");
let producttitle=document.querySelector(".producttitle");
let alltotal=document.querySelector(".total");
let add=document.querySelector('.added');
let button=document.querySelectorAll('button');

let craeteobject= () => {
    let newproduct = {
title:input[0].value,   
price:input[1].value,
    tax:input[2].value,
    discount:input[3].value,
    total:input[4].value,
    count:input[5].value,
    depatrment:input[6].value,
    };
    console.log(newproduct);
};
// console.log( newproduct);
