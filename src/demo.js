// let str = 'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com';
// console.log(getRectangleString(2, 3));

//  *            '┌────┐\n'+
//  *  (6,4) =>  '│    │\n'+
//  *            '│    │\n'+
//  *            '└────┘\n'
//  *
//  *  (2,2) =>  '┌┐\n'+
//  *            '└┘\n'
//  *
//  *             '┌──────────┐\n'+
//  *  (12,3) =>  '│          │\n'+
//  *             '└──────────┘\n'
//  *
//  */
// function getRectangleString(width, height) {
//   // throw new Error('Not implemented');
//   console.log('┌', '─────', '┐', '\/n\n');
//   console.log('│', '     ', '│', '\/n\n');
//   for(let i = 0;i<height; i++){
//     console.log('-'.repeat(width));
//   }
// }

// const str = 'hello!!!!!??#$%#$@#';
// console.log(encodeToRot13(str));


// var str = 'hello world';
// var result = regex.test(str);
// console.log(result);
// returns true

// function encodeToRot13(str) {
//   // throw new Error('Not implemented');
//   const array = [];
//   const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
//   str.split('').forEach((element) => {
//     if ((regex.test(element)) || (element === ' ')) {
//       array.push(element);
//     } else if (element === element.toUpperCase()) {
//       array.push(String.fromCharCode(((element.charCodeAt() - 65 + 13) % 26) + 65));
//     } else {
//       array.push(String.fromCharCode(((element.charCodeAt() - 97 + 13) % 26) + 97));
//     }
//   });
//   return array.join('');
// }
// const str = new String('test');


// console.log(getLinearEquationRoot(5, 10));

// function getLinearEquationRoot(a, b) {
//   // throw new Error('Not implemented');
//   if (b / a < 0) {
//     return -Math.sqrt(Math.abs(b / a));
//   }
//   // console.log(a, b);
//   return Math.sqrt(b / a);
//   // return -b / (2 * a);
// }
// console.log(generateOdds(5));

// function generateOdds(len) {
//   // throw new Error('Not implemented');
//   if (len === 0) return [];
//   const array = new Array(len);
//   // console.log(array);
//   let prevElement = -1;
//   return array.fill('').map(() => {
//     prevElement += 2;
//     return prevElement;
//   });
// }

// const arr = [
//   [  0, 1, 2, 3, 4 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]
// ]

// console.log(toCsvText(arr));

// function toCsvText(arr) {
//   console.log();
//   return arr.join('\n');
// }

// console.log(propagateItemsByPositionIndex([1,2,3]));

// function propagateItemsByPositionIndex(arr) {
//   // throw new Error('Not implemented');
//   return arr.map((element, index) => new Array(index + 1).fill(element)).flat();
// }
// const arr = [1, 2]

// console.log(get3TopItems(arr));

// function get3TopItems(arr) {
//   // throw new Error('Not implemented');
//   // if (arr.length === 0) return [];
//   // if (arr.length === 2) return arr.sort((a, b) => a - b).slice(2);
//   arr.sort((a, b) => b - a);
//   return arr.slice(0, 2);
// }
// const arr = [
//   { country: 'Russia', city: 'Moscow' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Warsaw' },
//   { country: 'Russia', city: 'Saint Petersburg' },
//   { country: 'Poland', city: 'Krakow' },
//   { country: 'Belarus', city: 'Brest' },
// ];

// console.log(sortCitiesArray(arr));

// function sortCitiesArray(arr) {
//   // throw new Error('Not implemented');
//   arr.sort((a, b) => {
//     if (a.country > b.country) return 1;
//     if (a.country < b.country) return -1;
//     if (a.city > b.city) return 1;
//     if (a.city < b.city) return -1
//       return 0;
//     });
//   return arr;
// }

// console.log(getIdentityMatrix(4));

// function getIdentityMatrix(n) {
//   // throw new Error('Not implemented');
//   const identityMatrix = new Array(n).fill('').map(() => new Array(n).fill(0));
//   identityMatrix.map((element, index) => {
//     const array = element;
//     array[index] = 1;
//     // console.log();
//     return array;
//   });
//   return identityMatrix;
// }
// const arr = [ 1, 2, 3, 4 ];
// console.log(swapHeadAndTail(arr));

// function swapHeadAndTail(arr) {
//   // throw new Error('Not implemented');
//   const lengtOftail = Math.floor(arr.length / 2);
//   if (arr.length % 2 === 0) return [...arr.slice(-lengtOftail), ...arr.slice(0, lengtOftail)];
//   return [...arr.slice(-lengtOftail), arr[lengtOftail], ...arr.slice(0, lengtOftail)];
// }

// Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
// "HH:mm:ss.sss"
// HH:mm:ss.sss – часы, минуты, секунды и миллисекунды.
// const startDate = new Date(2000,1,1,10,0,0);
// const endDate = new Date(2000,1,1,11,0,0);

// console.log(timeSpanToString(startDate, endDate));

// function timeSpanToString(startDate, endDate) {
//   // throw new Error('Not implemented');
//   const calculation = endDate - startDate;
//   const d = new Date(calculation);
//   const time = d.toTimeString().split(' ')[0];
//   let sss = d.getMilliseconds();
//   // console.log(d.getHours());
//   if(sss.toString.length === 1) sss = '00' + sss;
//   if(sss.toString.length === 2) sss = '00' + sss;
//   return `${time}.${sss}`;
// }
// const Circle = function Circle(radius) {
//       this.radius = radius;
//     };

//     Circle.prototype.getCircumference = function getCircumference() {
//       return 2 * Math.PI * this.radius;
//     };

// const object = {
//   proto: Circle.prototype,
//   json: '{ "radius":10 }',
//   expected: new Circle(10),
// }

// console.log(fromJSON(object.proto, object.json));

// function fromJSON(proto, json) {
//   // throw new Error('Not implemented');
//   const values = JSON.parse(json, function(key, value) {

//     return value;
//   });
//   // return new Circle(12);
//   return proto;
// }

// console.log(fromJSON(object.proto, object.json).getCircumference());
