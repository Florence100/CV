const API_URL = `https://cv-server-dtfy.onrender.com/createPDF`;

export default function createPDF() {
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
    })
}
