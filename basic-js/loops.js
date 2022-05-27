var students = ["Maria","Sergio","Floria","Samuel"]

function sayHelloStudents(student){
    console.log(`Hi , ${student}`);

}

for(var i = 0; i<students.length; i++ ){
    sayHelloStudents(students[i]);
}

for(var student of students){
    sayHelloStudents(student);
}

while(students.length>0){
    console.log(students);
    var student = students.shift();
    sayHelloStudents(student);
}