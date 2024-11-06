<template>
    <div class="titulo">
        <div class="margem container">
            <div class="m-icone esquerda"><a @click="this.$router.back()" style="cursor: pointer;"
                    class="icone-voltar m-d"></a></div>
            <h2>Check-in</h2>
        </div>
    </div>
    <div class="margem container">
        <div class="bloco margem">
            <TabelaItens :itens="lista" :labels="labels" @editar="editar" />
        </div>
    </div>
</template>

<script>
import TabelaItens from '@/components/tabelas/TabelaItens.vue';
import serviceDados from '@/services/serviceDados'
export default {
    components: {
        TabelaItens,
    },
    data() {
        return {
            lista: [],
            labels: [],
        }
    },
    mounted() {
        this.getHospedes()
    },
    methods: {
        editar(item) {
            var id = item.id
            this.$router.push({ name: 'CheckInView', params: { id } })
        },
        async getHospedes() {
            this.lista = await serviceDados.getHospedes().lista
            this.labels = await serviceDados.getHospedes().labels
            this.filtrarHospedes()
        },
        filtrarHospedes() {
            this.lista = this.lista.filter(item => item.status == 'Saída Temporária' || item.status == 'Entrada Pendente')
        }
    }
}
</script>

<style scoped></style>