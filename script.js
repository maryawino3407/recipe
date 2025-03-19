// Simple JavaScript to enhance your portfolio

// Function to display a welcome alert when the page loads
window.onload = function() {
    alert("Welcome to Ezekiel's Portfolio!");
};

// Function to change the background color of the hero section
function changeHeroColor() {
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundColor = '#add8e6'; // Light blue color
}

// Adding an event listener to change the color when a button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.createElement('button');
    colorButton.textContent = "Change Hero Color";
    colorButton.style.margin = "20px";
    colorButton.onclick = changeHeroColor;
    document.body.appendChild(colorButton);
});
