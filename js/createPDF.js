const API_URL = `http://localhost:5000/createPDF`;

export default function createPDF() {
    axios.post(API_URL)
        .then((res) => {
            console.log(res)
        })
        .catch((e) => {
            console.log(e)
        })
}
