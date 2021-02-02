const express = require('express');
require('./db/connection');
const Register = require('./model/register');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

//Create a new Student = POST method
app.post('/register', async (req, res) => {
    try {
        const user = new Register(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser)
    } catch (e) {
        res.status(500).send(e)
    }
});

//read the data of registered Students = Get Method
app.get('/register', async (req, res) => {
    try {
        const registerData = await Register.find()
        res.send(registerData);
    } catch (e) {
        res.send(e)
    }
});

//get the indivisual Student data using id
app.get('/register/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Register.findById(_id);
        if (!studentData) {
            return res.status(404).send()
        } else {
            res.status(201).send(studentData)
        }
        res.send(studentData);
    } catch (e) {
        res.send(e)
    }
});

// Update the student by it ID
app.patch('/register/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Register.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateStudent);
    } catch (e) {
        res.send(e)
    }
})

// Delete student by id
app.delete('/register/:id', async (req, res) => {
    try {
        const deleteStudent = await Register.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            res.status(404).send()
        }
        res.send(deleteStudent);
    } catch (e) {
        res.send(e)
    }
})

app.listen(port, () => {
    console.log(`server running on ${port}`)
});
