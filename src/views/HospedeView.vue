<template>
    <div class="titulo">
        <div class="margem container alinha-v">
            <a @click="this.$router.back()" style="cursor: pointer;" class="icone-voltar"></a><h2>Hospede {{ item.nomeCompleto }}</h2>
        </div>
    </div>
    <div class="margem container">
        <div class="margem bloco">
            <fieldset class="grid-3 margem">
                <div v-for="label, index in labels" :key="index">
                    <label>{{ label.label }}</label>
                    <input v-if="label.chave !== 'quarto'" type="text" v-model="item[label.chave]" />

                    <select v-if="label.chave == 'quarto'" v-model="item[label.chave]">
                        <option v-for="(item, index) in Array.from({ length: 21 }, (_, i) => 100 + i)" :key="index">
                            {{ item }}
                        </option>
                    </select>
                </div>
            </fieldset>
            <div class="margem">
                <h3>Alertas</h3>
                <div class="tags" style="max-width: 100%;">
                    <span><a>Risco de queda</a></span>
                    <a>Controle de Hidratação</a>
                    <a>Controle de Glicose</a>
                    <a>Habitos de Sono</a>
                    <a>Ausência de Atividades</a>
                    <a>+</a>
                </div>
            </div>
            <CalendarioComponent />
        </div>
    </div>
</template>
<script>
import CalendarioComponent from '@/components/calendario/CalendarioComponent.vue';
import serviceDados from '@/services/serviceDados'

export default {
    name: 'DadosHospede',
    components: {
        CalendarioComponent
    },
    props: {
        hospedeId: { Required: false },
    },
    data() {
        return {
            labels: serviceDados.getHospedes().labels,
            lista: serviceDados.getHospedes().lista,
            item: {},
            showCalendario: false
        }
    },
    mounted() {
        this.item = this.lista.find(item => item.id == this.hospedeId)
    },
    methods: {
        fecharModal() {
            this.$emit('fecharModal')
        }
    }
}
</script>
<style>
.calendario {
    font-size: 25px;
}

.calendario:hover {
    transition: all 100ms linear;
    font-size: 27px;
    cursor: pointer;
}
</style>