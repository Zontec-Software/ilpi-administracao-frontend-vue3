import { createRouter, createWebHashHistory } from 'vue-router'
import cadastroItens from '../views/cadastro/CadastroItens.vue'
import HomeCadastro from '@/views/cadastro/HomeCadastro.vue'
import LoginView from '@/views/LoginView.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
