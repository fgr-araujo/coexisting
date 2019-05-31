import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import RootComponent from './root.component.js'
import * as singleSpa from 'single-spa'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent,
  domElementGetter
})
export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

export function unload(props) {
  return reactLifecycles.unload(props);
}
/*
export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)

export const unload = props => reactLifecycles.unload(props)
console.log(singleSpa.props.customProps.menuOpt);
*/
function domElementGetter() {
  let el = document.getElementById("navbar");
  if (!el) {
    el = document.createElement('div');
    el.id = 'navbar';
    document.body.appendChild(el);
  }

  return el;
}

// window.addEventListener('single-spa:app-change', evt => {
//   var activeModules = Array.from(singleSpa.getMountedApps());
//   activeModules.forEach(function(opt){
//     console.log(opt);
//   })
// })