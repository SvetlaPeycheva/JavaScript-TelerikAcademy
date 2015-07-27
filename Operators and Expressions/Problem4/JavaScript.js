function thirdDigit() {
    var digit = document.getElementById("digit").value,
        answer;
    console.log(digit.length);

    if (isNaN(digit)) {
        answer = "Invalid input.";
    }

    else if (digit.length < 3) {
        answer = "false";
    }

    else {
        digit = digit + "";
        var reversed = digit.split("").reverse().join("");
        answer = reversed[2] === "7" ? "true" : "false";
    }

    document.getElementById("answer").value = answer;
}