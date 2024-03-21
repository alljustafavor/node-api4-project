const express = require('express')
const cors = require('cors')
const logger = require('./middleware/middleware')
const server = express()

server.use(express.json())
server.use(logger)
server.use(cors())

server.get('/api/users', (req, res) => {
  res.json(
    [
      {
        id: 1,
        username: 'Joseph'
      },
      {
        id: 2,
        username: 'Austin'
      },
      {
        id: 3,
        username: 'Josh'
      }
    ]
  );
});

server.post('/api/register',  (req, res) => {
  const { username, password } = req.body;
  if(!username || !password) {
    res.status(400).json({
      message: "username and password required"
    })
  } else {
    res.status(201).json({ username, password })
  }
})

server.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if(!username || !password) {
    res.status(400).json({
      message: "username and password required"
    })
  } else {
    res.json({
      message: `Welcome, ${username}!`
    })
  }
})

server.use('*', (req, res) => {
  res.status(404).json({
    message: "The page you are looking for does not exist"
  })
})

module.exports = server
