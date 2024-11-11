<template>
    <div class="modal-mask" @click="fecharModal">
        <div class="jm" style="min-width: 30vw; min-height: 30vh;" @click.stop>
            <div class="margem">
                <header>
                    <h2>Ficha Psicológica</h2>
                </header>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modalFichaPsicologica',
    methods: {
        fecharModal() {
            this.$emit('fecharModal')
        }
    }
}
</script>

<style lang="scss" scoped></style>