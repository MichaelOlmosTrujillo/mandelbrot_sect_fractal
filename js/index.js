
    var myCanvas = document.createElement("canvas");
    myCanvas.width = 1500;
    myCanvas.height = 700;
    document.body.appendChild(myCanvas);
    var ctx = myCanvas.getContext('2d'); // I'm not sure if the variable ctx works as a global variable, this could create an error
    ctx.translate(myCanvas.width/5, 0);


function checkIfBelongsToMandelbrotSet(x, y) {
    let realComponentOfResult = x;
    let imaginaryComponentOfResult = y;
    for (let i = 0; i < 10; i++) {
        // Calculate the real and imaginary components of the result
        // Separately
        let tempRealComponent = realComponentOfResult * realComponentOfResult - imaginaryComponentOfResult * imaginaryComponentOfResult + x;
        let tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult + y;
        realComponentOfResult = tempRealComponent;
        imaginaryComponentOfResult = tempImaginaryComponent;
    }
    if (realComponentOfResult * imaginaryComponentOfResult < 5) {
        return true; // It is in Mandelbrot set
    }
    return false; // Out of set Mandelbrot 
}

var magnificationFactor = 200;
var panX = 2;
var panY = 1.5;
for (let x = 0; x < myCanvas.width; x++) {
    for (let y = 0; y < myCanvas.height; y++) {
        var belongsToSet = checkIfBelongsToMandelbrotSet(x / magnificationFactor - panX, y / magnificationFactor - panY);
        if (belongsToSet) {
            
            ctx.fillRect(x, y, 1, 1); //Draw a black pixel
        }
    }
}