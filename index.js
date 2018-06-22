var canvas = document.getElementById('canvas')
var opts = {
    errorCorrectionLevel: 'H',
    type: 'svg',
    scale: 10,
    rendererOpts: {
      quality: 0.3,
      scale: 10,
    }
}
const text = document.getElementById("myTextarea")
const filename = document.getElementById("filename").value
console.log(url)
text.style.display = 'none';

qrCode=()=>{
    const url = document.getElementById("url").value
    QRCode.toCanvas(canvas, url,opts, function (error) {
    if (error) console.error(error)
    console.log('success!');
    })

    QRCode.toString(canvas, url, opts, function (err, string) {
        if (err) throw err
        text.value = string;
})
}
download=(filename)=>{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.value));
    console.log(filename)
    element.setAttribute('download', filename + '.svg');
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}