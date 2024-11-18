function designPrimer() {
    const sequence = document.getElementById("sequence").value.toUpperCase().replace(/[^ATGC]/g, "");
    const minLength = parseInt(document.getElementById("minLength").value);
    const maxLength = parseInt(document.getElementById("maxLength").value);
    const minGC = parseInt(document.getElementById("minGC").value);
    const maxGC = parseInt(document.getElementById("maxGC").value);
    const minTm = parseInt(document.getElementById("minTm").value);
    const maxTm = parseInt(document.getElementById("maxTm").value);
    const resultsDiv = document.getElementById("results");

    // Validate input fields
    if (!sequence || isNaN(minLength) || isNaN(maxLength) || isNaN(minGC) || isNaN(maxGC) || isNaN(minTm) || isNaN(maxTm)) {
        resultsDiv.innerHTML = "Please fill in all fields with valid values.";
        return;
    }

    console.log("Sequence:", sequence);
    console.log("Parameters:", { minLength, maxLength, minGC, maxGC, minTm, maxTm });

    let primers = [];

    // Loop through sequence to generate primers based on the input parameters
    for (let i = 0; i <= sequence.length - minLength; i++) {
        for (let j = minLength; j <= maxLength; j++) {
            const primer = sequence.substring(i, i + j);
            if (primer.length < minLength || primer.length > maxLength) continue;

            // Calculate GC content
            const gcContent = ((primer.match(/[GC]/g) || []).length / primer.length) * 100;

            // Check GC content range
            if (gcContent < minGC || gcContent > maxGC) continue;

            // Calculate melting temperature (Tm)
            const tm = 4 * (primer.match(/[GC]/g) || []).length + 2 * (primer.match(/[AT]/g) || []).length;

            // Check Tm range
            if (tm < minTm || tm > maxTm) continue;

            primers.push({
                sequence: primer,
                position: i + 1,
                length: primer.length,
                gcContent: gcContent.toFixed(2),
                tm: tm.toFixed(2),
            });
        }
    }

    // Debugging: log the primers array
    console.log("Primers found:", primers);

    // If no primers are found, show an error message
    if (primers.length === 0) {
        resultsDiv.innerHTML = "No primers found matching the specified parameters.";
        return;
    }

    // Display the primer results
    let resultsHTML = "<h3>Primer Results:</h3><ul>";
    primers.forEach(primer => {
        resultsHTML += `
            <li>
                <strong>Sequence:</strong> ${primer.sequence} <br>
                <strong>Position:</strong> ${primer.position} <br>
                <strong>Length:</strong> ${primer.length} <br>
                <strong>GC Content:</strong> ${primer.gcContent}% <br>
                <strong>Tm:</strong> ${primer.tm}°C
            </li><br>`;
    });
    resultsHTML += "</ul>";

    resultsDiv.innerHTML = resultsHTML;
}
