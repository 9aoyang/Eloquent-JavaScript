// querySelector

// body 元素
let body = document.querySelector('body')
// ID 为“myDiv”的元素
let myDiv = document.querySelector('#myDiv')
// 类为 selected 的第一个元素
let selected = document.querySelector('.selected')
// 类为 button的第一个图像元素
let button = document.querySelector('img.button')



// querySelectorAll

// 取得某<div>中的所有<em>元素
let ems = document.getElementById('myDiv').querySelectorAll('em')
// 取得类为“selected”的所有元素
let selecteds = document.querySelectorAll('.selected')
// 取得所有<p>元素中的<strong>元素
let strongs = document.querySelectorAll('p strong')



