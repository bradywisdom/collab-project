function addOrRemove (input2: number, up: boolean) {
    if (up) {
        return input2 + 1
    } else {
        return input2 - 1
    }
}
addOrRemove(1, Math.percentChance(50))
game.splash(addOrRemove(1, Math.percentChance(50)))
game.splash(addOrRemove(2, Math.percentChance(50)))
game.splash(addOrRemove(15, Math.percentChance(50)))
game.splash(addOrRemove(30, Math.percentChance(50)))
