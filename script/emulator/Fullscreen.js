class Fullscreen {
    btn
    constructor(btn) {
        this.btn = btn

        this.btn.addEventListener('click', () => this.toggleFullScreen())
        this.toggleFullScreen()
    }

    toggleFullScreen() {
        Emulator.isFullScreen = !Emulator.isFullScreen

        this.btn.innerHTML = Emulator.isFullScreen ? '<i class="fa-solid fa-compress"></i> Small Screen' : '<i class="fa-solid fa-expand"></i> Full Screen'

        Emulator.player.classList.toggle('fullscreen', Emulator.isFullScreen)
        Emulator.player.classList.toggle('smallscreen', !Emulator.isFullScreen)
        Emulator.topScreen.classList.toggle('fullscreen', Emulator.isFullScreen)
        Emulator.topScreen.classList.toggle('smallscreen', !Emulator.isFullScreen)
        Emulator.bottomScreen.classList.toggle('fullscreen', Emulator.isFullScreen)
        Emulator.bottomScreen.classList.toggle('smallscreen', !Emulator.isFullScreen)
    }
}
