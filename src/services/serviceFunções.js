const funçoes = {
    formatarData(data) {
        if (data) {
            var date = data.split('-')
            const dataFormatada = `${date[2]}/${date[1]}/${date[0]}`
            return dataFormatada
        }
    }
}
export default funçoes