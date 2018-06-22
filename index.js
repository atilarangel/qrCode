const canvas = document.getElementById('canvas')
const opts = {
    errorCorrectionLevel: 'H',
    type: 'svg',
    scale: 10,
    rendererOpts: {
      quality: 0.3
    }
}

let svg

qrCode=()=>{
    //https://www.npmjs.com/package/qrcode

    const url = document.getElementById("url").value 

    console.log()
    if (url.length>=1) {
        QRCode.toCanvas(
        canvas,
        url,
        opts,
        function(error) {
            if (error)
            console.error(error);
            console.log("success!");
        })

        QRCode.toString(
        canvas,
        url,
        opts,
        function(err, string) {
            if (err) throw err;
            svg = string;
        })
    }
}
download=()=>{
    //https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
    const url = document.getElementById("url").value; 
    if (url.length >= 1) {
        const filename = document.getElementById("filename").value;
        var file = document.createElement('a')

        file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(svg))
        file.setAttribute('download', filename + '.svg')
    
        file.style.display = 'none'
        document.body.appendChild(file);
    
        file.click();
    
        document.body.removeChild(file);
    }
}

