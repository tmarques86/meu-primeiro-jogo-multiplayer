import express from 'express'
import http from 'http'
import socketio from 'socket.io'

import createGame from './public/game.js'

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public'))

const game = createGame();

game.addPlayer({playerId:'player1', playerX:1, playerY:1})
game.addPlayer({playerId:'player2', playerX:9, playerY:10})
game.addFruit({fruitId:'fruit1',fruitX:3,fruitY:2})
game.addFruit({fruitId:'fruit2',fruitX:10,fruitY:6})
game.addFruit({fruitId:'fruit3',fruitX:8,fruitY:30})
game.addFruit({fruitId:'fruit4',fruitX:30,fruitY:20})


sockets.on('connection', (socket) => {
    const playerId = socket.id
    console.log(`> Player connected on Server with id ${playerId}`)

    socket.emit('setup', game.state)
})

server.listen(3000, () => {
    console.log('> Server listening on port: 3000')
})