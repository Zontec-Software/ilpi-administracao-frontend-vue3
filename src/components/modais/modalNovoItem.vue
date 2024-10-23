<template>
    <div class="modal-mask" @click="fecharModal">
        <div class="jm" style="min-width: 30vw; min-height: 40vh;" @click.stop>
            <div class="margem">
                <div style="display: flex; justify-content: space-between;">
                    <h3>Dados</h3>
                    <div class="calendario alinha-centro alinha-v">
                        <i v-if="tipo == 'Hospede'" title="Calendário do Hospede" class="bi bi-calendar-week"></i>
                    </div>
                </div>
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
                <div v-if="tipo == 'Hospede'">
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
                <div class="submit"><button @click="fecharModal">Salvar</button><button @click="fecharModal"
                        class="acao-secundaria">Cancelar</button></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modalNovoItem',
    props: {
        tipo: { Required: true },
        itemEditado: { Required: false },
        labels: { Required: true }
    },
    data() {
        return {
            item: this.itemEditado ? this.itemEditado : {}
        }
    },
    methods: {
        fecharModal() {
            this.item = {}
            this.$emit('fecharModal')
        }
    }
}
</script>
<style>
.tags {
    a {
        cursor: pointer;
    }
}

.calendario {
    width: 3rem;
    height: 3rem;
    padding: 2px;
    border-radius: 50%;
    background-color: var(--cor-primaria);
    i {
        font-size: 25px;
        color: var(--cor-bg);
    }
}

.calendario:hover {
    transition: all 100ms linear;
    transform: scale(1.1);
    cursor: pointer;
}
</style>