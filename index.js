
//  i am solve first 8 qustion 
// question 1
// Sum of Even Numbers: Write a function that takes an array of numbers
//  and returns the sum of all even numbers in the array.

// function evennumberfind(value) {
//     let sum = 0;    
//     value.forEach(element => {
//         if (element%2==0) {            
//             sum = element + sum;
//         } 
        
//     });
//     console.log(sum);
//     return sum;
// }
// let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let sum =  evennumberfind(number)
// console.log(sum);


// question 2
// Reverse a String: Write a function that reverses a string without using any built-in reverse methods

// function reverseString(str) {
    
//     var newString = "";

//     for (var i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; 
//     }
//     console.log(newString);
    
//     return newString; 
// }

// reverseString('hello');

// question 3
// Filter Adults: Write a function that takes an array of people (with name and age properties) and returns an array of names of people older than 18.
// let data = [   
//     {
//         name:'Ali',
//         age : 13,
//     },
//     {
//         name:'Shadab',
//         age : 17,
//     },
//     {
//         name:'Saqlain',
//         age : 20,
//     },
//     {
//         name:'Saqib',
//         age : 25,
//     },
//     {
//         name:'Sajjad',
//         age : 9,
//     },
//     {
//         name:'GhulamFaruq',
//         age : 14,
//     },
//     {
//         name:'Faizan',
//         age : 17,
//     },
//     {
//         name:'Fahd',
//         age : 21,
//     },
//     {
//         name:'Akmal',
//         age : 25,
//     },
//     {
//         name:'Kamran',
//         age : 20,
//     },
//     {
//         name:'Afzal',
//         age : 13,
//     },
//     {
//         name:'Adeel',
//         age : 18,
//     },
//     {
//         name:'Abid',
//         age : 21,
//     },
// ]

// function agecheek(params) {
//    console.log(params.age);
//   return params.age >= 18;  
// }
// let value = data.filter(agecheek);
// console.log(value);

// question 4
// Swap Variables: Write a function that swaps the values of two variables using ES6 destructuring syntax.
// let obj = {
//     a: 5,
//     b:10
// }
// let {a,b} = obj;
// let c = a;
// a= b;
// b= c;
// console.log(a);
// console.log(b);


// question 5 
// Add Greet Method: Write a function that adds a method greet() to an object representing a person, where greet() returns "Hello, my name is [name]".

// let name = prompt('Enter your name')

// if (confirm(`Hello your name is ${name}`) == false) {
//      name = prompt('Enter your name')
// }
// question 6
// Fetch Data: Write an asynchronous function that fetches data from a given URL and logs the result. Handle errors gracefully.
// let url = 'https://jsonplaceholder.typicode.com/users'
// async function fetchdata(params) {
//    try {
//     let data = await fetch(url);
//     let respone = await data.json()
//     console.log(respone);
    
//    } catch (error) {
//     console.log('some error',error);
    
//    }
// }
// fetchdata()

// qusetion 7

// DOM Manipulation: Write a function that adds a new paragraph element (<p>) with a given text inside a container with the id "containe
// solution
// let para = document.createElement('p');
// para.innerText= 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a'
// let container = document.getElementById('someadd')
// container.appendChild(para);


// question 8 
// Validate Number: Write a function that throws an error if the input is not a number.
// let input = prompt('Enter only Number');
// let arr = input.split('');
// console.log(arr);
// function result(value = "its is number") {
//     console.log(value);
// }

// arr.forEach(element => {
   
//    if (element == 0 || element == 1 || element == 2 ||element == 3 || element == 4 || element == 5 ||element == 6 || element == 7 || element == 8 ||element == 9  ) {
//         result()
//    }
//    else{
//     result(value='its is not number')
//    }
// });





































//  i am not solve question 1 and 9 and 10


//////////////////////////
// question 1
// Implement `debounce` Function
//  function  debounce(fun,delay) {
//   console.log(fun);
//    setTimeout(() => {
//     return ()=>{fun}
       
//    }, delay);
// }

// let log = debounce(()=>console.log('helo'),1000)

// console.log(log);

// question 2 
// 2. Deep Copy of Nested Objects and Arrays

// function deepClone(original) {
//    return original    
// }

// const original = { a: 1, b: { c: 2, d: [3, 4] } };
// console.log(original);

// const copy = deepClone(original);
// copy.a =2
// console.log(copy);


// question 3
// 3. Find the First Non-Repeating Character
// Example usage:

// function firstNonRepeatingChar(word) {

//    let str = word
//    let splittext = word.split('')
//    for (let index = 0; index < splittext.length; index++) {
//     const element = splittext[index];

    
//     let regex = new RegExp(element, 'g');
//     let result = word.match(regex);
//     if (result.length == 2) {
        
//     }
//     else{
//         console.log(false,element);
//         return (element,false);
//     }


//    }
// }


// console.log(firstNonRepeatingChar("aabbccd"));

// question 4
// 4. Custom `Promise.all` Implementation
// function customPromiseAll(params) {
//      return params.map((element)=>{
//         return element.then((e)=>e)
//      })
//     }
  
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
// let value =customPromiseAll([p1, p2, p3])
// value.forEach(element => {
//   element.then((e)=>{console.log(e);
//   })
  
// });

// question 5 
// 5. Throttling Function
// function throttle(delay,fun) {
//   let time = delay *1000
//   setTimeout(() => {
//    console.log('hello');
//     if (fun) {
//       fun()
//     }
//   }, time);
// }
// throttle(2,()=>{throttle(2)})

// Section 2: Algorithmic Challenges
// 6. Find Duplicates in an Array
// function findDuplicates(arr) {
//     const count = {};
//     const double = [];
  
//     arr.forEach((num) => {
//       if (!count[num]) {
//         count[num] = 1;
//       } else {
//         count[num]++;
//       }
//     });
  
//     for (const num in count) {
//       if (count[num] > 1) {
//         double.push(Number(num));
//       }
//     }
  
//     return double;
//   }
  
//   // Example usage:
//   console.log(findDuplicates([1, 2, 3, 4, 3, 2, 5,5])); // Output: [2, 3]


// 7. Implement `mergeSortedArrays`
// function mergeSortedArrays(num1,num2) {
//   let merge = num1.concat(num2)
//   let order= merge.sort()
//   return order;
// }

// // Example usage:
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// 8. Check for Palindrome Permutation
// function canFormPalindrome(str) {
//   let chect = str;
//   return chect == chect.split('').reverse().join('');
// }

// // Example usage:
// console.log(canFormPalindrome('civic')); // Output: true
// console.log(canFormPalindrome('madam')); // Output: true
// console.log(canFormPalindrome('hello')); // Output: false

// 9. Simulate API Calls with Random Delays
// function simulateApiCalls(urls) {
//   const delay = Math.floor((Math.random()*3)*1000)
//   console.log(delay);
  
//  return Promise.all(

//   urls.map(async (element)=>{
//       const respone =await fetch(element);
//       const data  = await respone.json();
//       if (respone.status == 200) {
//         return data
//       } else {
        
//       } 
//   })
//  )
  
// }

// const urls = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/todos', 'https://jsonplaceholder.typicode.com/photos'];
// simulateApiCalls(urls).then((e)=>{console.log(e);}).catch((error)=>{console.log(error);
// })

