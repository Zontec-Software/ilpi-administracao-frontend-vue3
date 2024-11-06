<template>
    <div>
        <Line :options="options" :data="data" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    name: 'GraficoBarra',
    components: { Line },
    data() {
        return {
            data: {
                labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
                datasets: [
                    {
                        label: 'Frequência Cardíaca Média',
                        backgroundColor: '#f87979',
                        data: [72, 75, 73, 80, 76, 81, 75]
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        min: 50,
                        max: 100,
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>