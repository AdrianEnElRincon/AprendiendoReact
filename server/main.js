const express = require('express'), app = express()
const cors = require('cors')

const PORT = 3000

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}/`))

let datos = [
    {
        nombre: 'Juan Diaz',
        telefono: '333333333',
        donacion: [14, '$']
    },
    {
        nombre: 'Marine LePear',
        telefono: '221512313',
        donacion: [1, '€']
    },
    {
        nombre: 'Johny Gustavo',
        telefono: '789444898',
        donacion: [100, '$']
    },
    {
        nombre: 'Gustavo Marinel',
        telefono: '332313333',
        donacion: [78, '€']
    },
    {
        nombre: 'Pedro Diaz',
        telefono: '111222333',
        donacion: [4, '€']
    }
]

app.get('/', (req,res) => {
    res.send(datos)
})

app.post('/', (req,res) => {
    datos.push(req.body)
})

app.delete('/:id', (req,res) => {
    datos = datos.filter((dato, id) => id != req.params.id)
})