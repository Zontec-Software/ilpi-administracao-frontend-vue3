<template>
    <div class="modal-mask" @click="fecharModal">
        <div class="jm" style="min-width: 30vw; min-height: 30vh;" @click.stop>
            <div class="margem">
                <fieldset class="grid-3 margem">
                    <div>
                        <label>Data</label>
                        <input type="date" :value="new Date().toISOString().split('T')[0]">
                    </div>
                    <div>
                        <label>Paciente</label>
                        <input type="text">
                    </div>
                    <div>
                        <label>Tipo de Consulta</label>
                        <select>
                            <option>Periodica</option>
                            <option>Exotica</option>
                            <option>Retorno</option>
                        </select>
                    </div>
                    <div>
                        <label>Medico(a) responsável</label>
                        <input type="text">
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
</template>

<script>
export default {
    name: 'ModalRegistrarConsulta',
    methods: {
        fecharModal() {
            this.$emit('fecharModal')
        }
    }
}
</script>

<style lang="scss" scoped></style>