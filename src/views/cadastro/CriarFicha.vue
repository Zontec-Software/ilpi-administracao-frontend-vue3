<template>
    <div class="titulo">
        <div class="margem ">
            <div class="m-icone esquerda"><a @click="this.$router.back()" style="cursor: pointer;"
                    class="icone-voltar m-d"></a></div>
            <h2>Criar Ficha</h2>
        </div>
    </div>
    <div class="margem">
        <button class="button" style="position: absolute; right: 1rem; z-index: 99999;" @click="saveSchema">Salvar</button>
        <editarFichaComponent :schema="initialSchema" ref="formEditor" />
    </div>
</template>

<script>
import editarFichaComponent from '@/components/fichas/editarFichaComponent.vue'
export default {
    components: {
        editarFichaComponent
    },
    data() {
        return {
            initialSchema: {
                type: "default",
                components: [
                    {
                        text: "# Teste Criação de Formulário\n\nAdicione os campos abaixo",
                        type: "text"
                    },
                    {
                        key: "textField",
                        type: "textfield",
                        label: "Seu Nome",
                        description: "Digite seu nome completo",
                    },
                ],
            },
        };
    },
    methods: {
        async saveSchema() {
            const schema = await this.$refs.formEditor.getSchema();
            console.log("Schema exportado:", schema);
        },
    },
}
</script>

<style lang="scss" scoped></style>