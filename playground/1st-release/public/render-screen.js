export default function renderScreen(screen, game, requestAnimationFrame) {
    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    context.clearRect(0, 0, screen.width, screen.height)

    const objWidth = screen.height / game.state.screen.height
    const objHeight = screen.width / game.state.screen.width


    for (const playerId in game.state.players ){
        const player = game.state.players[playerId]
        context.fillStyle = 'black';
        context.fillRect(player.x * objWidth - objWidth, player.y * objHeight - objHeight, objWidth, objHeight)
    }

    for (const fluitId in game.state.fruits ){
        const fruit = game.state.fruits[fluitId]
        context.fillStyle = 'green';
        context.fillRect(fruit.x * objWidth - objWidth, fruit.y * objHeight - objHeight, objWidth, objHeight)
    }

    requestAnimationFrame( () => {
        renderScreen(screen, game, requestAnimationFrame)
    })
}