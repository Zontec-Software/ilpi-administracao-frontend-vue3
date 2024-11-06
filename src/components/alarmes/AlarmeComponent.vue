<template>
    <div class="alarme margem piscar">
        <p>Este é um alarme de teste!</p>
        <p>{{ mensagem }}</p>
        <div class="tags" style="display: flex; justify-content: center;">
            <a class="bg-sucesso" style="cursor: pointer;" @click="fecharAlarme">Fechar</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlarmeComponent',
    data() {
        return {
            mensagem: 'QUEDA - Quarto 102 - Aldair Ferreira',
            audio: null,
        };
    },
    methods: {
        tocarSomAlarme() {
            if (this.audio) {
                this.audio.pause();
                this.audio.currentTime = 0;
            }
            this.audio = new Audio(require('@/assets/som/alarme2.mp3'));
            this.audio.loop = true;
            this.audio.play();
        },

        fecharAlarme() {
            this.$emit('fecharAlarme');
            if (this.audio) {
                this.audio.pause();
                this.audio.currentTime = 0;
            }
        },
    },
    created() {
        this.tocarSomAlarme();
    },
};
</script>

<style scoped>
.alarme {
    padding: 20px;
    text-align: center;
    font-weight: bold;
    color: white;
    animation: vibrar 2s infinite, sombra-piscando 2s infinite;
    border-radius: 12px;
    transition: box-shadow 0.2s ease-in-out;
    position: absolute;
    right: 1rem;
    margin-top: .5rem;
}

@keyframes vibrar {
    0% {
        transform: translateX(0);
    }

    10% {
        transform: translateX(-5px);
    }

    20% {
        transform: translateX(5px);
    }

    30% {
        transform: translateX(-5px);
    }

    40% {
        transform: translateX(5px);
    }

    50% {
        transform: translateX(-5px);
    }

    60% {
        transform: translateX(5px);
    }

    70% {
        transform: translateX(-5px);
    }

    80% {
        transform: translateX(5px);
    }

    90% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes sombra-piscando {
    0% {
        background-color: #ff6666;
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
    }

    25% {
        background-color: #ff4d4d;
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.4);
    }

    50% {
        background-color: #ff1a1a;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
    }

    75% {
        background-color: #e60000;
        box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
    }

    100% {
        background-color: #ff6666;
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
    }
}
</style>