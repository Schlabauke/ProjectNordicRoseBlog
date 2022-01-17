const express = require('express')
const app = express()
const blogData = require('./BlogWebsite.json')
const bodyParser = require('body-parser');
/* const { body, validationResult } = require('express-validator') */


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
    res.render('pages/home', { blogData })
})
app.get('/article', (req, res) => {
    res.render('pages/articleDetail', { blogData })
})
app.get('/form', (req, res) => {
    res.render('pages/formTemp', { blogData })
})


//wird kein json übergeben, sondern FormData 


app.post('/articleDetail', express.urlencoded(), (req, res) => {
    const inputForm = req.body
    console.log(inputForm)
    blogData.push(inputForm)

    res.render('pages/articleDetail', { blogData })
}
)
//Wo werden die Infos zwischengespeichert?
// Wie komme ich daran: in Array pushen, Daten tauchen nicht auf, Im HTML kommen keine Daten an. 
//fehlt noch ein createNew-Entry() für das Array? 

const PORT = 3141
app.listen(PORT, () => console.log('Listen on Port:', PORT))
