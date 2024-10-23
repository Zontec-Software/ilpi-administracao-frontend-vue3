<template>
    <main>
        <section>
            <div class="titulo">
                <div class="container margem alinha-centro">
                    <h2>Cadastrar</h2>
                </div>
            </div>
            <div class="margem container">
                <div class="grid-3">
                    <a @click="routerPush('Medicamentos')" style="cursor: pointer" class="card bloco">
                        <figure>
                            <img src="@/assets/img/medicamentos.jpg" />
                            <figcaption class="margem abs">Medicamento</figcaption>
                        </figure>
                    </a>
                    <a @click="routerPush('Corpo Clínico')" style="cursor: pointer" class="card bloco">
                        <figure>
                            <img src="@/assets/img/corpoClinico.jpg" style="" />
                            <figcaption class="margem abs">Corpo Clínico</figcaption>
                        </figure>
                    </a>
                    <a @click="routerPush('Hospede')" style="cursor: pointer" class="card bloco">
                        <figure>
                            <img src="@/assets/img/hospede.jpg" style="" />
                            <figcaption class="margem abs">Hospede</figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    methods: {
        routerPush(tipo) {
            this.$router.push({ name: 'cadastroItens', params: { tipo } })
        }
    }
}
</script>
<style></style>