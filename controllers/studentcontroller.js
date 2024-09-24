const Student = require('../models/Student');


async function addStudent(req,res){
    try{
        console.log(req.body);
        let students = new Student(req.body);
        await students.save();
        res.render('studentadd')
            
    

    }catch(err){
        console.log(err);
    }
}
async function getStudents(req,res){
    try{
        let students = await Student.find({});
        console.log(students);
        res.render('studentdetail',{
            students:students
        });
    }catch(err){
        console.log(err)
    }
}
async function getStudentForEdit(req, res){
    try{
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        console.log(student);
        res.render('studentforedit',{
            student:student
        })

    }catch(err){
        console.log(err,'err')

}

}
async function updateStudent(req,res){
    try{
        let id = req.params.id;
        console.log(req.body);
        let student = await Student.findOne({ _id:id })
        console.log(student, 'student')
        student.rollNo=req.body.rollNo
        student.firstname=req.body.firstname
        student.lastname=req.body.lastname
        student.fathername=req.body.fathername
        student.adharNO=req.body.adharNO
        student.mobileNO=req.body.mobileNO

        await student.save();
        let students = await Student.find({});
        res.render('studentdetail',{
            students: students

        })

        res.end("<h1>student has been updated...</h1>")

    }catch(err){
        console.log(err)

 }
}
async function deleteStudent(req,res){
    try{
        let id =req.params.id;
        await Student.deleteOne({_id: id})
        let students = await Student.find({})
        res.render('studentdetail',{
            students: students

        })


    }catch(err){
        console.log(err,'err')
    }
}


module.exports={
    addStudent,
    getStudents,
    getStudentForEdit,
    updateStudent,
    deleteStudent

}