<template>
  <div>
    <button @click="clicked">Clicou</button>
    <pre>
      {{ numbers }}
    </pre>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import { of } from 'rxjs'
import { Observables } from '@portal/fetchWithCache'

export default {
  data () {
    return {
      numbers: 0
    }
  },
  mounted () {
    this.checkObservable()
  },
  methods: {
    clicked () {
      this.numbers++
      Observables.filterList.next(2)
    },
    checkObservable() {
      // Observables.filterList = of(2)
      // tst.subscribe((v) => {
      //   console.log('ok', v)
      //   this.numbers = v
      // })
    }
  }
}
</script>
