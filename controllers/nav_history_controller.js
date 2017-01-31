const express = require('express')
const router = express.Router()

const cuid = require('cuid')

router.get('/histories', (req, res) => {
  const json = [
    {
      "id": "9d00cd62-f52a-448f-93d5-3e8ed2eea1cd",
      "value": 2000,
      "createdAt": "2017-01-31T17:56:15+0700",
      "updatedAt": "2017-01-31T17:56:15+0700"
    },
    {
      "id": "9d00cd62-f52a-448f-93d5-3e8ed2eea1cc",
      "value": 3000,
      "createdAt": "2017-01-30T17:56:15+0700",
      "updatedAt": "2017-01-30T17:56:15+0700"
    },
    {
      "id": "9d00cd62-f52a-448f-93d5-3e8ed2eea1cb",
      "value": 2000,
      "createdAt": "2017-01-29T17:56:15+0700",
      "updatedAt": "2017-01-29T17:56:15+0700"
    },
    {
      "id": "9d00cd62-f52a-448f-93d5-3e8ed2eea1ca",
      "value": 1000,
      "createdAt": "2017-01-28T17:56:15+0700",
      "updatedAt": "2017-01-28T17:56:15+0700"
    }
  ]

  res.json(json)
})

module.exports = router
