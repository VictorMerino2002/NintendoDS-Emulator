const fullscreenBtn = document.getElementById('fullscreen-btn')
new Fullscreen(fullscreenBtn)

new SelectGameModal()

const switchBtn = document.getElementById('switch-btn')
switchBtn.addEventListener('click', () => Emulator.switchScreens())

const loadSaveBtn = document.getElementById('load-save-btn')
const loadSaveInput = document.getElementById('load-save-input')
loadSaveBtn.addEventListener('click',() => loadSaveInput.click())

loadSaveInput.addEventListener('change', (e) => FileManager.loadDSV(e.target.files[0]))

const downloadBtn = document.getElementById('download-save-btn')
downloadBtn.addEventListener('click', () => FileManager.dowloadDSV())

const volumeUpBtn = document.getElementById('volume-up-btn')
const volumeDownBtn = document.getElementById('volume-down-btn')
const volumeValue = document.getElementById('volume-value')
const muteBtn = document.getElementById('mute-btn')

new VolumeController(volumeUpBtn,volumeDownBtn,volumeValue,muteBtn)

const addGameBtn = document.getElementById('add-game')
const inputGame = document.getElementById('input-game')

addGameBtn.addEventListener('click', () => inputGame.click())
inputGame.addEventListener('input', (e) => Emulator.loadGame(URL.createObjectURL(e.target.files[0])))