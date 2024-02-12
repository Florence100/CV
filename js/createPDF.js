const API_URL = `http://localhost:5000/createPDF`;

// export default function createPDF() {
//     axios.post(API_URL)
//         .then((res) => {
//             console.log('res:', res)
//         })
//         .catch((e) => {
//             console.log(e)
//         })
// }

export default function createPDF() {
    fetch(API_URL, {
        // data: {
        //     invoiceDetails,
        //     invoiceSettings,
        //     itemsDetails,
        //     organisationInfos,
        //     otherDetails,
        //     clientDetails
        // },
        method: 'POST'
    }).then(async res => {
        console.log('res:', res)
        return res
            .arrayBuffer()
            .then(res => {
                const blob = new Blob([res], { type: 'application/pdf' })
                saveAs(blob, 'invoice.pdf')
            })
            .catch(e => alert(e))
    })
}
