const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000));
app.use(require('body-parser').json())

app.use('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port ', app.get('port'))
})
