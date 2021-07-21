// implement StudentGrade type with: student name, assigment name, grade
class StudentGrade {
    constructor(student, assigment,grade) {
      this.student = student
      this.assigment = assigment;
      this.grade = grade;

    }
  }
// generate new instances for few student
// const StudentGrade1 = new StudentGrade("hanna", "3D" , 92);
// const StudentGrade2 = new StudentGrade("david", "nodejs" , 63);
// const StudentGrade3 = new StudentGrade("jacob", ".NET" , 42);
// const StudentGrade4 = new StudentGrade("ron", "React" , 87);
// const StudentGrade5 = new StudentGrade("niva", "Angular" , 76);
// implement the following type
// student name + assigment name = unique (bonus)

function GradesChecker(...student) {

// TODO: save array as instance memeber
var student = [StudentGrade1, StudentGrade2, StudentGrade3, StudentGrade4, StudentGrade5];
}

// add validate method(bonus)

// add 'normalize' method whoch gets a single student grade,
function normalizeMethod(grade){
if (isNaN(ValidateMethod(grade)) = true) {

}

}
// make sure the value is a valid for a grade

function ValidateMethod(data){
    try{
        data === parseInt(data, 10);
        return data
    }
    catch{
        return NaN;
    }
    
    
}
// if the value is a number but not an integer, convert to integer
// else conversts it to NaN
// write the output to the student grade instance accordigly
function output(array){
    for (let i; i<array; i++){
        console.log(this.StudentGradeArray[i].student);
        console.log(this.StudentGradeArray[i].assigment);
        console.log(normalizeMethod(this.StudentGradeArray[i].grade));
    }
}
output(this.student);

(function () {
    // body of the function
const StudentGrade1 = new StudentGrade("hanna", "3D" , 92);
const StudentGrade2 = new StudentGrade("david", "nodejs" , 63);
const StudentGrade3 = new StudentGrade("jacob", ".NET" , 42);
const StudentGrade4 = new StudentGrade("ron", "React" , 87);
const StudentGrade5 = new StudentGrade("niva", "Angular" , 76);
    

  }());

// add 'generateRaport' method whoch prints nicely to the screen a list of student name grade. only if the gradea proper int

// output shold be