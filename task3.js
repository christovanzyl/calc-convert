// This function allows the user to see how much times he/she has clicked on the button
var count = 0;

function Count() {
    count++;
    document.getElementById('ABC').innerHTML = count;
}
// This function allows the inputted rand value to convert to euro
function Econ() {
    var zar1 = document.getElementById('zar1').value;
    var euro = zar1 * 0.61;
    document.getElementById('Eant').innerHTML = euro;
}
// This function allows the inputted rand value to convert to dollar
function Dcon() {
    var zar2 = document.getElementById('zar2').value;
    var dollar = zar2 * 0.069;
    document.getElementById('Danm').innerHTML = dollar;
}
// This function allows the inputted rand value to convert to pound
function Pcon() {
    var zar3 = document.getElementById('zar3').value;
    var pound = zar3 * 0.055;
    document.getElementById('Pant').innerHTML = pound;
}