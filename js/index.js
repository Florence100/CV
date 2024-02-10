import createPDF from "./createPDF.js";

const downloadButton = document.querySelector('.download-pdf');

window.onload = function() {
    downloadButton.addEventListener('click', () => {
        console.log('click!')
        createPDF();
    })
}
