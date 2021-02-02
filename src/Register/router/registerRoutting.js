const express = require('express');
const Register = require('../model/register');

const router = new express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = new Register(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser)
    } catch (e) {
        res.status(500).send(e)
    }
});

//read the data of registered Students = Get Method
router.get('/register', async (req, res) => {
    try {
        const registerData = await Register.find()
        res.send(registerData);
    } catch (e) {
        res.send(e)
    }
});

//get the indivisual Student data using id
router.get('/register/:id', async (req, res) => {
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
router.patch('/register/:id', async (req, res) => {
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
router.delete('/register/:id', async (req, res) => {
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

module.exports = router;
