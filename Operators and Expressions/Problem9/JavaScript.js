function CircleInRectangleOut() {
    var x = parseFloat(document.getElementById("typeX").value),
        y = parseFloat(document.getElementById("typeY").value),
        kx = 1,
        ky = 1,
        r = 3,
        isInCircle,
        isInRectangle;

    isInCircle = ((x * x) - (2 * x * kx) + (kx * kx)) + ((y * y) - (2 * y * ky) + (ky * ky)) <= r * r;
    isInRectangle = ((x >= -1) && (x <= 5)) && ((y <= 1) && (y >= -1));

    if ((isInCircle === true) && (isInRectangle === false)) {
        document.getElementById("answer").value = "yes";
    }
    else {
        document.getElementById("answer").value = "no";
    }
}