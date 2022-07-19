// let name = ["Sanjay" ,"Aman","Rehaman", "Aman","Rahul" ];
// console.log(name);
// document.write(name , "<br> <br>");

// let a = name.indexOf("Aman");

// document.write(a , "<br></br>");

// let b = name.lastIndexOf("Aman");

// document.write(b , "<br></br>"); 

// let c = name.lastIndexOf("Aman", 2  );

// document.write(c , "<br></br>"); 

// // includes 

// let search = name.includes("Rahul") ;

// document.write(search , "<br></br>"); 
// let search1 = name.includes("praveen") ;
// document.write(search1 , "<br></br>"); 

// // some() & every 
// let ages = [10,18,8,20]; 

// let sm =  ages.some((age)=>{
//      return age >=25 ;
// });

// console.log(sm); 

// // every(); 
// let adult = [18,18,18,18]; 
// let every =  adult.every((chk)=>{
//      return chk >= 18 ;
// });

// console.log(every) ;

// // find(); 

// let ages2 = [8,10,18,20];

// let age = ages2.find((num)=>{
//   return num < 18 ;
// }) 

// console.log(age); 

// // findindex() 

// let age1 = ages2.findIndex((num)=>{
//     return num > 18 ;
//   }) 
// console.log(age1) 


// // toSting() ;

// let nm = 20 ;
//  let x = nm.toString();
// console.log(typeof(x));

// // fill();

// let s = ["praveen","ravi","sager"] ;

//   s.fill("pavan");
//   console.log(s);


//   // forEach() 

//   let f = ["praveen","ravi","sager"] ;

//    f.forEach((name,index)=>{
//     // return name ;  
//     // console.log(index , name);
//   })  


//  const employees = [
//    { name: "ujwal", age: 17 },
//    { name: "aniket", age: 18 },
//    { name: "navin", age: 40 },
//    { name: "shubhro", age: 12 },
//    { name: "audy", age: 25 },
//    { name: "bhakti", age: 45 }
// ];




//   employees.forEach((adult) => {
//    if (adult.age >= 18) {
//     console.log( `${adult.name}  ${adult.age} `);
//  }
//  }); 


// var obj = {
//    firstName : "praveen",
//    lastName : "Badiger",
//    Age : 30
// }

// for(let key in obj){

//    console.log(key , obj[key]);
// }


// map() 

// let ar = [1,2,3,4];
// let rs= ar.map((num)=>{
//  return num * 2 ;

// })
// console.log(ar);
// console.log(rs); 


//  const employees = [
//    { name: "ujwal", age: 17 },

//    { name: "navin", age: 40 },
//    { name: "shubhro", age: 12 },
//    { name: "audy", age: 25 },
//    { name: "bhakti", age: 45 } ,
//    { name: "aniket", age: 18 },
//  ];

//  let r = employees.find((adult)=>{

//    if(adult.age >= 18 ){
//     return `${adult.name} , ${adult.age} `;
//    }

//  });

//  console.log(r);


// let text = "praveen how are you doing " ;

// let ln =  text.length ;
// console.log(ln); 


// let text = "praveen how are you doing " ;

// let lCase =  text.toLocaleLowerCase() ;
// console.log(lCase); 
// let UCase =  text.toLocaleUpperCase() ;
// console.log(UCase); 

// let text = "praveen how are you doing"

// let include = text.includes("how");
// console.log(include); 

// let include1 = text.includes("HOW");

// console.log(include1); 

// startswith() ; 

// let str = "praveen how are you doing" ;

// let  strt = str.startsWith("praveen"); 

// console.log(strt); 


// let  end = str.endsWith("doing"); 

// console.log(end);

// let z = 10;

//   let nz = z.toFixed(2);
//   console.log(nz);

// DOM traversing 

// parentElement  parentNode 

// let inner = document.getElementById("inner").parentElement ;

//   inner.style.backgroundColor = "green"; 
//   console.log(inner); 



// let childC = document.getElementById("chield-c").parentElement ;

// childC.style.backgroundColor = "red";
// console.log(childC);

// Childern 
// childNodes

//  let childRn = document.getElementById("inner").children[1] ;

//  childRn.style.backgroundColor = "red";

//  console.log(childRn); 

//  let childnodes = document.getElementById("inner").childNodes[5] ;

//  childnodes.style.backgroundColor = "green";

//  console.log(childnodes); 

// first elementChild 

// let firstElementChild = document.getElementById("inner").firstElementChild ;

//  firstElementChild.style.backgroundColor = "green";

//   console.log(firstElementChild); 



// lastElementChild 

//  let lastElementChild = document.getElementById("inner").lastElementChild ;

//  lastElementChild.style.backgroundColor = "green";

//   console.log(lastElementChild);  


// let pTag =  document.createElement("p");

// let createTextNode = document.createTextNode("hello praveen how are you");

//  pTag.appendChild(createTextNode);

//  let divTest = document.querySelector("#test");

//  divTest.appendChild(pTag);

// console.log(pTag);
// remove chile 
// let newListElement = document.createElement("li");

// let target = document.getElementById("list");
// let neText = document.createTextNode("praveen");
// let oldElement = target.children[0]; 
// newListElement.appendChild(neText);

// target.replaceChild(newListElement,oldElement);
// console.log(newListElement);  



// remove chile 
// let newList = document.createElement("li");

// let target = document.getElementById("list");

// let oldElement = target.children[0]; 


// target.removeChild(oldElement);
// console.log(oldElement);

// let target = document.getElementById("list1").children[0];

// let copyElement = target.cloneNode(true);

// console.log(copyElement);

// document.getElementById("list2").appendChild(copyElement); 


// let authenticated = false ;

// authenticated ? console.log("SIGN OUT BUTTON") : console.log("LOGIN");

// console.log("2"-2); 

// function namastye (){
//   return "praveen";
// }

// let x = namastye() ;

// console.log(x);

// objects 

let person = {
  firstName: "Praveen",
  lastName: "Badiger",
  address: {
    city: "bengalore",
    state: "Karnatak"
  },
  hobbies: ["eat", "sleep", "code"],
  // methods in object
  fullname: function () {
    return this.firstName + " " + this.lastName;
  }

}


console.log(person.firstName);
console.log(person.lastName);
console.log(person.address);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.hobbies[0]);
console.log(person.fullname());


// array of object 


let employees = [
  {
    fName: "pavan",
    lNme: "Badiger"
  },
  {
    fname: "Pradeep",
    lName: "Pattar"
  },
  {
    fname: "Suraj",
    lName: "Solanke"
  }
]


console.log(employees);
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[0].fName);


for (let i = 1; i < employees.length; i++) {
  console.log(employees[i].fname);

}

// object destructuring  

let student = {
  studentId: 1,
  studentName: "praveen",
  student_class: "2nd",
}

const { studentId, studentName, student_class } = student;

console.log("studentId:", studentId);
console.log("studentName:", studentName)

// function diclaration  


function greet() {
  console.log("greet");
}
greet();

function Name(name) {
  return `Hello ${name}`;

}

console.log(Name("praveen Badiger"));


// function default parameters

function employee(f_name = "praveen", l_name = "Badiger") {
  return `${f_name}  ${l_name}`;

}

console.log(employee())
console.log(employee("Pradeep", "Pattar"))

//function expression

let sum = function (a, b) {
  return a + b;

}

console.log(sum(2, 4));

// IIFE immeditely invokable function expression 
(function () {
  console.log("IIFE function");
})();


(function (name) {
  console.log(name);
})("Raghu");

// local scope globle scope 

// factory functiom 

// factory function returns object 
function employeeDetails(fName, lName, designation) {
  return {
    fName: fName,
    lName: lName,
    designation: designation,
    getDetails: function () {
      return (`
      First Name : ${this.fName} 
      Last Name  : ${this.lName} 
      Designation: ${this.designation}`)
    }
  }
}

let employeeDetails_result = employeeDetails("Anand", "S", "Doctor");

let employeeDetails_result1 = employeeDetails("Praveen", "Badiger", "Engineer");
//console.log(employeeDetails_result)
console.log(employeeDetails_result.getDetails())
console.log(employeeDetails_result1.getDetails())

//constroctor function  

function employeeDetails2(fName, lName, designation) {

  this.fName = fName,
    this.lName = lName,
    this.designation = designation,
    this.getDetails = function () {
      return (`
      First Name : ${this.fName} 
      Last Name  : ${this.lName} 
      Designation: ${this.designation}`)
    }

}


let result_employeeDetails2 = new employeeDetails2("Sagar", "A", "Teacher")

console.log(result_employeeDetails2.getDetails());

let obj = {};
obj.name = "praveen";
obj.lname = "badiger";

console.log(obj.name);
console.log(obj.lname);


function objFunction(name, age) {
  obj1 = {}
  obj1.name = name;
  obj1.age = age;

  return obj1;
}

let y = objFunction("praveen", 20)

console.log(y.name + " " + y.age);


// Prototype and Prototypal Inheritance in Javascript 

function p_erson(name, city) {
  personObj = {}
  personObj.name = name;
  personObj.city = city
  // return personObj ;
}

p_erson.prototype.details = function () {

  return `${personObj.name} is from : ${personObj.city}`;

}

let personDetails = new p_erson("Aditya", "Mysore");

console.log(personDetails.details());



let preosn1 = {
  name: "praveen",
  city: "Bengalore",
  getDetails: function () {
    return `${this.name} is from : ${this.city}`;
  }
}

let person2 = {
  name: "pavan",
  __proto__: preosn1
}

console.log(preosn1.getDetails());
console.log(person2.getDetails());



// oops in javascrit 

class Person {
  constructor(fname, lname){
   this.fname = fname ; 
   this.lname = lname ;
 
  }
  get_Fullname(){
   return `Name : ${this.fname} ${this.lname}`
  }
 
 }
 
 class Customer extends Person {
  constructor(fname,lname,phone,city){
    super(fname,lname);
    this.phone = phone ;
    this.city = city ;
 
  }
 
 } 
 
 customer = new Customer("Praveen", "Badiger" , 8123420018 , "Bengalore");
 
 console.log(customer);
 console.log(customer.get_Fullname(),"Phone :",customer.phone,"City :", customer.city)
 

// Asynchronous javascript 
// callback 
console.log("befor");






// setTimeout(function(){
//  console.log("praveen");
// },2000);

getUser("praveen", function (fname) {
  last_Name("Badiger",function(lname){
   // console.log ("user full name is : ",fname , lname);
   cityName("Bengalore", function(city_Name){
      console.log(`user details: ${fname} ${lname} city : ${city_Name}`)
   })
  });
});
console.log("after");

function getUser(name, callBack) {
  setTimeout(function () {
  callBack(name);
  }, 2000)
}

function last_Name(last_Name,callBack){
  setTimeout(function(){
   callBack(last_Name);
  },2000)

} 

function cityName(cityName , callBack){
  setTimeout(function(){
   callBack(cityName);
  },2000)

}




// async & awite 

async function displayUser(){
  const user_Fname = await getUser1("Praveen") ;
  console.log(user_Fname);
}
displayUser();

function getUser1(name) {
 return name ;
  }

 fetch("data.json").then(function(reulst){
     return reulst.json();
 }).then(function(data){
   // console.log(data);
   for(user of data){
     console.log(user.name , user.age);
   }
 }).catch(function(err){
   console.log(err.message);

 })


async function getUserInfo(){
   try{
  const userData = await fetch("data.json");
  const userResult = await   userData.json();
  //console.log(userResult);
    for(user of userResult){
      console.log(user.name , user.age);
    }
  
  }catch(err){
       console.log(err);
   }
}

getUserInfo();



  // promises in javascript 
p = new Promise (function(resolve, reject){

   //resolve("praveen");
   reject (new Error("error occur"));
})
p.then(function(resolve){
   console.log(resolve);
}).catch(function(err){
  console.log(err);
});

 get_userName("pavan").then(function(usr){
  console.log(usr);
  //alert(usr);
}).catch(function(err){
 console.log(err);
})

  
function get_userName(name){
return new Promise(function(resolve, reject){
   setTimeout(function(){
     resolve(name);
     reject(new Error("err came"))
   },2000)
})}



// array methods 

let arr = [1,7,4,5,8,9,10] ;
console.log(arr);
// foreach 

arr.forEach((item)=>{
  console.log(item);
}) 

// include 

console.log(arr.includes(2)); 
console.log(arr.includes(7)); 

// filter 

let res_filter = arr.filter((item)=>{
  return (item < 7) ;

}) 

console.log(res_filter);
// map
let arr_map = arr.map((item)=>{
  return (item + 1 ) ;
}) 

 
console.log(arr_map);
// reduce    sum of an arry 

let res_reduce = arr.reduce((acumalator, current)=>{

  return (acumalator+current) ;

},0) 


console.log(res_reduce);

// some 

let res_some =  arr.some((item)=>{
   return (item > 4)

}) 

console.log(res_some); 

// every 

let res_every = arr.every((item)=>{
    return (item >= 1 );
})

console.log(res_every);

// sort 

// asending order 
console.log(arr);
let asc_Oreder =  arr.sort((a,b)=>{
    return ( a - b ) 
})
//console.log(arr);
console.log(asc_Oreder); 

let des_Oreder =  arr.sort((a,b)=>{
  return ( b - a ); 
}) 

console.log(des_Oreder); 

// Array.from 

const  name1 =  "Rajeev" ;
let res_1  = name1.split("")  
console.log(res_1)

console.log(typeof(res_1));

const res_from = Array.from(name1) ;
console.log(res_from); 

// Arry.of 

let arr1 = Array.of(1,2,3,4,5) ; 
console.log(arr1);

// join()

let res_join = res_from.join("");
console.log(res_join);

// toString();

let abc = 25 ;

console.log(typeof(abc));


 let zx = abc.toString();

 console.log(typeof(zx));

let names = ["Suresh", "Ravi" , "Suraj","Sager"] ;

//let nme = names.splice(names.length,0,"praveen");
  let nme   =  names.splice(1,1);
               names.splice(1,1,"Raghu");
console.log(names);

console.log(nme);


// slice 

let acb = ["cat","dog","cow","horse"];
console.log(acb);
let rty = acb.slice(0,2);
console.log(rty);

// max num 

// k = [14,1,5,2,3,7,6,9] ;
// let max = 0 ;

//  for(let i= 0 ; i < k.length ; i++){
//    if ( k[i] > max ); {
//     max  = k[i]; 
    
//    }
  
//   }

//   console.log(max); 

// Higher order function 

function x(){
  console.log("Namaste")
  
}

function z(x){
 return x();
}
 
z(x);


// readius of  circles 

const radius = [3,1,2,4];

 const calculateArea = function(radius){
   
    const output = [];
    for(let i=0 ; i < radius.length ; i++){ 

       output.push(Math.PI * radius[i] * radius[i]);

    }
   return output ;
 }

 console.log(calculateArea(radius)); 


 const  calculatecircumfarance = function (radius){

   const output = [] 
   for(let i = 0 ; i < radius.length ; i++){
   
      output.push(2*Math.PI * radius[i]) ;  
   }
    return output ;
 } 
 

 console.log(calculatecircumfarance(radius));


 const calculateDiameter= function () {
  const output = [] ;
  for(let i = 0 ; i < radius.length ; i++){
    output.push(2* radius[i]) ;  
 }
 return output ;
 } 

 console.log(calculateDiameter(radius));

//const radius = [3,1,2,4];

// DRY Principle 
const area = function (radius){
   return Math.PI * radius * radius;
} 

 const circumfarance = function (radius){
    return (2*Math.PI * radius);
 } 
 
 const diameter = function(radius){
    return (2*radius);
 }

let calculate = function(radius , logic){ 
  const output = [] ;
  for(let i = 0 ; i < radius.length ; i++){
        output.push(logic(radius[i]));
  }

 return output

}
console.log("Area Of circle : ",calculate(radius,area));
console.log("Curcomfarance Of Circle :",calculate(radius,circumfarance))
console.log("daimeter of the circle :", calculate(radius,diameter))


// lexical Scope 

function a(){
  var b = 10 ;
   function c(){
    console.log(b);
   }
   c();
} 

a();


// hoisting 

// var x = 7 ;
// function getName(){
//   console.log("Javascript");
// }

// getName()
// console.log(x);
 

// var cz = 12;
// console.log(cz); 


console.log(cz);
var cz = 12; 
//console.log(xc)

zxc();
function zxc(){
  console.log("Javascript hoisting");
} 

//console.log(cxz);

let cxz = function (){
  console.log("Javascript hoisting");
} 


// closuser 

function xz(){
  var b = 60 ;
  function ax(){
     var a = 7 ;
     function yz(){
        console.log(a,b);
     }
     yz();
  } 
  ax()
}

xz()

// object chaining 
// injavascript functions are also objects 
var objChaining = function() {
   this.i = 0 ;
   this.add1 = function(i){
     this.i += i ;
     return this ;

   };

   this.substract1 = function(i){
     this.i -= i ;
     return this ;

   } ;

    this.print = function(){
      console.log("Object Chaning :",this.i);
    }
}

var val =new objChaining();
val.add1(8).substract1(2).print();


var objChaining2 = function(){
  var i = 0 

    var add2 = function(j){
        i += j ;
      //  console.log(i);
        return this ;
    };
    var substract2 = function(j){
        i -= j ;
     //  console.log("test",i);
       return this ;
    };

    var print = function(){
     console.log("object chaning with private variable:",i);
       
    };

    return {add2,substract2,print};
}

var val2 =  objChaining2() ;
val2.add2(8).substract2(1).print();

class userDetails {
  constructor(userName,userEmail){
    this.userName = userName ;
    this.userEmail = userEmail ;
    this.score = 0 ;
    return this ;

  }

  login(){
    console.log(this.userEmail, "just logged in");
   // alert(this.userEmail);
      return this;
  }
  logout(){
    console.log(this.userEmail,"just logged out");
   //
    return this ;
  }
  updateScore(){
    this.score ++ ;
    console.log(this.userEmail, "score:" , this.score);
    return this ;
  }

  
} 

let userOne = new userDetails ("praveen","praveen@xyz.com");


userOne.login().updateScore().logout().updateScore().login().updateScore().logout().updateScore();












 



























