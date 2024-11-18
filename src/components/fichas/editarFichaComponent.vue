<template>
    <div class="bloco">
        <div ref="formEditorContainer"></div>
    </div>
</template>

<script>
import { FormEditor } from '@bpmn-io/form-js-editor';
import "@bpmn-io/form-js-editor/dist/assets/form-js-editor.css";
import "@bpmn-io/form-js-editor/dist/assets/properties-panel.css";
import "@bpmn-io/form-js-viewer/dist/assets/form-js.css";

export default {
    name: "FormEditor",
    props: {
        schema: {
            type: Object,
            required: false,
            default: () => ({
                type: "default",
                components: [],
            }),
        },
    },
    data() {
        return {
            editor: null,
        };
    },
    mounted() {
        // Inicializa o editor no DOM
        this.initializeEditor();
    },
    beforeUnmount() {
        // Limpa o editor ao desmontar o componente
        if (this.editor) {
            this.editor.destroy();
        }
    },
    methods: {
        initializeEditor() {
            const container = this.$refs.formEditorContainer;

            // Cria uma nova instância do FormEditor
            this.editor = new FormEditor({
                container,
            });

            // Carrega o schema (caso fornecido)
            this.editor.importSchema(this.schema).catch((err) => {
                console.error("Erro ao importar schema:", err);
            });
        },
        async getSchema() {
            // Exporta o schema atual
            if (this.editor) {
                return await this.editor.saveSchema();
            }
            return null;
        },
    },
};
</script>

<style></style>