function updateColorDisplay() {
    const firstColor = document.getElementById('first-color');
    const secondColor = document.getElementById('second-color');
    const multiplierColor = document.getElementById('multiplier-color');
    
    document.getElementById('first-color-box').style.backgroundColor = firstColor.options[firstColor.selectedIndex].getAttribute('data-color');
    document.getElementById('second-color-box').style.backgroundColor = secondColor.options[secondColor.selectedIndex].getAttribute('data-color');
    document.getElementById('multiplier-color-box').style.backgroundColor = multiplierColor.options[multiplierColor.selectedIndex].getAttribute('data-color');
}

function calculateResistorValue() {
    const firstColor = parseInt(document.getElementById('first-color').value);
    const secondColor = parseInt(document.getElementById('second-color').value);
    const multiplier = parseInt(document.getElementById('multiplier-color').value);

    const resistorValue = (firstColor * 10 + secondColor) * multiplier;

    document.getElementById('result').textContent = `Resistor Value: ${formatResistorValue(resistorValue)} Ω`;
    displayColourBands(firstColor, secondColor, multiplier);
}

function formatResistorValue(value) {
    if (value >= 1000000000) {
        return (value / 1000000000).toFixed(1) + 'G';
    } else if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'k';
    }
    return value.toString();
}

function displayColourBands(first, second, multiplier) {
    const bandColors = [
        "#000000", "#7F3F00", "#D50000", "#FF6A00", "#FFEE00", "#00D500", 
        "#0000FF", "#8A2BE2", "#808080", "#FFFFFF"
    ];

    const firstColor = bandColors[first];
    const secondColor = bandColors[second];
    const multiplierColor = bandColors[logBase(multiplier)];

    const bandsContainer = document.getElementById('bands');
    bandsContainer.innerHTML = `
        <div class="color-band" style="background-color: ${firstColor};"></div>
        <div class="color-band" style="background-color: ${secondColor};"></div>
        <div class="color-band" style="background-color: ${multiplierColor};"></div>
    `;
}

function logBase(n) {
    return Math.log10(n);
}

window.onload = updateColorDisplay;
