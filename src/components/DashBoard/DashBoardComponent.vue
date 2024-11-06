<template>
    <div class="grid-2">
        <component v-for="(chart, index) in chartComponents" :is="chart" :key="index" class="margem bloco2" />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'DashBoardComponent',
    components: {
        GraficoBarra: defineAsyncComponent(() => import('./graficos/GraficoBarra.vue')),
        GraficoLinha: defineAsyncComponent(() => import('./graficos/GraficoLinha.vue')),
        GraficoDispersao: defineAsyncComponent(() => import('./graficos/GraficoDispersao.vue')),
        GraficoArea: defineAsyncComponent(() => import('./graficos/GraficoArea.vue')),
        GraficoRadar: defineAsyncComponent(() => import('./graficos/GraficoRadar.vue')),
        GraficoPizza: defineAsyncComponent(() => import('./graficos/GraficoPizza.vue'))
    },
    data() {
        return {
            chartComponents: [
                'GraficoBarra',
                'GraficoRadar',
                'GraficoLinha',
                'GraficoDispersao',
                'GraficoArea',
                'GraficoPizza'
            ]
        };
    }
};
</script>
