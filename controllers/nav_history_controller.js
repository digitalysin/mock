const express = require('express')
const router = express.Router()

const cuid = require('cuid')

router.get('/histories', (req, res) => {
  const json = [
    {
      "id": "9d00cd62-f52a-448f-93d5-3e8ed2eea1cd",
      "value": 2000,
      "balance": 9000,
      "unit": 1200,
      "createdAt": "2017-01-31T17:56:15+0700",
      "updatedAt": "2017-01-31T17:56:15+0700"
    },
    {
      "id": "9d00cd62-f52a-448f-93d5-3e8ed2eea1cc",
      "value": 3000,
      "balance": 10000,
      "unit": 1300,
      "createdAt": "2017-01-30T17:56:15+0700",
      "updatedAt": "2017-01-30T17:56:15+0700"
    },
    {
      "id": "9d00cd62-f52a-448f-93d5-3e8ed2eea1cb",
      "value": 2000,
      "balance": 9988,
      "unit": 1289,
      "createdAt": "2017-01-29T17:56:15+0700",
      "updatedAt": "2017-01-29T17:56:15+0700"
    },
    {
      "id": "9d00cd62-f52a-448f-93d5-3e8ed2eea1ca",
      "value": 1000,
      "balance": 9999,
      "unit": 1299,
      "createdAt": "2017-01-28T17:56:15+0700",
      "updatedAt": "2017-01-28T17:56:15+0700"
    }
  ]

  res.json(json)
})

module.exports = router
