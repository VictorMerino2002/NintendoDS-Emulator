class SelectGameModal {
    constructor() {
        this.selectGameModal = document.getElementById('select-game-modal')
        this.openGameModalBtn = document.getElementById('select-game-btn')
        this.closeGameModalBtn = document.getElementById('close-game-modal')

        this.openGameModalBtn.addEventListener('click',() => this.selectGameModal.style.display = 'block')
        this.closeGameModalBtn.addEventListener('click', () => this.selectGameModal.style.display = 'none')
    }
}
