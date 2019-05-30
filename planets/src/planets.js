import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'
import axios from 'axios'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#planets',
    render: h => h(App)
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
