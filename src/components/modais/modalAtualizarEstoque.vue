<template>
    <div class="modal-mask" @click="fecharModal">
        <div class="jm" style="min-width: 30vw; min-height: 40vh;" @click.stop>
            <fieldset class="margem grid-2">
                <div>
                    <label>Código</label>
                    <div class="codigo">
                        <input type="text" v-model="codigo" @focusout="inserirCodigo(codigo)" @keyup.enter="inserirCodigo(codigo)" />
                        <a class="icone-codeBar" title="Escanear Código de Barras" @click="LerCodigo = true"
                            style="cursor: pointer"></a>
                    </div>
                </div>
                <div>
                    <label>Item</label>
                    <input type="text" readonly v-model="item.nome">
                </div>
                <div>
                    <label>Quantidade Atual</label>
                    <input type="number" readonly v-model="item.quantidadeEstoque">
                </div>
                <div>
                    <label>Quantidade Adquerida</label>
                    <input type="number" v-model="quantidadeAdicional" id="inputQtdAdquerida">
                </div>
            </fieldset>
            <div class="submit direita m-b margem">
                <button class="button">Salvar</button>
                <button class="button acao-secundaria" @click="fecharModal">Cancelar</button>
            </div>
            <InputCodigoBarra v-if="LerCodigo" @codigo="inserirCodigo" @fecharModal="LerCodigo = false" />
        </div>
    </div>
</template>

<script>
import InputCodigoBarra from '@/assets/LeitorCodigoBarras/inputCodigoBarra.vue';
import serviceDados from '@/services/serviceDados'

export default {
    name: 'modalAtualizarEstoque',
    data() {
        return {
            quantidadeAdicional: null,
            item: {},
            LerCodigo: false,
            codigo: null,
            listaMedicamentos: [],
        }
    },
    components: {
        InputCodigoBarra,
    },
    async mounted() {
        this.listaMedicamentos = await serviceDados.getMedicamentos().lista
    },
    methods: {
        inserirCodigo(codigo) {
            this.codigo = codigo;
            var itemLista = this.listaMedicamentos.find(item => item.codigoBarra == codigo)
            if (itemLista){
                this.item = itemLista
            } else {
                this.item.nome = 'Código Desconhecido!'
            }
            this.LerCodigo = false
            document.getElementById("inputQtdAdquerida").focus();
        },
        fecharModal() {
            this.item = {}
            this.$emit('fecharModal')
        }
    },
}
</script>

<style scoped>
video {
    border: 1px solid #ccc;
    border-radius: 8px;
}

.codigo {
    margin: 0;

    input {
        width: calc(100% - 48px);
        float: left;
    }
}

.codigo {
    border: 1px solid var(--cor-separador);
    border-radius: 6px;
    padding: 0 calc(var(--margem)/2);
    margin: 0 10px 0 0;

    input {
        width: 350px;
        background: none;
        border-color: transparent;
    }

}
</style>