function problemSeven() {
    var problem7 = document.getElementById('problemSeven').value;
    var isPrime = true;

    if(!isNaN(problem7) && problem7 % 1 === 0 && problem7 !== '') {
        problem7 *= 1;
        if(problem7 < 2) {
            isPrime = false;
        } else {
            for (var i = 2; i <= Math.floor(Math.sqrt(problem7)); i += 1) {
                if(problem7 % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        document.getElementById('answer').innerHTML =
            problem7 + ' is prime? = ' + isPrime;
            isPrime = false;
    }
}