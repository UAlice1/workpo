// Example: Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});
function downloadCV() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    const url = 'path/to/your/cv.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}