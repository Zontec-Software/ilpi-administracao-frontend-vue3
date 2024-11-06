<template>
    <div class="titulo">
        <div class="margem container">
            <div class="m-icone esquerda"><a @click="this.$router.back()" style="cursor: pointer;"
                    class="icone-voltar m-d"></a></div>
            <h2>Check-in de Retorno</h2>
        </div>
    </div>
    <div class="margem container">
        <div class="bloco margem">
            <h3>Dados do Hospede</h3>
            <fieldset class="grid-3">
                <div v-for="i, index in labels" :key="index">
                    <label>{{ i.label }}</label>
                    <input :type="i.type" :value="lista[i.chave]">
                </div>
            </fieldset>
        </div>
        <div class="bloco margem" v-for="i, index in labelsFormulario" :key="index">
            <h3>{{ i.assunto }}</h3>
            <fieldset class="grid-3">
                <div v-for="item, index in i.dados" :key="index">
                    <label>{{ item.label }}</label>
                    <input :type="item.type" v-model="formulario[item.chave]"
                        v-if="item.type !== 'select' && item.type !== 'radio' && item.type !== 'textarea' && item.type !== 'checkbox'">
                    <select v-if="item.type == 'select'" v-model="formulario[item.chave]">
                        <option v-for="option, index in item.options" :key="index">
                            {{ option }}
                        </option>
                    </select>
                    <div class="tags" v-if="item.type == 'radio' || item.type == 'checkbox'">
                        <a v-for="option, index in item.options" :key="index" @click="formulario[item.chave] = option"
                            :class="formulario[item.chave] == option ? 'ativo' : ''">{{ option }}</a>
                    </div>
                    <textarea v-if="item.type == 'textarea'" v-model="formulario[item.chave]"></textarea>
                </div>
            </fieldset>
        </div>
    </div>
</template>
<script>
import serviceDados from '@/services/serviceDados'
export default {
    data() {
        return {
            lista: [],
            labels: [],
            labelsFormulario: [],
            formulario: {}
        }
    },
    props: {
        id: {
            Required: true
        }
    },
    async mounted() {
        this.labels = await serviceDados.getHospedes().labels
        this.lista = await serviceDados.getHospedes().lista.find(item => item.id == this.id)
    },
    created() {
        this.labelsFormulario = serviceDados.getFormulario()
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>