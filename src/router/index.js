import { createRouter, createWebHashHistory } from 'vue-router'
import cadastroItens from '../views/cadastro/CadastroItens.vue'
import HomeCadastro from '@/views/cadastro/HomeCadastro.vue'
import LoginView from '@/views/LoginView.vue'
import HospedeView from '@/views/HospedeView.vue'

const routes = [
  {
    path: '/cadastro',
    name: 'HomeCadastro',
    component: HomeCadastro
  },
  {
    path: '/',
    name: 'loginView',
    component: LoginView,
    meta: { esconderMenu: true }
  },
  {
    path: '/cadastro/:tipo',
    name: 'cadastroItens',
    props: true,
    component: cadastroItens,
  },
  {
    path: '/hospede/:hospedeId',
    name: 'HospedeView',
    props: true,
    component: HospedeView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
