import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'
import configuredRouter from './router.js'

Vue.use(VueRouter)

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#planets',
    render: h => h(App),
    router: configuredRouter,
  }
})

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
