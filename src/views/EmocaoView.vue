<template>
    <div class="titulo">
        <div class="margem container">
            <div class="m-icone esquerda"><a @click="this.$router.back()" style="cursor: pointer;"
                    class="icone-voltar m-d"></a></div>
            <h2>Teste Detecção de Emoções</h2>
        </div>
    </div>
    <div class="margem container">
        <div class="alinha-centro">
            <p>Para testar este modulo, siga as instruções em <a style="text-decoration: underline; color: blue;"
                    href="https://github.com/LucasLg1/ilpi-deteccao-de-emocoes-backend-python">https://github.com/ilpi-deteccao-de-emocoes-backend-python</a>
            </p>
        </div>
        <div class="bloco margem alinha-centro">
            <h3 style="color: red;">
                {{ errorMessage }}
            </h3>
            <h2>Emoção dominante: {{ emotion }}
            </h2>
            <video ref="video" autoplay></video>
        </div>
    </div>
    <canvas ref="canvas" style="display: none"></canvas>
</template>
<script>
import axios from 'axios';

export default {
    name: 'EmoçãoView',
    data() {
        return {
            emotion: null,
            capturedImage: null,
            intervalId: null,
            errorMessage: "",
        };
    },
    mounted() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                this.$refs.video.srcObject = stream;
                this.checkBackendAccessibility()
                    .then(isAccessible => {
                        if (isAccessible) {
                            this.intervalId = setInterval(this.captureImage, 1000);
                        } else {
                            this.errorMessage = "Não foi possível conectar ao backend";
                        }
                    });
            })
            .catch(err => {
                console.error("Erro ao acessar a webcam:", err);
                this.errorMessage = "Erro ao acessar a webcam.";
            });

    },
    beforeUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    },
    methods: {
        async checkBackendAccessibility() {
            try {
                await axios.get("http://127.0.0.1:5000/health");
                return true;
            } catch (error) {
                console.error("Erro ao acessar o endpoint:", error);
                return false;
            }
        },
        captureImage() {
            const video = this.$refs.video;
            const canvas = this.$refs.canvas;
            const context = canvas.getContext("2d");

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            this.capturedImage = canvas.toDataURL("image/jpeg");

            axios.post("http://127.0.0.1:5000/analyze", { image: this.capturedImage })
                .then(response => {
                    this.emotion = response.data.emotion;
                })
                .catch(error => {
                    console.error("Erro ao analisar a emoção:", error);
                    this.emotion = ''
                });
        },
    },
}
</script>