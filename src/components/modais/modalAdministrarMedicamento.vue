<template>
    <div class="modal-mask" @click="fecharModal">
        <div class="jm" style="min-width: 30vw; min-height: 30vh;" @click.stop>
            <div class="margem">
                <fieldset class="grid-3 margem">
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
</template>

<script>
export default {
    name: 'ModalAdministrarMedicamento',
    methods: {
        fecharModal(){
            this.$emit('fecharModal')
        }
    }
}
</script>

<style lang="scss" scoped></style>