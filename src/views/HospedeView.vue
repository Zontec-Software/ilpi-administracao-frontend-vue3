<template>
    <div class="titulo">
        <div class="margem container">
            <div class="m-icone esquerda"><a @click="this.$router.back()" style="cursor: pointer;"
                    class="icone-voltar m-d"></a></div>
            <div class="direita">
                <div class="tags">
                    <a class="bg-sucesso" @click="tipoModal = 1, showModal = true">Administrar Medicamento</a>
                    <a class="bg-ok" @click="tipoModal = 2, showModal = true">Registrar Consulta</a>
                    <a class="bg-erro" @click="tipoModal = 3, showModal = true">Ficha Psicológica</a>
                </div>
            </div>
            <h2>Hospede {{ item.nomeCompleto }}</h2>
        </div>
    </div>
    <div class="margem container">
        <div class="margem bloco">
            <h2>Dados</h2>
            <fieldset class="grid-3 margem">
                <div v-for="label, index in labels" :key="index">
                    <label>{{ label.label }}</label>
                    <input v-if="label.chave !== 'quarto'" :type="label.type" v-model="item[label.chave]" />

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
        </div>
        <div class="margem bloco">
            <h2>Agenda</h2>
            <CalendarioComponent />
        </div>
        <br>
        <div class="margem bloco">
            <h2>Dados médicos</h2>
            <DashBoardComponent />
        </div>
    </div>

    <ModalAdministrarMedicamento v-if="showModal && tipoModal == 1" @fecharModal="showModal = false" />
    <ModalRegistrarConsulta v-if="showModal && tipoModal == 2" @fecharModal="showModal = false" />
    <ModalFichaPsicologica v-if="showModal && tipoModal == 3" @fecharModal="showModal = false" />
</template>
<script>
import CalendarioComponent from '@/components/calendario/CalendarioComponent.vue';
import DashBoardComponent from '@/components/DashBoard/DashBoardComponent.vue';
import ModalAdministrarMedicamento from '@/components/modais/modalAdministrarMedicamento.vue';
import ModalFichaPsicologica from '@/components/modais/modalFichaPsicologica.vue';
import ModalRegistrarConsulta from '@/components/modais/modalRegistrarConsulta.vue';
import serviceDados from '@/services/serviceDados'

export default {
    name: 'DadosHospede',
    components: {
        CalendarioComponent,
        DashBoardComponent,
        ModalAdministrarMedicamento,
        ModalRegistrarConsulta,
        ModalFichaPsicologica
    },
    props: {
        hospedeId: { Required: false },
    },
    data() {
        return {
            showModal: false,
            tipoModal: null,
            labels: serviceDados.getHospedes().labels,
            lista: serviceDados.getHospedes().lista,
            item: {},
            showCalendario: false
        }
    },
    mounted() {
        this.item = this.lista.find(item => item.id == this.hospedeId)
    },
}
</script>
<style scoped>
.calendario {
    font-size: 25px;
}

.calendario:hover {
    transition: all 100ms linear;
    font-size: 27px;
    cursor: pointer;
}
</style>