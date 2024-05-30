class Emulator {

    static emulatorShadowRoot = document.getElementById('player')

    static player = document.getElementById('player').shadowRoot.getElementById('player')

    static topScreen = document.getElementById('player').shadowRoot.getElementById('top')

    static bottomScreen = document.getElementById('player').shadowRoot.getElementById('bottom')

    static isFullScreen = true

    static loadGame(path) {
        this.emulatorShadowRoot.loadURL(path)
        setTimeout(()=> document.title = 'Nintendo DS | ' + gameID, 10000)
    }

    static switchScreens() {
        this.topScreen.classList.replace('top','bottom')
        this.bottomScreen.classList.replace('bottom','top')

        let tempScren = this.topScreen
        this.topScreen = this.bottomScreen
        this.bottomScreen = tempScren
    }
}