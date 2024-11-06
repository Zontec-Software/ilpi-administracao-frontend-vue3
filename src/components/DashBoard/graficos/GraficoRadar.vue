<template>
    <div>
        <Radar :data="data" :options="options" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

export default {
    name: 'GraficoRadar',
    components: {
        Radar
    },
    data() {
        return {
            data: {
                labels: ["Aula de Alongamento", "Oficina de Pintura", "Caminhada Guiada", "Sessão de Cinema", "Yoga para Idosos", "Leitura de Poesias", "Bingo Recreativo", "Oficina de Jardinagem", "Aula de Dança", "Grupo de Música"],
                datasets: [
                    // {
                    //     label: 'My First dataset',
                    //     backgroundColor: 'rgba(179,181,198,0.2)',
                    //     borderColor: 'rgba(179,181,198,1)',
                    //     pointBackgroundColor: 'rgba(179,181,198,1)',
                    //     pointBorderColor: '#fff',
                    //     pointHoverBackgroundColor: '#fff',
                    //     pointHoverBorderColor: 'rgba(179,181,198,1)',
                    //     data: [65, 59, 90, 81, 56, 55, 40]
                    // },
                    {
                        label: 'Participações por mês',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [10, 6, 8, 4, 15, 7, 4, 1, 9, 6]
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