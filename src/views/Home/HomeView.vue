<template>
    <div class="titulo">
        <div class="container margem alinha-centro">
            <h2>Selecione o módulo</h2>
        </div>
    </div>
    <div class="margem container">
        <div class="grid-3">
            <a @click="hospede('Hospede')" style="cursor: pointer" class="card bloco">
                <figure>
                    <img src="@/assets/img/hospede.jpg" />
                    <figcaption class="margem abs">Hospedes</figcaption>
                </figure>
            </a>
            <a @click="routerPush('HomeCheckIn')" style="cursor: pointer" class="card bloco">
                <figure>
                    <img src="@/assets/img/checkin.jpg" />
                    <figcaption class="margem abs">Check-in</figcaption>
                </figure>
            </a>
            <a @click="routerPush('HomeCadastro')" style="cursor: pointer" class="card bloco">
                <figure>
                    <img src="@/assets/img/cadastro.jpg" />
                    <figcaption class="margem abs">Cadastro</figcaption>
                </figure>
            </a>
            <a @click="routerPush('EmocaoView')" style="cursor: pointer" class="card bloco">
                <figure>
                    <img src="@/assets/img/faceDetector.jpg" />
                    <figcaption class="margem abs">Detecção de Emoções (teste)</figcaption>
                </figure>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        hospede(tipo) {
            this.$router.push({ name: 'cadastroItens', params: { tipo } })
        },
        routerPush(pagina) {
            this.$router.push({ name: pagina })
        }
    }
}
</script>