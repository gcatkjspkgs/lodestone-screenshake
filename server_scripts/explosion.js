onEvent('level.explosion.post', event => {
    const { x, y, z, level } = event
    level.getEntitiesWithin(AABB.of(x - 20, y - 20, z - 20, x + 20, y + 20, z + 20)).forEach(entity => {
        if (entity.isPlayer()) {
            entity.sendData('screenshake', {})
        }
    })
})