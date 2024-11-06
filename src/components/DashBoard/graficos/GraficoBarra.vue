<template>
    <div>
        <Bar :options="options" :data="data" />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'GraficoBarra',
    components: { Bar },
    data() {
        return {
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [{
                    label: 'Tempo de atividade física',
                    data: [5000, 7500, 8200, 6000, 9100, 7300]
                }]
            },
            options: {
                responsive: true
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>