<template>
    <div class="titulo">
        <div class="margem container">
            <div class="m-icone esquerda"><a @click="this.$router.back()" style="cursor: pointer;"
                    class="icone-voltar m-d"></a></div>
            <h2>Gestão de Quartos</h2>
        </div>
    </div>
    <div class="margem container">
        <div class="bloco margem">
            <div>
                <SemQuarto :hospedesSemQuarto="hospedesSemQuarto" @selecionarHospede="selecionarHospede"
                    @removerDeQuarto="removerDeQuarto" />
            </div>
            <br>
            <div class="bloco2 margem">
                <label>
                    <h3>Quartos</h3>
                </label>
                <LayoutQuartos :quartos="quartos" @mostrarQuarto="mostrarQuarto" @selecionarHospede="selecionarHospede"
                    @atualizarQuartos="atualizarQuartos" @definirQuarto="definirQuarto" />
            </div>
        </div>
    </div>
    <ModalNovoItem v-if="quartoSelecionado" :labels="labels" :itemEditado="quartoSelecionado"
        @fecharModal="quartoSelecionado = null" />
</template>

<script>
import ModalNovoItem from '@/components/modais/modalNovoItem.vue';
import LayoutQuartos from '@/components/quartos/LayoutQuartos.vue';
import SemQuarto from '@/components/quartos/SemQuarto.vue';
import serviceDados from '@/services/serviceDados'

export default {
    components: {
        LayoutQuartos,
        ModalNovoItem,
        SemQuarto
    },
    data() {
        return {
            quartos: [],
            labels: null,
            hospedesSemQuarto: [
                { id: 47, nome: 'Ana Maria Rosa Assunção', foto: 'https://randomuser.me/api/portraits/med/women/17.jpg' },
                { id: 48, nome: 'Carlos Alberto Assis Mourão', foto: 'https://randomuser.me/api/portraits/med/men/22.jpg' },
            ],
            quartoSelecionado: null,
            hospedeSelecionado: null,
        }
    },
    mounted() {
        this.quartos = serviceDados.getQuartos().lista
        this.labels = serviceDados.getQuartos().labels
    },
    methods: {
        selecionarHospede(item) {
            this.hospedeSelecionado = item
        },
        atualizarQuartos(item) {
            this.quartos = item;
        },
        mostrarQuarto(item) {
            this.quartoSelecionado = item;
        },
        definirQuarto(item) {
            if (!this.hospedeSelecionado) return;

            const quartosAtualizados = this.quartos.map((quarto) => {
                if (quarto.id === item.id) {
                    return { ...quarto, hospedes: [...quarto.hospedes, this.hospedeSelecionado] };
                }
                return quarto;
            });

            this.hospedesSemQuarto = this.hospedesSemQuarto.filter(
                (guest) => guest.id !== this.hospedeSelecionado.id
            );

            this.atualizarQuartos(quartosAtualizados);
            this.hospedeSelecionado = null;
        },
        removerDeQuarto() {
            if (!this.hospedeSelecionado || this.hospedesSemQuarto.includes(this.hospedeSelecionado)) return;

            this.quartos = this.quartos.map((quarto) => {
                if (quarto.hospedes.some((guest) => guest.id === this.hospedeSelecionado.id)) {
                    return {
                        ...quarto,
                        hospedes: quarto.hospedes.filter((guest) => guest.id !== this.hospedeSelecionado.id),
                    };
                }
                return quarto;
            });
            this.hospedesSemQuarto = [...this.hospedesSemQuarto, this.hospedeSelecionado];
            this.hospedeSelecionado = null;
        }
    },
};
</script>