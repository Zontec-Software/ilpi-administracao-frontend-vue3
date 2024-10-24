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
      <div v-if="showTabela" class="alinha-direita" style="cursor: pointer" title="Novo Medicamento">
        <a class="icone-inc" @click="showModal = true"></a>
      </div>
      <TabelaItens v-if="showTabela" :itens="lista" :labels="labels" @editar="editar" />
      <DadosHospede v-if="showDadosHospede" :labels="labels" :itemEditado="itemEditado" />
    </div>
  </div>

  <ModalNovoItem v-if="showModal" :labels="labels" :itemEditado="itemEditado"
    @fecharModal="showModal = false, itemEditado = {}" />

</template>
<script>
import ModalNovoItem from '@/components/modais/modalNovoItem.vue';
import DadosHospede from '@/components/tabelas/DadosHospede.vue';
import TabelaItens from '@/components/tabelas/TabelaItens.vue';
import serviceDados from '@/services/serviceDados'

export default {
  components: {
    ModalNovoItem,
    TabelaItens,
    DadosHospede
  },

  props: {
    tipo: { Required: true }
  },

  data() {
    return {
      showModal: false,
      showTabela: true,
      showDadosHospede: false,
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
      if (this.tipo == 'Hospede') {
        this.showDadosHospede = true,
          this.showTabela = false
      } else {
        this.showModal = true
      }
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
