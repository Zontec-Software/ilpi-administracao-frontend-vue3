import EmocaoView from '@/views/EmocaoView.vue';
import GestãoQuartos from '@/views/GestaoQuartos.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
const cadastroItens = () => import('../views/cadastro/CadastroItens.vue');
const HomeCadastro = () => import('@/views/cadastro/HomeCadastro.vue');
const LoginView = () => import('@/views/Home/LoginView.vue');
const HospedeView = () => import('@/views/HospedeView.vue');
const HomeView = () => import('@/views/Home/HomeView.vue');
const HomeCheckIn = () => import('@/views/check-in/HomeCheckIn.vue');
const FormularioCheckIn = () => import('@/views/check-in/FormularioCheckIn.vue');
const cadastroFichas = () => import('@/views/cadastro/CriarFicha.vue');

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
    meta: { esconderMenuLateral: true }
  },
  {
    path: '/home/check-in',
    name: 'HomeCheckIn',
    component: HomeCheckIn,
    meta: { modulo: 'Check-In', esconderMenuLateral: true }
  },
  {
    path: '/check-in/:id',
    name: 'CheckInView',
    props: true,
    component: FormularioCheckIn,
    meta: { modulo: 'Check-In', esconderMenuLateral: true }
  },
  {
    path: '/cadastro',
    name: 'HomeCadastro',
    component: HomeCadastro,
    meta: { modulo: 'Cadastro', esconderMenuLateral: true }
  },
  {
    path: '/',
    name: 'loginView',
    component: LoginView,
    meta: { esconderMenu: true, esconderMenuLateral: true }
  },
  {
    path: '/cadastro/:tipo',
    name: 'cadastroItens',
    props: true,
    component: cadastroItens,
    meta: { modulo: 'Cadastro' }
  },
  {
    path: '/cadastroFichas',
    name: 'cadastroFichas',
    component: cadastroFichas,
    meta: { modulo: 'Cadastro' }
  },
  {
    path: '/hospede/:hospedeId',
    name: 'HospedeView',
    props: true,
    component: HospedeView,
    meta: { modulo: 'Cadastro' }
  },
  {
    path: '/emocao',
    name: 'EmocaoView',
    component: EmocaoView,
    meta: { modulo: 'Cadastro' }
  },
  {
    path: '/gestao/quartos',
    name: 'GestãoQuartos',
    component: GestãoQuartos,
    meta: { modulo: 'Gestão de Quartos' }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
