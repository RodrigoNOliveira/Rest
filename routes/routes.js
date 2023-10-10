const express = require('express')
const router = express.Router()


//POST
router.post('/post', (req, res) => {
    res.send(`POST API`)
})


//GET ALL
router.get('/getAll', (req, res) => {
    res.send(`GetAll API`)
})



//GET ID
router.get('/getOne/:id', (req, res) => {
    res.send(`Get by ID API: ${req.params.id}`)
})


//UPDATE
router.patch('/update/:id', (req, res) => {
    res.send(`UPDATE by ID API`)
})


//DELETE
router.delete('/delete/:id', (req, res) => {
    res.send(`DELETE by ID API`)
})



module.exports = router