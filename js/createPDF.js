const API_URL = `https://cv-server-dtfy.onrender.com/createPDF`;

export default function createPDF() {
    const loader = document.querySelector('.loader');
    const downloadPdf = document.querySelector('.download-pdf');

    const animation = lottie.loadAnimation({
        container: loader,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './assets/animation/loader_1.json',
    });

    downloadPdf.style.display = 'none';
    loader.style.display= 'block';
    animation.setSpeed(0.8);
    animation.play();

    fetch(API_URL, {
        method: 'GET',
    }).then(async res => {
        return res
            .arrayBuffer()
                .then(res => {
                    const blob = new Blob([res], { type: 'application/pdf' });
                    saveAs(blob, 'CV.pdf');
                })
                .catch((e) => {
                    alert(e)
                })
    }).catch((e) => {
        alert(e)
    }).finally(() => {
        animation.destroy();
        loader.style.display= 'none';
        downloadPdf.style.display = 'block';
    })
}
