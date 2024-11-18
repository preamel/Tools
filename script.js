function calculate() {
    const c1 = parseFloat(document.getElementById("c1").value);
    const v1 = parseFloat(document.getElementById("v1").value);
    const c2 = parseFloat(document.getElementById("c2").value);
    const v2 = parseFloat(document.getElementById("v2").value);

    let resultText = "";

    if (!isNaN(c1) && !isNaN(v1) && !isNaN(c2)) {
        // Calculate V2
        const v2 = (c1 * v1) / c2;
        resultText = `Final Volume (V<sub>2</sub>): ${v2.toFixed(2)} units`;
    } else if (!isNaN(c1) && !isNaN(v2) && !isNaN(c2)) {
        // Calculate V1
        const v1 = (c2 * v2) / c1;
        resultText = `Volume of Stock Solution (V<sub>1</sub>): ${v1.toFixed(2)} units`;
    } else if (!isNaN(v1) && !isNaN(v2) && !isNaN(c2)) {
        // Calculate C1
        const c1 = (c2 * v2) / v1;
        resultText = `Stock Concentration (C<sub>1</sub>): ${c1.toFixed(2)} units`;
    } else if (!isNaN(c1) && !isNaN(v1) && !isNaN(v2)) {
        // Calculate C2
        const c2 = (c1 * v1) / v2;
        resultText = `Final Concentration (C<sub>2</sub>): ${c2.toFixed(2)} units`;
    } else {
        resultText = "Please provide exactly three values to calculate the fourth.";
    }

    document.getElementById("result").innerHTML = resultText;
}
