const express = require('express');
const router = new express.Router();

const MensRanking = require('../model/mens');

router.post('/mens', async (req, res) => {
    try {
        const addingMensRecord = new MensRanking(req.body)
        const insertMenRecode = await addingMensRecord.save()
        res.status(201).send(insertMenRecode);
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({"ranking": 1})
        res.send(getMens);
    } catch (e) {
        res.status(400).send(e)
    }
});

//find mens with id
router.get('/mens/:id', async (req, res) => {
    try {
        const id = req.params.id
        const getMen = await MensRanking.findById({_id: id})
        res.send(getMen);
    } catch (e) {
        res.status(400).send(e)
    }
});

router.patch('/mens/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateMen = await MensRanking.findByIdAndUpdate({_id: id}, req.body, {new: true})
        res.send(updateMen);
    } catch (e) {
        res.status(400).send(e)
    }
    // res.send('Hello')
});

router.delete('/mens/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updateMen = await MensRanking.findByIdAndDelete({_id: id})
        res.send(updateMen);
    } catch (e) {
        res.status(500).send(e)
    }
    // res.send('Hello')
});

module.exports = router;
