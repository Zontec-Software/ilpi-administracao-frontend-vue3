<template>
    <main class="login">
        <section class="cover alinha-v">
            <div class="margem bloco">
                <div class="alinha-centro">
                    <p style="height: 150px;" class="logo">.</p>
                </div>
                <br>
                <fieldset>
                    <div class="linha">
                        <label class="icone-conta pos-input"></label>
                        <input type="text" placeholder="E-mail ou CPF" />
                    </div>
                    <div class="linha">
                        <label class="icone-senha pos-input"></label>
                        <input type="password" placeholder="Senha" />
                        <a href="" class="icone-olho"
                            onclick="var inp=this.previousElementSibling;inp.type==='password'?inp.type='text':inp.type='password';return false"></a>
                    </div>
                </fieldset>
                <div class="submit">
                    <button @click=" this.$router.push({ name: 'HomeCadastro' })"><span
                            class="icone-avancar direita"></span>Entrar</button>
                    <a class="botao">Esqueci minha senha</a>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {

}
</script>
<style scoped>
.bloco {
    background-color: #f6f5f0ad
}
a {
    cursor: pointer;
}
</style>