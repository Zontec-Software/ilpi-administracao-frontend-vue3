<template>
    <header>
        <div class="linha">
            <div class="coluna">
                <nav v-if="$route.meta.modulo" class="jm jm-menu nav-maior none" id="menu">
                    <div class="separador">
                        <a href="#/check-in">Check-in</a>
                        <a href="#/cadastro">Cadastro</a>
                    </div>
                </nav>
                <a href="#/home" class="logo logo-menor">.</a>
                <a href="#" :class="!$route.meta.modulo ? 'none' : ''"
                    class="icone-avancar negrito com-texto"
                    onclick="document.getElementById('menu').classList.toggle('none');this.classList.toggle('ativo');return false">{{ $route.meta.modulo }}</a>
            </div>
            <div class="coluna">
                <a href="#" class="avatar direita"
                    onclick="document.getElementById('usuario').classList.toggle('none');this.classList.toggle('ativo');return false"
                    title="Usuário"><img src="../../assets/img/avatar.png" /></a>
                <nav class="jm jm-avatar none" id="usuario">
                    <div class="separador margem alinha-centro negrito">
                        Jorge Moreira de Souza
                    </div>
                    <div class="separador">
                        <a href="#"
                            onclick="document.documentElement.classList.toggle('dark');this.classList.toggle('ativo');return false"><span
                                class="direita toggle"></span>Tema escuro</a>
                    </div>
                    <div class="separador bg-cinza">
                        <a href="#">Ajuda</a>
                        <a href="nova-senha.html">Alterar senha</a>
                        <a href="login.html">Sair</a>
                    </div>
                </nav>
                <a href="#" class="icone-notif direita" title="Notificações" rel="2"
                    onclick="document.getElementById('notificacoes').classList.toggle('none');this.classList.toggle('ativo');return false"></a>
                <nav class="jm jm-notif none" id="notificacoes">
                    <div class="separador">
                        <a href="#"><span class="fonte-fraca fonte-menor direita">12min</span>Título da notificação</a>
                        <a href="#"><span class="fonte-fraca fonte-menor direita">2h</span>Título da notificação</a>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'headerComponent'
}
</script>
<style></style>