const express = require('express')
const fileUpload = require('express-fileupload')
const xlsx = require('xlsx')

const app = express()

const dataPathExcelToRead = 'test.xls'
const workbook = xlsx.readFile(dataPathExcelToRead)
const sheetname = workbook.SheetNames[0]
const sheetValue = workbook.Sheets[sheetname]

const textData = xlsx.utils.sheet_to_txt(sheetValue);

console.log(textData)

app.use(express.static(__dirname+ '/public'));
app.use(fileUpload())


// app.post('/extract-text', (req, res) => {
//     if(!req.files && !req.files.pdfFile) {
//         res.statusCode(400)
//         res.end()
//     }

//     pdfParse(req.files.pdfFile).then(results => {
//         res.send(results.text)
//     }).catch(err => {
//         console.log(err)
//         res.statusCode(500)
//         res.end()
//     })
// })

app.listen(3000)
