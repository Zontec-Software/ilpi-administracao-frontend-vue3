<template>
    <div class="margem">
        <div style="display: flex; justify-content: space-between;">
            <h3>{{ showCalendario ? 'Agenda do Hospede' : 'Dados' }}</h3>
            <div class="calendario alinha-centro alinha-v" :class="showCalendario ? 'ativo' : ''">
                <i @click="showCalendario = !showCalendario" title="Calendário do Hospede"
                    class="bi bi-calendar-week"></i>
            </div>
        </div>
        <div v-if="!showCalendario">
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
            <div>
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
            <div class="submit">
                <button @click="fecharModal">Salvar</button>
                <button @click="fecharModal" class="acao-secundaria">Cancelar</button>
            </div>
        </div>
        <CalendarioComponent v-else />
    </div>
</template>
<script>
import CalendarioComponent from '../calendario/CalendarioComponent.vue';

export default {
    name: 'DadosHospede',
    components: {
        CalendarioComponent
    },
    props: {
        itemEditado: { Required: false },
        labels: { Required: true }
    },
    data() {
        return {
            item: this.itemEditado ? this.itemEditado : {},
            showCalendario: false
        }
    },
}
</script>
<style>
.ativo {
    background-color: var(--cor-primaria);
}

.calendario {
    width: 3rem;
    height: 3rem;
    padding: 2px;
    border-radius: 50%;

    i {
        font-size: 25px;
    }
}

.calendario:hover {
    transition: all 100ms linear;
    transform: scale(1.1);
    cursor: pointer;
}
</style>