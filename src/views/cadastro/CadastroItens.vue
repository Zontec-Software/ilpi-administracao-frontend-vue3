<template>
  <div class="titulo">
    <div class="margem container">
      <div class="m-icone direita">
        <div class="pesquisa">
          <input type="text" placeholder="Pesquise aqui" />
          <a class="icone-pesquisa"></a>
        </div>
      </div>
      <h2>{{ tipo }}</h2>
    </div>
  </div>
  <div class="margem container">
    <div class="bloco margem">
      <div class="alinha-direita" style="cursor: pointer" title="Novo Medicamento">
        <a class="icone-inc" @click="showModal = true"></a>
      </div>
      <TabelaItens :itens="lista" :labels="labels" @editar="editar" />
    </div>
  </div>

  <ModalNovoItem v-if="showModal" :labels="labels" :itemEditado="itemEditado" :tipo="tipo"
    @fecharModal="showModal = false, itemEditado = {}" />

</template>
<script>
import ModalNovoItem from '@/components/modais/modalNovoItem.vue';
import TabelaItens from '@/components/tabelas/TabelaItens.vue';
import serviceDados from '@/services/serviceDados'

export default {
  components: {
    ModalNovoItem,
    TabelaItens
  },

  props: {
    tipo: { Required: true }
  },

  data() {
    return {
      showModal: false,
      lista: [],
      labels: [],
      itemEditado: null
    }
  },
  watch: {
    tipo() {
      this.definirLista();
    }
  },
  mounted() {
    this.definirLista()
  },
  methods: {
    editar(item) {
      this.itemEditado = item;
      this.showModal = true
    },

    definirLista() {
      switch (this.tipo) {
        case "Medicamentos":
          this.lista = serviceDados.getMedicamentos().lista
          this.labels = serviceDados.getMedicamentos().labels
          break;
        case "Corpo Clínico":
          this.lista = serviceDados.getCorpoClinico().lista
          this.labels = serviceDados.getCorpoClinico().labels
          break;
        case "Hospede":
          this.lista = serviceDados.getHospedes().lista
          this.labels = serviceDados.getHospedes().labels
          break;
        default:
          break;
      }
    }
  },
}
</script>
