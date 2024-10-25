<template>
    <aside>
        <div class="titulo margem efeito">
            <div class="m-icone"><a href="#" class="icone-menu" title="Menu"
                    onclick="document.getElementById('main').classList.toggle('esconde');return false"></a></div>
        </div>
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
            <a style="cursor: pointer" @click="routerPush('Leitos e Instalações')"
                :class="this.$route.params.tipo == 'Leitos e Instalações' ? 'ativo' : ''">
                Leitos e Instalações
            </a>
            <a style="cursor: pointer" @click="routerPush('Atividades')"
                :class="this.$route.params.tipo == 'Atividades' ? 'ativo' : ''">
                Atividades
            </a>
        </nav>
    </aside>

    <!-- <aside>
        <div class="titulo margem efeito">
            <div class="m-icone"><a href="#" class="icone-menu" title="Menu"
                    onclick="document.getElementById('main').classList.toggle('esconde');return false"></a></div>
        </div>
        <div class="separador margem">
            <div class="m-icone">
                <a @click="abaMenu('Apontamento')" class="icone-alvo ativo" title="Apontamento" id="Apontamento"></a>
                <a @click="abaMenu('Gestao')" class="icone-gestao" title="Gestão" id="Gestao"></a>
            </div>
        </div>
        <nav id="menuApontamento" class="nav-maior separador">
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
            <a style="cursor: pointer" @click="routerPush('Leitos e Instalações')"
                :class="this.$route.params.tipo == 'Leitos e Instalações' ? 'ativo' : ''">
                Leitos e Instalações
            </a>
            <a style="cursor: pointer" @click="routerPush('Atividades')"
                :class="this.$route.params.tipo == 'Atividades' ? 'ativo' : ''">
                Atividades
            </a>
        </nav>
        <nav id="menuGestao" class="nav-maior separador none">
            <a href="#">Relatórios</a>
            <a href="#">Fornecedor</a>
            <a href="#">Material</a>
            <a href="#">Serviço</a>
            <a href="#">Setor</a>
            <a href="#">Colaborador</a>
            <a href="#">Usuários</a>
            <a href="#">Gerenciar Permissões</a>
        </nav>
    </aside> -->
</template>
<script>
export default {
    name: 'menuLateralComponent',
    methods: {
        routerPush(tipo) {
            this.$router.push({ name: 'cadastroItens', params: { tipo } })
        },
        abaMenu(a) {
            document.getElementById('Apontamento').classList.remove('ativo');
            document.getElementById('Gestao').classList.remove('ativo');
            document.getElementById('menuApontamento').classList.add('none');
            document.getElementById('menuGestao').classList.add('none');
            document.getElementById(a).classList.add('ativo');
            document.getElementById('menu' + a).classList.remove('none');
        }
    }
}
</script>