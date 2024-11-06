<template>
    <div>
        <Scatter :data="data" :options="options" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Scatter } from 'vue-chartjs'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Scatter
    },
    data() {
        return {
            data: {
                datasets: [
                    {
                        label: 'Saturação de Oxigênio (SpO2)',
                        fill: false,
                        borderColor: '#f87979',
                        backgroundColor: '#f87979',
                        data: [
                            { x: 1, y: 96 },
                            { x: 2, y: 97 },
                            { x: 3, y: 94 },
                            { x: 4, y: 95 },
                            { x: 5, y: 96 },
                            { x: 6, y: 98 }
                        ]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
}
</script>