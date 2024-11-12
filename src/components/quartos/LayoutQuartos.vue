<template>
    <div class="layout-container">
        <div v-for="quarto in quartos" :key="quarto.id"
            :class="quarto.capacidade < quarto.hospedes.length ? 'superLotação' : ''" class="quarto"
            @click="selecionarQuarto(quarto)" @dragover.prevent="handleDragOver" @drop="definirQuarto(quarto)">
            <h3 class="quarto-numero">Quarto {{ quarto.numero }}</h3>
            <p style="display: none;">Capacidade ultrapassada</p>
            <div v-for="hospede in quarto.hospedes" :key="hospede.id" draggable="true"
                @dragstart="selecionarHospede(hospede, quarto.id)" class="hospede-info alinha-v">
                <!-- <img :src="require(`@/assets/img/${hospede.foto}`)" alt="Foto do Hóspede" class="hospede-foto" /> -->
                <img :src="hospede.foto" alt="Foto do Hóspede" class="hospede-foto" />
                <span class="hospede-nome">{{ hospede.nome }}</span>
            </div>
            <div v-for="vaga in quantidadeDeVagas(quarto)" :key="vaga" class="hospede-info alinha-v"
                style="opacity: .7;">
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
            IdQuartoOrigem: null,
            teste: ''
        }
    },
    methods: {
        quantidadeDeVagas(quarto) {
            var vagas = quarto.capacidade - quarto.hospedes.length
            if (vagas > 0) {
                return vagas
            } else {
                return 0
            }
        },
        selecionarQuarto(item) {
            this.$emit('mostrarQuarto', item);
        },
        selecionarHospede(hospede, IdQuarto) {
            this.$emit('selecionarHospede', hospede);
            this.hospedeSelecionado = hospede;
            this.IdQuartoOrigem = IdQuarto;
        },
        handleDragOver(event) {
            event.preventDefault();
        },
        definirQuarto(novoQuarto) {
            if (!this.hospedeSelecionado) {
                this.$emit('definirQuarto', novoQuarto);
            } else if (this.IdQuartoOrigem !== novoQuarto.id) {
                this.teste = novoQuarto;
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
                this.IdQuartoOrigem = null;
                this.hospedeSelecionado = null;
            }
        },
    }
};
</script>
<style>
.superLotação {
    border: 1px solid var(--cor-erro) !important;

    p {
        display: flex !important;
        color: var(--cor-bg);
        font-size: 16px;
        background-color: var(--cor-erro);
        border-radius: 6px;
        padding: 0px 5px;
    }
}

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