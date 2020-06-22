function calculate() {
    var markq = document.getElementById("number1").value;
    var markh = document.getElementById("number2").value;
    var daysp = document.getElementById("number3").value;
    var dayst = document.getElementById("number4").value;
    var sum = Math.round((((parseInt(markq) + parseInt(markh)) / 2) * 0.8) + ((parseInt(daysp) / parseInt(dayst)) * 100));
    document.getElementById('ans').innerHTML = 'YOUR MARKS :' + sum;
}