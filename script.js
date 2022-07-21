//Question1
//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.


const parentOne = {
    calculateAge(){
        console.log(`My name is ${this.fName} ${this.lName} and age is ${2022 - this.bYear}`);
    }
}

const childOne = Object.create(parentOne);
childOne.fName = "bhashkar";
childOne.lName = "singh";
childOne.bYear = 2000;
childOne.calculateAge();

const childTwo = Object.create(parentOne);
childTwo.fName = "saurabh";
childTwo.lName = "sharma";
childTwo.bYear = 2001;
childTwo.calculateAge();

//Question2
//Write code to explain prototype chaining.

const personTwo = {
    myData(){
        console.log(`My name is ${this.name} ,school Name is ${this.schoolName} and age is ${2022 - this.dob} .`);
    },
    initialise(name,schoolName,dob){
        this.name = name;
        this.schoolName = schoolName;
        this.dob = dob;
    }
}

const bhashkar = Object.create(personTwo);
bhashkar.initialise("bhashkar singh","G.I.C Nainital",2000);
bhashkar.myData();
console.log(bhashkar);

const studentProto = Object.create(personTwo);
studentProto.initial = function (name,schoolName,dob,course) {
    personTwo.initialise.call(studentProto,name,schoolName,dob);
    this.course = course;    
}

studentProto.intro = function(){
    console.log(`Student name is ${this.name} and his DOB is ${this.dob} course is ${this.course}.`);
}


const newStudent = Object.create(studentProto);
newStudent.initial("rahul",22,2000,"I.T");
newStudent.intro();
newStudent.myData();


//Question3
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

function arraySum(a){
    let sum=0;
    for(let i in a) { 
        sum += a[i];
    }
    console.log(sum);
}
let array = [1,3,5,8]; 
let calcSum= arraySum(array);


//Question4
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function Person(fName, lName, age, haircolor) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.haircolor = haircolor;
}
  
Person.prototype.location1 = "noida";
const mynewFriend = new Person("himal", "singh", 25, "black");
console.log(mynewFriend);
console.log(`my new friend name is ${mynewFriend.fName} ${mynewFriend.lName} and age is ${mynewFriend.age} location ${mynewFriend.location1}`);

