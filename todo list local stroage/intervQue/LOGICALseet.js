// // hide or show the button
// function hideShowElement(el) {

//     if (el.style.display === "none") {
//         el.style.display = "block";
//       } else {
//         el.style.display = "none";
//       }



// //================================= Add event to delete some elements
// function addDeleteEvent(button) {
//     button.addEventListener("click", function(event) {
//       console.log(event.target.parentNode.parentNode.parentNode); //button's grandma is TR
//       movieTable.removeChild(event.target.parentNode.parentNode);
//       //console.log("movietabel :" + movieTable.childNodes[1].nodeName)
//     });

// //================================ IIFE

// (function(){
//   //code 
// })();
//================================ closures
// function closures(x){
//   console.log(x);
//   return function(y){
//     console.log(y);
//     return x + y;

//   }

// }
// closures(4)(5);
// // console.log(closures(4)(5));
// //=============================== prototype
// const obj = {
//   a: "data",
//   b: function(){
//     return this.a;
//   }
// }
// const obj2 ={
//   c: "data2",

// }
// obj2.prototype = obj1;
//=================================================================
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((arr)=> arr+1)
// obj.keys()
// obj.values()
// for (let i=0; i<arr.length; i++);
// for (let i  in dtata);
// for (let i of dtata);
// arr.map(()=> dtata)
//===================================================================== reverse string
// let string = "lorem ipsum dolor sit amet, consectetur adip";

// console.log(string.split("").reverse().join(""));


//=============================== callbacks function =============================
// function func(callbacks) {
//     console.log("datat")
//     callbacks()
// }
// function func2(){
//     console.log("callbacks function here")
// }
// func(func2);

// function func(a, callbacks ){
//     console.log(a);
//     callbacks();

// }

// func(10, function(){
//     console.log("callbacks function here")
// })

//=============================== differance between ================================
// console.log(foo)
//  var foo = function(){
//     console.log("this is foo function");
// }
//=====================================  bind ====================================================

// function fullName() {
//     return "Hello, this is " + this.first + " " + this.last;
//   }
  
//   console.log(fullName()); // => Hello this is undefined undefined
  
//   // create a person object and pass its values to the fullName function
//   var person = {first: "Foo", last: "Bar"};
//   let func = fullName.bind(person);
//   console.log(func()); // => Hello this is Foo Bar
// console.log(fullName.bind(person)());

// let obj1 = {
//   first: "Foo",
//   last: "Bar",
//   func(a){
//     return this.first + a;
//   }
// };
// let obj2 = {first: "FOO2"}
// let data = obj1.func.bind(obj2)
// console.log(data(1))



//================================ prototype

// function fullName(){
//   this.name = "";
//   this.func = function(){
//     return this.name;
//   }
// }
// function func2(){
//   this.name = "ravi"
// }
// let fun1 = new fullName();
// func2.prototype = fun1;
// let fun2 = new func2();

// let obj1 = {
//       first: "Foo",
//       last: "Bar",
//       func(a){
//         return this.first + a;
//     }
// };
// let obj2 = {first: "FOO2" , name: "ravi"};
// obj1.prototype = obj2;

// let students = [
//     {name: "ravi",age:10},
//     {name: "ram",age:70},
//     {name: "hanuman",age:25},
// ]
// let age = students.filter((student)=>{
//     return student.age >10 
// }
// )

// console.log(age);
// function local(){
//     var a = "student";
// }
// console.log(a);
// local();