import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ hello: 'World' })
})

app.listen(3333)
