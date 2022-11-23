function compute() {
    p = document.getElementById("principal").value;
    const principalNumber = Number(p);
    if (Number.isInteger(principalNumber) && principalNumber > 0) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        // convert the 'No of Years' into the actual year in the future.
        var year = new Date().getFullYear() + parseInt(years);
        var resultAmount = p * rate * .01 * years;
        // Making the last word of each of these spands to be highlighted.
        var resultTest = "If you deposit " + "<span class='highlight'>" + p + ",</span>" + "<br />";
        var resultTest1 = "at an interest rate of " + "<span class='highlight'>" + rate + "%.</span>" + "<br />";
        var resultTest2 = "You will receive an amount of " + "<span class='highlight'>" + Math.round(resultAmount) + ",</span>" + "<br />";
        var resultTest3 = "In the year " + "<span class='highlight'>" + year + "</span>" + "<br />";
        var finalResultString = resultTest + resultTest1 + resultTest2 + resultTest3;

        document.getElementById("result").innerHTML = finalResultString;
    }
    else {
        // In order to calculate interest, mucst have a positive
        // principal to begin with. Alerting user.
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value + "%";

    document.getElementById("rate_val").innerText = rateval;
}