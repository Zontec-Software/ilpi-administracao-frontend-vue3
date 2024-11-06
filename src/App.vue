<template>
  <HeaderComponent v-if="!$route.meta.esconderMenu" />

  <body class="inicial" style="min-height: 90vh;">
    <main id="main" class="esconde">
      <MenuLateralComponent v-if="!$route.meta.esconderMenuLateral" />
      <section>
        <router-view />
      </section>
    </main>
  </body>
</template>
<script>
import HeaderComponent from './components/estrutura/headerComponent.vue';
import MenuLateralComponent from './components/estrutura/menuLateralComponent.vue';
export default {
  components: {
    HeaderComponent,
    MenuLateralComponent
  }
}
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
</style>
