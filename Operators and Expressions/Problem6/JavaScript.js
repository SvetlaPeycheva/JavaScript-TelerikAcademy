function TryIt() {
    var x = parseFloat(document.getElementById("typeX").value),
        y = parseFloat(document.getElementById("typeY").value),
        r = 5;
     
     if ((x * x) + (y * y) < (r * r)) {
        document.getElementById("answer").value = true;
    }
    else {
        document.getElementById("answer").value = false;
    }
}
 
