//1.program that pushes the vowels into an empty array

const alpha=["a",,"b","e","g","d","i","h","j","o","k","l","u",""]
document.getElementById("alphabets").innerHTML= ` aray values are => ${alpha}`;
let onlyVowels = [];
let nonVowels =[];
let vowelString = "aeiou";
for(let letters of alpha){
    if (vowelString.includes(letters)){
        onlyVowels.push(letters)
    }
    else{
        nonVowels.push(letters)
    }
}
// console.log(onlyVowels);
// console.log(nonVowels);
document.getElementById("vowels").innerHTML=`Vowels in an existing array is    ${onlyVowels}`;
document.getElementById("non-vowels").innerHTML = `non vowels values in array is ${nonVowels}`



//2.program to separate positive and negative numbers from the array.
const numbers=[1,2,3,-4,2,-5,-7,9,-20,11,8,-9,-8];
let nagValues = [];
let posValues = [];
for (let num1 of numbers){
    if(num1<0){
        nagValues.push(num1);
    }else 
            posValues.push(num1);  
}
document.getElementById("nag-valu").innerHTML =` Nagitive vakue in array is ${ nagValues}`;
document.getElementById("pos-val").innerHTML = `positive value in array is ${posValues}`;
document.getElementById("num").innerHTML = `numbers in array is ${numbers}`;


//3.program that filters that even  or odd numbers from the array 

const num2 = [1,2,3,4,5,6,7,8,9,12,11,13,14,15,16,17,18,19,20,21,22,23];
let evenValue =[];
let oddValue = [];   

for(let nums of num2){
    if(nums%2===0){
        evenValue.push(nums);
    }else{
        oddValue.push(nums);
    }
}
// console.log(evenValue);
// console.log(oddValue);
document.getElementById("evenNum").innerHTML=`Even numbers in a given array are ${evenValue}`;
document.getElementById("oddNum").innerHTML=`Odd numbers in a give array are${oddValue}`;         



//4. program to find how many elements exist in the array
 const array1=[1,2,3,"ram",76,"Rambabu",44,67,"Madhu",123.98, ,"Raghu",99,"Dilip"];

    let aryElmts = array1.length;
    document.getElementById("arrayElement").innerHTML=`No.of elements in a exixting array is ${aryElmts}`; 


//5.program to loop over an array with some of the elements.
const students =["Ram","Raghu","Dilip","Shiva","Madhu","Mahesh","Suresh","malli"]

for(let i=0; i<students.length; i++){
console.log(students[i]);
}
 document.getElementById("loops").innerHTML=`students in CSA 74th batch are ${students}`;

 //with for of loop

 for(const studentsCSA of students){

    let stdn1 = studentsCSA;
    console.log(studentsCSA)
 }



 //filter function

 let employees = [
    {
        id:1,
        name:"Ram",
        age :27,
        desig:"Developer",
        isActive: true

    },
    {
        id:2,
        name:"Madhu",
        age :23,
        desig:"PythonDeveloper",
        isActive:true

    },
    {
        id:3,
        name:"raghu",
        age :22,
        desig:"Sr.PythonDeveloper",
        isActive:true

    },

    {
        id:4,
        name:"Dilip",
        age :22,
        desig:"Java developer",
        isActive:false

    },

    {
        id:5,
        name:"Shiva",
        age :26,
        desig:"WebDeveloper",
        isActive:true

    }
 ]

 let jremployee = employees.filter(function(employee){
    return employee.age<25;
 });
 console.log(jremployee);


let arrays =[1,2,3,45,5,6,7,8,9,0];

 for(i=0; i<arrays.length; i++){
    console.log(arrays[i])
 }

 