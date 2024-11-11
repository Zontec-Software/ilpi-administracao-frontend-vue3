<template>
    <div class="layout-container">
        <div v-for="quarto in quartos" :key="quarto.id" class="quarto" @click="selecionarQuarto(quarto)"
            @dragover.prevent="handleDragOver" @drop="definirQuarto(quarto)">
            <div class="quarto-numero">{{ quarto.numero }}</div>
            <div v-for="hospede in quarto.hospedes" :key="hospede.id" draggable="true"
                @dragstart="selecionarHospede(hospede, quarto.id)" @dragend="limparSeleção"
                class="hospede-info alinha-v">
                <!-- <img :src="require(`@/assets/img/${hospede.foto}`)" alt="Foto do Hóspede" class="hospede-foto" /> -->
                <img :src="hospede.foto" alt="Foto do Hóspede" class="hospede-foto" />
                <span class="hospede-nome">{{ hospede.nome }}</span>
            </div>
            <div v-if="parseInt(quarto.lotacao.split('/')[1]) > quarto.hospedes.length" class="hospede-info alinha-v" style="opacity: .7;">
                <img src="https://cdn-icons-png.flaticon.com/128/709/709722.png"
                    style="border: 1px solid var(--cor-separador)" alt="Foto" class="hospede-foto" />
                <span class="hospede-nome">
                    Vago
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quartos: Array,
    },
    data() {
        return {
            hospedeSelecionado: null,
            IdQuartoOrigem: null
        }
    },
    methods: {
        selecionarQuarto(item) {
            this.$emit('mostrarQuarto', item);
        },
        selecionarHospede(hospede, IdQuarto) {
            this.$emit('selecionarHospede', hospede);
            this.hospedeSelecionado = hospede;
            this.IdQuartoOrigem = IdQuarto;
        },
        limparSeleção() {
            this.hospedeSelecionado = null;
            this.IdQuartoOrigem = null;
        },
        handleDragOver(event) {
            event.preventDefault();
        },
        definirQuarto(novoQuarto) {
            if (!this.hospedeSelecionado) {
                this.$emit('definirQuarto', novoQuarto);
            } else if (this.IdQuartoOrigem !== novoQuarto.id) {
                const quartosAtualizados = this.quartos.map((q) => {
                    if (q.id === this.IdQuartoOrigem) {
                        return { ...q, hospedes: q.hospedes.filter((hospede) => hospede !== this.hospedeSelecionado) };
                    }
                    if (q.id === novoQuarto.id) {
                        return { ...q, hospedes: [...q.hospedes, this.hospedeSelecionado] };
                    }
                    return q;
                });

                this.$emit('atualizarQuartos', quartosAtualizados);
            }
            this.limparSeleção();
        },
    }
};
</script>
<style>
.layout-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
}

.quarto {
    min-height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--cor-separador);
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0px 4px 8px var(--cor-cinza2);
    cursor: pointer;
}

.quarto-numero {
    font-weight: bold;
    margin-bottom: 8px;
}

.hospede-info {
    border: 1px solid var(--cor-separador);
    border-radius: 6px;
    width: 12rem;
    padding: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 8px
}

.hospede-foto {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
}

.hospede-nome {
    font-size: 14px;
    margin-left: .5rem;
}
</style>