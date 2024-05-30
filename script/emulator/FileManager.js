class FileManager {

    static dowloadDSV() {
        const save = localStorage.getItem('localforage/sav-'+gameID)

        const blob = new Blob([save], {type : 'text/plain'})

        const enlace = document.createElement('a')
        enlace.href = URL.createObjectURL(blob)
        enlace.download = `${gameID}.dsv`

        document.body.appendChild(enlace)
        enlace.click()

        document.removeChild(enlace)
    }

    static async loadDSV(file) {
        const content = await this.readFile(file);
    
        localStorage.setItem('localforage/sav-' + gameID, content);
    }
    
    static readFile(file) {
        return new Promise((resolve, reject) => {
            if (file) {
                const reader = new FileReader();
    
                reader.onload = (e) => {
                    resolve(e.target.result);
                };
    
                reader.onerror = (e) => {
                    reject(e);
                };
    
                reader.readAsText(file);
            } else {
                reject(new Error("No file provided"));
            }
        });
    }
}