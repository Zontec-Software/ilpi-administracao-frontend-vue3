<template>
    <div @dragover.prevent="handleDragOver" @drop="removerDeQuarto" class="bloco2 margem">
        <h3>Hóspedes Sem Quarto</h3>
        <div class="containerSemQuarto">
            <div v-for="hospede in hospedesSemQuarto" :key="hospede.id" class="hospede-info" draggable="true"
                @dragstart="selecionarHospede(hospede)">
                <!-- <img :src="require(`@/assets/img/${hospede.foto}`)" alt="Foto do Hóspede" class="hospede-foto" /> -->
                <img :src="hospede.foto" alt="Foto do Hóspede" class="hospede-foto" />
                <span class="hospede-nome">{{ hospede.nome }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['hospedesSemQuarto'],
    emits: ['selecionarHospede', 'removerDeQuarto'],
    methods: {
        selecionarHospede(hospede) {
            this.$emit('selecionarHospede', hospede);
        },
        handleDragOver(event) {
            event.preventDefault();
        },
        removerDeQuarto() {
            this.$emit('removerDeQuarto');
        },
    },
};
</script>
<style>
.containerSemQuarto {
    display: flex;

    && .hospede-info {
        margin-left: .5rem
    }
}
</style>