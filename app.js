const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()
app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', { noCache: true })

app.use(express.static(path.resolve(`${__dirname}/css`)))
app.get('/', (req, res, next)=> res.render('index'))
app.get('/formdemo', (req, res, next)=> res.render('formdemo'))

const port = process.env.PORT || 5000
app.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})
