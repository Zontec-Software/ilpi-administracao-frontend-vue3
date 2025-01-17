<template>
    <div class="modal-mask" @click="fecharModal">
        <div class="jm" style="min-width: 30vw; min-height: 30vh;" @click.stop>
            <div class="margem">
                <header>
                    <h2>Administrar Medicamento</h2>
                </header>
                <fieldset class="grid-3 margem">
                    <div>
                        <label>Código</label>
                        <div class="codigo">
                            <input type="text" v-model="codigo" @focusout="inserirCodigo(codigo)"
                                @keyup.enter="inserirCodigo(codigo)" />
                            <a class="icone-codeBar" title="Escanear Código de Barras" @click="LerCodigo = true"
                                style="cursor: pointer"></a>
                        </div>
                    </div>
                    <div>
                        <label>Medicamento</label>
                        <select>
                            <option>Remedio</option>
                        </select>
                    </div>
                    <div>
                        <label>Dosagem</label>
                        <input type="text" value="15mg">
                    </div>
                    <div>
                        <label>Via</label>
                        <select>
                            <option>Oral</option>
                            <option>Intra-Venoso</option>
                            <option>Intra-Muscular</option>
                        </select>
                    </div>
                    <div class="col-3">
                        <label>Observação</label>
                        <textarea></textarea>
                    </div>
                </fieldset>
                <div class="submit m-b direita">
                    <button class="button">Salvar</button>
                    <button class="button acao-secundaria">Cancelar</button>
                </div>
            </div>
        </div>
    </div>

    <InputCodigoBarra v-if="LerCodigo" @codigo="inserirCodigo" @fecharModal="LerCodigo = false" />
</template>

<script>
import InputCodigoBarra from '@/assets/LeitorCodigoBarras/inputCodigoBarra.vue';

export default {
    name: 'ModalAdministrarMedicamento',
    components: {
        InputCodigoBarra,
    },
    data() {
        return {
            LerCodigo: false,
            codigo: null,
        }
    },

    methods: {
        fecharModal() {
            this.$emit('fecharModal')
        }
    }
}
</script>

<style scoped>
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