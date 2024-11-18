function calculateDilution() {
    const C1 = parseFloat(document.getElementById("stockConcentration").value);
    const C2 = parseFloat(document.getElementById("finalConcentration").value);
    const V2 = parseFloat(document.getElementById("finalVolume").value);

    if (C1 && C2 && V2) {
        if (C2 > C1) {
            document.getElementById("result").innerHTML = "Error: Final concentration cannot be higher than stock concentration.";
            return;
        }
        const V1 = (C2 * V2) / C1; // Volume of stock solution
        const diluent = V2 - V1; // Volume of diluent

        document.getElementById("result").innerHTML = `
            <p><strong>Stock Solution (V<sub>1</sub>):</strong> ${V1.toFixed(2)} mL</p>
            <p><strong>Diluent Volume:</strong> ${diluent.toFixed(2)} mL</p>
        `;
    } else {
        document.getElementById("result").innerHTML = "Please fill in all fields with valid numbers.";
    }
}
