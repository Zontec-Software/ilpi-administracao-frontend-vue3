<template>
    <div class="modal-mask" @click="fecharModal">
        <div class="jm" style="width: min-content; padding: 5px;" @click.stop>
            <div ref="scanner" style="width: 100%; height: 500px"></div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Quagga from 'quagga';

export default {
    emits: ['codigo'],
    methods: {
        fecharModal() {
            this.$emit('fecharModal')
        }
    },

    setup(_, { emit }) { // Pegue o emit do segundo argumento do setup
        const scanner = ref(null);

        const startScanner = () => {
            Quagga.init(
                {
                    inputStream: {
                        name: 'Live',
                        type: 'LiveStream',
                        target: scanner.value,
                    },
                    decoder: {
                        readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'upc_reader'],
                        debug: {
                            drawBoundingBox: true,
                            drawScanline: true,
                        },
                    },
                },
                (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    Quagga.start();
                }
            );

            Quagga.onDetected((result) => {
                emit('codigo', result.codeResult.code); // Use emit diretamente
                Quagga.stop();
            });
        };

        onMounted(() => {
            startScanner();
        });

        return { scanner };
    },
};
</script>
