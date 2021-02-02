const express = require('express');
require('./db/conn');
// const Student = require('./model/students');

const studentRouter = require('./router/studentRoutting');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(studentRouter);

//Create a new student
// app.post('/students', (req, res) => {
//     // console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
//
//     // res.send('hello students');
// });

// 1: create a new router
// const router = new express.Router();

// // 2:we need to define the router
// router.get('/stu', (req, res) => {
//     res.send('Hello');
// });

// 3:we need to register our router
// app.use(router);


//Create a new student = Post Method
//Async / await method
// app.post('/students', async (req, res) => {
//     try {
//         const user = new Student(req.body);
//         const createUser = await user.save();
//         res.status(201).send(createUser)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// });

//read the data of registered Students = Get Method
// app.get('/students', async (req, res) => {
//     try {
//         const studentData = await Student.find();
//         res.status(200).send(studentData)
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

//get the indivisual Student data using id

// app.get('/students/:id', async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const studentData = await Student.findById(_id);
//
//         if (!studentData) {
//             return res.status(404).send()
//         } else {
//             res.status(201).send(studentData)
//         }
//     } catch (e) {
//         res.status(500).send(e)
//     }
// })

//Update the student by it id

// app.patch('/students/:id', async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
//             new: true
//         });
//         res.send(updateStudents)
//     } catch (e) {
//         res.status(404).send(e)
//     }
// })

//Delete the student by it id
// app.delete('/students/:id', async (req, res) => {
//     try {
//         const deleteStudent = await Student.findByIdAndDelete(req.params.id);
//         if (!req.params.id) {
//             res.status(404).send();
//         }
//         res.send(deleteStudent);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })

app.listen(port, () => {
    console.log(`Server Running On Port ${port}`)
});
