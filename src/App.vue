<template>
  <HeaderComponent v-if="!$route.meta.esconderMenu" @testarAlarme="showAlarme = true" />

  <body class="inicial" style="min-height: 80vh">
    <main id="main">
      <MenuLateralComponent v-if="!$route.meta.esconderMenuLateral" />
      <AlarmeComponent v-if="showAlarme" @fecharAlarme="showAlarme = false" />
      <section>
        <router-view />
      </section>
    </main>
  </body>
</template>

<script>
import AlarmeComponent from './components/alarmes/AlarmeComponent.vue';
import HeaderComponent from './components/estrutura/headerComponent.vue';
import MenuLateralComponent from './components/estrutura/menuLateralComponent.vue';

export default {
  components: {
    AlarmeComponent,
    HeaderComponent,
    MenuLateralComponent,
  },
  data() {
    return {
      showAlarme: false
    }
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--cor-separador);
  border-radius: 20px;
}
</style>
