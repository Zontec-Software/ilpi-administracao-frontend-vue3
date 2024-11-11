<template>
    <table class="tabela">
        <tbody>
            <tr>
                <th v-for="(label, index) in labels" :key="index">
                    {{ label.label }}
                </th>
            </tr>
            <tr v-for="(item, index) in itens" :key="index" @click="editar(item)" style="cursor: pointer;">
                <td v-for="(label, index) in labels" :key="index">
                    <div v-if="label.chave !== 'status' && label.chave !== 'dataNascimento' && label.chave !== 'validade' && label.chave !== 'hospedes'"
                        :style="{ 'text-align': (label.chave == 'nomeCompleto') ? 'left' : '' }">
                        {{ item[label.chave] }}
                    </div>
                    <div v-if="label.chave == 'dataNascimento' || label.chave == 'validade'">
                        {{ formatarData(item[label.chave]) }}
                    </div>
                    <div v-if="label.chave == 'status'">
                        <span class="chip"
                            :class="item.status == 'Ativo' || item.status == 'Desocupado' ? 'bg-sucesso' : item.status == 'Afastado' ? 'bg-ok' : item.status == 'Desligado' || item.status == 'Ocupado' ? 'bg-erro' : item.status == 'Inativo' ? 'bg-alerta' : item.status == 'Entrada Pendente' ? 'bg-alerta' : 'bg-ok'">{{
                                item.status }}</span>
                    </div>
                    <div v-if="label.chave == 'hospedes'">
                        <ul style="list-style: none; display: flex;">
                            <li v-for="i, index in item[label.chave]" :key="index">
                                <span v-if="(index + 1) == item[label.chave].length && index !== 0"
                                    style="margin-right: .5rem;">,</span>
                                <span>{{ i.nome }}</span>
                            </li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import serviceFunções from '@/services/serviceFunções'
export default {
    name: 'TabelaItens',
    props: {
        itens: {
            Required: true
        },
        labels: {
            Required: true
        }
    },
    methods: {
        editar(item) {
            this.$emit('editar', item)
        },
        formatarData(date) {
            return serviceFunções.formatarData(date)
        }
    }
}
</script>
<style>
th,
td {
    text-align: center !important;
}
</style>