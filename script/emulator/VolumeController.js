class VolumeController {
    constructor(btnVolumeUp,btnVolumeDown,volumeValue,btnMute) {
        this.btnVolumeUp = btnVolumeUp
        this.btnVolumeDown = btnVolumeDown
        this.volumeValue = volumeValue
        this.btnMute = btnMute

        this.isMuted = false
        this.volume = 0

        this.btnVolumeUp.addEventListener('click', (e) => {
            if (this.volume < 1) {
                this.volume = parseFloat((this.volume + 0.1).toFixed(1))
                VolumeController.changeVolume(this.volume)
                this.volumeValue.innerText = this.volume * 100
                this.isMuted = false
                this.changeIcon()
            }
        })

        this.btnVolumeDown.addEventListener('click', (e) => {
            if (this.volume > 0) {
                this.volume = parseFloat((this.volume - 0.1).toFixed(1))
                VolumeController.changeVolume(this.volume)
                this.volumeValue.innerText = this.volume * 100
                this.isMuted = false
                this.changeIcon()
            }
        })

        this.btnMute.addEventListener('click', () => {
            if (this.isMuted) {
                VolumeController.changeVolume(this.volume)
                this.isMuted = false
            }
            else {
                VolumeController.changeVolume(0)
                this.isMuted = true
            }
            this.changeIcon()
        })
    }

    static changeVolume(value) {
        if (gainNode) {
            gainNode.gain.value = value
        }
    }

    changeIcon() {
        this.btnMute.innerHTML = this.isMuted ? '<i class="fa-solid fa-volume-xmark"></i>'
                                               : this.volume > 0.5 ? '<i class="fa-solid fa-volume-high"></i>'
                                                                   : this.volume == 0 ? '<i class="fa-solid fa-volume-off"></i>' : '<i class="fa-solid fa-volume-low"></i>'
    }
}
