const express = require('express');
const Student = require('../model/students');

const router = new express.Router();

router.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/students', async (req, res) => {
    try {
        const studentData = await Student.find();
        res.status(200).send(studentData)
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);

        if (!studentData) {
            return res.status(404).send()
        } else {
            res.status(201).send(studentData)
        }
    } catch (e) {
        res.status(500).send(e)
    }
});

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const wupdateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateStudents)
    } catch (e) {
        res.status(404).send(e)
    }
});

router.delete('/students/:id', async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            res.status(404).send();
        }
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
