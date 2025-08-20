const express = require('express')
const router = express.Router()
const db = require('../db/index')

router.get('/', async (req, res, next) => {
  try {
    let results = await db.all()
    res.json(results)

  } catch (e) {
    console.log(e.message);
    res.send(e.message)
  }
})

module.exports = router
