<template>
    <div>
        <Pie :data="data" :options="options" />
    </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'GraficoPizza',
    components: {
        Pie
    },
    data() {
        return {
            data: {
                labels: ['Sono Leve', 'Sono Profundo', 'REM'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
                        data: [40, 35, 25]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Habitos de sono'
                    }
                }
            }
        }
    }
}
</script>