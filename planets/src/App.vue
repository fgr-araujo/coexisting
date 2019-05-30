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
import { tst } from '@portal/fetchWithCache'

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
    },
    checkObservable() {
      tst.subscribe((v) => {
        console.log('ok', v)
        this.numbers = v
      })
    }
  }
}
</script>
