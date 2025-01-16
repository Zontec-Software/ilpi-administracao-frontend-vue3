<template>
  <div class="titulo">
    <div class="margem container">
      <div class="m-icone direita">
        <div class="pesquisa">
          <input type="text" placeholder="Pesquise aqui" />
          <a class="icone-pesquisa"></a>
        </div>
      </div>
      <div class="m-icone esquerda"><a @click="this.$router.back()" style="cursor: pointer;"
          class="icone-voltar m-d"></a></div>
      <h2>{{ tipo }}</h2>
    </div>
  </div>
  <div class="margem container">
    <div class="bloco margem">
      <div class="alinha-direita" style="cursor: pointer">
        <a class="icone-compras" v-if="tipo == 'Medicamentos'" title="Atualizar estoque"
          @click="showModal = true, tipoModal = 2"></a>
        <a class="icone-inc" :title="`Cadastrar ${tipo}`"
          @click="tipo == 'Fichas' ? $router.push({ name: 'cadastroFichas' }) : showModal = true, tipoModal = 1"></a>
      </div>
      <TabelaItens :itens="lista" :labels="labels" @editar="editar" />
    </div>
  </div>
  <ModalNovoItem v-if="showModal && tipoModal == 1" :labels="labels" :itemEditado="itemEditado"
    @fecharModal="showModal = false, itemEditado = {}" />

  <ModalAtualizarEstoque v-if="showModal && tipoModal == 2" @fecharModal="showModal = false" />
</template>
<script>
import ModalAtualizarEstoque from '@/components/modais/modalAtualizarEstoque.vue';
import ModalNovoItem from '@/components/modais/modalNovoItem.vue';
import TabelaItens from '@/components/tabelas/TabelaItens.vue';
import serviceDados from '@/services/serviceDados'

export default {
  components: {
    ModalNovoItem,
    ModalAtualizarEstoque,
    TabelaItens,
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
      if (this.tipo == 'Fichas') {
        this.$router.push({ name: 'cadastroFichas' })
      } else {
        this.itemEditado = item;
        if (this.tipo == 'Hospede') {
          var hospedeId = item.id
          this.$router.push({ name: 'HospedeView', params: { hospedeId } })
        } else {
          this.showModal = true
        }
      }
    },

    async definirLista() {
      switch (this.tipo) {
        case "Medicamentos":
          this.lista = await serviceDados.getMedicamentos().lista
          this.labels = await serviceDados.getMedicamentos().labels
          break;
        case "Corpo Clínico":
          this.lista = await serviceDados.getCorpoClinico().lista
          this.labels = await serviceDados.getCorpoClinico().labels
          break;
        case "Hospede":
          this.lista = await serviceDados.getHospedes().lista
          this.labels = await serviceDados.getHospedes().labels
          break;
        case "Leitos e Instalações":
          this.lista = await serviceDados.getQuartos().lista
          this.labels = await serviceDados.getQuartos().labels
          break;
        case "Atividades":
          this.lista = await serviceDados.getAtividades().lista
          this.labels = await serviceDados.getAtividades().labels
          break;
        case "Fichas":
          this.lista = await serviceDados.getFichas().lista
          this.labels = await serviceDados.getFichas().labels
          break;
        default:
          break;
      }
    }
  },
}
</script>
