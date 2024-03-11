// Function to open the Ko-Fi donation page
function openDonatePage() {
    window.open('https://ko-fi.com/YOUR_USERNAME', '_blank');
}

// Add click event listener to the donate button
const donateBtn = document.querySelector('.donate-btn');
donateBtn.addEventListener('click', openDonatePage);