const express = require('express')
const router = express.Router()

router.get('/articles', (req, res) => {
    res.send('Rota de articles')
});

router.get('/admin/articles/new', (req, res) => {
    res.send('Rota para criar uma nova articles!')
})

module.exports = router;