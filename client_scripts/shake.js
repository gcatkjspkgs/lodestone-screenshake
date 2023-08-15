const ScreenshakeHandler = java('team.lodestar.lodestone.handlers.ScreenshakeHandler')
const ScreenshakeInstance = java('team.lodestar.lodestone.systems.screenshake.ScreenshakeInstance')
const Easing = java('team.lodestar.lodestone.systems.easing.Easing')

onEvent('player.data_from_server.screenshake', event => {
    ScreenshakeHandler.addScreenshake(ScreenshakeInstance(15).setIntensity(0.6, 1.0, 0.2).setEasing(Easing.SINE_IN, Easing.QUAD_IN))
})