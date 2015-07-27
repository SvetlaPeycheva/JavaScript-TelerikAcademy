function thirdBit() {
    var inputNumber = document.getElementById("inputNumber").value,
        result,
        shiftedNumber;

    if (isNaN(inputNumber)) {
        result = "Not a number!";
    }

    else {
        shiftedNumber = inputNumber >> 3;
        result = shiftedNumber & 1;
    }

    document.getElementById("answer").value = result;
}