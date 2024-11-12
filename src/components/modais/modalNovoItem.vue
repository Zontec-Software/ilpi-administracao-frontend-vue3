<template>
    <div class="modal-mask" @click="fecharModal">
        <div class="jm" style="min-width: 30vw; min-height: 40vh;" @click.stop>
            <div class="margem">
                <fieldset class="grid-3 margem">
                    <div v-for="label, index in labels" :key="index">
                        <label>{{ label.label }}</label>
                        <input v-if="label.chave !== 'quarto' && label.chave !== 'hospedes'" :type="label.type"
                            v-model="item[label.chave]" />
                        <select v-if="label.chave == 'quarto'" v-model="item[label.chave]">
                            <option v-for="(item, index) in Array.from({ length: 21 }, (_, i) => 100 + i)" :key="index">
                                {{ item }}
                            </option>
                        </select>
                        <div v-if="label.chave == 'hospedes'">
                            <ul
                                style="list-style: none; display: flex; padding: 12px 16px; border: 1px solid var(--cor-separador); border-radius: 6px;min-height: 1.5rem;">
                                <li v-for="i, index in item[label.chave]" :key="index" class="hospede">
                                    <span v-if="(index + 1) == item[label.chave].length && index !== 0"
                                        style="margin-right: .5rem;">,</span>
                                    <span>{{ i.nome }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <div class="submit"><button class="button" @click="fecharModal">Salvar</button><button
                        @click="fecharModal" class="acao-secundaria button">Cancelar</button></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modalNovoItem',
    props: {
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

.hospede:hover {
    cursor: pointer;
    color: var(--cor-primaria);
    text-decoration: underline
}
</style>