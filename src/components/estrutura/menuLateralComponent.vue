<template>
    <aside>
        <div class="titulo margem efeito">
            <div class="m-icone"><a href="#" class="icone-menu" title="Menu"
                    onclick="document.getElementById('main').classList.toggle('esconde');return false"></a></div>
        </div>
        <!-- <nav class="nav-maior separador">
            <a href="#" class="icone-inc">Novo projeto</a>
            <a href="#" class="icone-inc">Novo plano de ação</a>
        </nav> -->
        <nav class="nav-maior separador">
            <a style="cursor: pointer" @click="routerPush('Medicamentos')"
                :class="this.$route.params.tipo == 'Medicamentos' ? 'ativo' : ''">
                Medicamentos
            </a>
            <a style="cursor: pointer" @click="routerPush('Corpo Clínico')"
                :class="this.$route.params.tipo == 'Corpo Clínico' ? 'ativo' : ''">
                Corpo Clínico
            </a>
            <a style="cursor: pointer" @click="routerPush('Hospede')"
                :class="this.$route.params.tipo == 'Hospede' ? 'ativo' : ''">
                Hospede
            </a>
        </nav>
    </aside>
</template>
<script>
export default {
    name: 'menuLateralComponent',
    methods: {
        routerPush(tipo) {
            this.$router.push({ name: 'cadastroItens', params: { tipo } })
        }
    }
}
</script>
<style lang="">

</style>