class DsCard {
    constructor(img,container,rom) {
        this.img = img
        this.container = container
        this.rom = rom
        this.element = null

        this.addDOM()

        this.element.addEventListener('click', () => this.loadGame(this.rom))
    }

    addDOM() {
        const scene = document.createElement('div')
        scene.className = 'scene'
        
        const cube = document.createElement('div')
        cube.className = 'cube'
        
        const frontSide = document.createElement('div')
        frontSide.className = 'front'
        const img = document.createElement('img')
        img.src = this.img
        frontSide.appendChild(img)
        cube.appendChild(frontSide)
        
        const backSide = document.createElement('div')
        backSide.className = 'back'
        cube.appendChild(backSide)
        
        const leftSide = document.createElement('div')
        leftSide.className = 'left'
        cube.appendChild(leftSide)
        
        const rightSide = document.createElement('div')
        rightSide.className = 'right'
        cube.appendChild(rightSide)
        
        const topSide = document.createElement('div')
        topSide.className = 'top'
        cube.appendChild(topSide)
        
        const bottomSide = document.createElement('div')
        bottomSide.className = 'bottom'
        cube.appendChild(bottomSide)
        
        scene.appendChild(cube)
        this.container.appendChild(scene)
        this.element = scene
    }

    loadGame() {
        Emulator.loadGame(this.rom)
    }
}

const gameContainer = document.getElementById('games')

new DsCard('img/pokemon-white.png',gameContainer,'roms/pokemon-blanco.nds')
new DsCard('img/pokemon-plata.png',gameContainer,'roms/pokemon-plata.nds')
new DsCard('img/pokemon-platinum.png',gameContainer,'roms/pokemon-platino.nds')
new DsCard('img/mario-kart.png',gameContainer,'roms/mario-kart.nds')
new DsCard('img/mario-64.png',gameContainer,'roms/m64.nds')