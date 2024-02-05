// function convertHTMLToPDF() {
export function createPDF() {
    // const pxToIn = 96.358;
    // const pageWidthPx = 935;
    // const pageWidthIn = pageWidthPx / pxToIn;
    // const pageHeightPx = page.offsetHeight;
    // const pageHeightIn = pageHeightPx / pxToIn;

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF('p', 'px', 'a4');
    doc.addFont('./assets/fonts/raleway/Raleway-ExtraLight.ttf', 'Raleway-ExtraLight', 'normal');
    doc.addFont('./assets/fonts/roboto/Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
    doc.addFont('./assets/fonts/roboto/Roboto-Bold.ttf', 'Roboto-Bold', 'normal');
    doc.setFont('Raleway-ExtraLight');
    doc.setFont('Roboto-Regular');
    doc.setFont('Roboto-Bold');

    const pdfjs = document.getElementById('page');

    doc.html(pdfjs, {
        callback: function(doc) {
          doc.save("CV.pdf");
        },
        x: 0,
        y: 0,
        windowWidth: 935,
        width: 445,
    });
}