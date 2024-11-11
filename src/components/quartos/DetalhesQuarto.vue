<template>
    <div class="bloco margem">
        <div class="alinha-centro">
            <h3>Quarto {{ quartoSelecionado.numero }}</h3> <i
                style="position: absolute; right: 1rem; top: 1rem; font-size: 20px; color: red; cursor: pointer;"
                title="Fechar Detalhes" class="bi bi-x-circle" @click="$emit('fecharDetalhes')"></i>
        </div>
        <fieldset class="grid-2">
            <div v-for="label, index in labels" :key="index">
                <label>{{ label.label }}</label>
                <input v-if="label.chave !== 'quarto'" :type="label.type" :value="quartoSelecionado[label.chave]" />
                <select v-if="label.chave == 'quarto'" :value="quartoSelecionado[label.chave]">
                    <option v-for="(item, index) in Array.from({ length: 21 }, (_, i) => 100 + i)" :key="index">
                        {{ item }}
                    </option>
                </select>
            </div>
        </fieldset>
    </div>
</template>

<script>
export default {
    props: ['quartoSelecionado', 'labels']
};
</script>