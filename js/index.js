import createPDF from "./createPDF.js";

const downloadButton = document.querySelector('.download-pdf');

window.addEventListener('load', () => {
    downloadButton.addEventListener('click', () => {
        createPDF();
    })
})


