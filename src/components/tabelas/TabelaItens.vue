<template>
    <table class="tabela">
        <tbody>
            <tr>
                <th v-for="(label, index) in labels" :key="index">
                    {{ label.label }}
                </th>
            </tr>
            <tr v-for="(item, index) in itens" :key="index" @click="editar(item)">
                <td v-for="(label, index) in labels" :key="index">
                    <div v-if="label.chave !== 'status' && label.chave !== 'dataNascimento' && label.chave !== 'validade'"
                        :style="{ 'text-align': (label.chave == 'nomeCompleto') ? 'left' : '' }">
                        {{ item[label.chave] }}
                    </div>
                    <div v-if="label.chave == 'dataNascimento' || label.chave == 'validade'">
                        {{ formatarData(item[label.chave]) }}
                    </div>
                    <div v-if="label.chave == 'status'">
                        <span class="chip"
                            :class="item.status == 'ativo' || item.status == 'desocupado' ? 'bg-sucesso' : item.status == 'afastado' ? 'bg-ok' : item.status == 'desligado' || item.status == 'ocupado' ? 'bg-erro' : item.status == 'inativo' ? 'bg-alerta' : 'bg-ok'">{{
                                item.status }}</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="paginacao">
        <a href="#" class="ativo">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <span>...</span>
        <a href="#">16</a>
    </div>
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