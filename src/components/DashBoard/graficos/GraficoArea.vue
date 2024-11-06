<template>
    <div>
        <PolarArea :data="data" :options="options" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { PolarArea } from 'vue-chartjs'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default {
    name: 'GraficoArea',
    components: {
        PolarArea
    },
    data() {
        return {
            data: {
                labels: ['6h', '9h', '12h', '15h', '18h', '21h'],
                datasets: [
                    {
                        label: 'Antes da Refeição',
                        backgroundColor: 'rgba(179,181,198,0.5)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [85, 90, 95, 100, 90, 85]
                    },
                    {
                        label: 'Após a Refeição',
                        backgroundColor: 'rgba(255,99,132,0.5)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [110, 120, 130, 125, 115, 110]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        pointLabels: {
                            display: true,
                            centerPointLabels: true,
                            font: {
                                size: 15
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Glicose no Sangue'
                    }
                }
            }
        }
    }
}
</script>