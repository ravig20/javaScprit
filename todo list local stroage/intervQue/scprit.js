
// function createBase(x){
//     function addvalue(y){

//          return x + y;
//     }
//     return addvalue;

// }


// var addSix = createBase(6);
// addSix(21); // 26
// console.log(addSix(10));
 
//  Q: make this run only once

// let data ;
// function showdata() {
//     let count = 0;
//     return function(){
//         if (count === 0){
//             data = "hey is me";
//             console.log(data);
//             count++;


//         }

//     }
// }

// let callsec = showdata();
// callsec();
// callsec();
// callsec();
// callsec();
// callsec();
// callsec();
// callsec();
// callsec();
// callsec();
// callsec();
// callsec();


// let arr = [[1,2],[2,3,4],[5,6,2,[3,4,7]],[8,9,10]];
// console.log(arr.flat(1));