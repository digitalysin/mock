const express = require('express')
const router = express.Router()
const cuid = require('cuid')

router.get('/balance', (req, res) => {
  return res.json({ balance: 123000 })
})
router.get('/new/subscription', (req, res) => {
  res.json({ balance: 25000, amount: 0, type: 'SUBSCRIPTION', isAgreedToProspectus: false })
})

router.get('/new/redemption', (req, res) => {
  res.json({ balance: 25000, amount: 0, type: 'REDEMPTION', isAgreedToProspectus: false, investmentBalance: 200000 })
})

router.post('/', (req, res) => {
  res.json({ id: cuid(), amount: 5000, balance: 25000, status: 'PENDING', type: 'SUBSCRIPTION', createdAt: new Date(), updatedAt: new Date() })
})


router.get('/histories', (req, res) => {
  const json = {
            "PENDING": [
                          {
                                          "id": "ea1ac474-fee5-4162-a630-1900b7130dbd",
                                          "amount": 25000,
                                          "balance": 2000,
                                          "status": "PENDING",
                                          "type": "SUBSCRIPTION",
                                          "createdAt": "2017-01-23T09:21:34+0700",
                                          "updatedAt": "2017-01-23T09:21:34+0700"
                                        },
                          {
                                          "id": "ea1ac474-fee5-4162-a630-1900b7130dbc",
                                          "amount": 25000,
                                          "balance": 2000,
                                          "status": "PENDING",
                                          "type": "REDEMPTION",
                                          "createdAt": "2017-01-23T09:21:34+0700",
                                          "updatedAt": "2017-01-23T09:21:34+0700"
                                        }
                      ],
              "PROGRESS": [
                            {
                                            "id": "ea1ac474-fee5-4162-a630-1900b7130dbe",
                                            "amount": 25000,
                                            "balance": 2000,
                                            "status": "PROGRESS",
                                            "type": "SUBSCRIPTION",
                                            "createdAt": "2017-01-23T09:21:34+0700",
                                            "updatedAt": "2017-01-23T09:21:34+0700"
                                          },
                            {
                                            "id": "ea1ac474-fee5-4162-a630-1900b7130dbf",
                                            "amount": 25000,
                                            "balance": 2000,
                                            "status": "PROGRESS",
                                            "type": "REDEMPTION",
                                            "createdAt": "2017-01-23T09:21:34+0700",
                                            "updatedAt": "2017-01-23T09:21:34+0700"
                                          }
                        ],
              "SUCCESS": [
                            {
                                            "id": "ea1ac474-fee5-4162-a630-1900b7130dbg",
                                            "amount": 25000,
                                            "balance": 2000,
                                            "status": "SUCCESS",
                                            "type": "SUBSCRIPTION",
                                            "createdAt": "2017-01-23T09:21:34+0700",
                                            "updatedAt": "2017-01-23T09:21:34+0700"
                                          },
                            {
                                            "id": "ea1ac474-fee5-4162-a630-1900b7130dbh",
                                            "amount": 25000,
                                            "balance": 2000,
                                            "status": "SUCCESS",
                                            "type": "REDEMPTION",
                                            "createdAt": "2017-01-23T09:21:34+0700",
                                            "updatedAt": "2017-01-23T09:21:34+0700"

                                          }
                        ],
              "FAILED": [
                            {
                                            "id": "ea1ac474-fee5-4162-a630-1900b7130dbi",
                                            "amount": 25000,
                                            "balance": 2000,
                                            "status": "FAILED",
                                            "type": "SUBSCRIPTION",
                                            "createdAt": "2017-01-23T09:21:34+0700",
                                            "updatedAt": "2017-01-23T09:21:34+0700"
                                          },
                            {
                                            "id": "ea1ac474-fee5-4162-a630-1900b7130dbj",
                                            "amount": 25000,
                                            "balance": 2000,
                                            "status": "FAILED",
                                            "type": "REDEMPTION",
                                            "createdAt": "2017-01-23T09:21:34+0700",
                                            "updatedAt": "2017-01-23T09:21:34+0700"
                                          }
                        ]
  }

  res.json(json)
})

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, amount: 5000, balance: 25000, status: 'PENDING', type: 'SUBSCRIPTION', createdAt: new Date(), updatedAt: new Date() })
})

module.exports = router
