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
import { TestCommunication } from '@portal/fetchWithCache'

export default {
  data () {
    return {
      numbers: 0
    }
  },
  mounted () {
    console.log(TestCommunication())
  },
  methods: {
    clicked () {
      this.numbers++
    }
  }
}
</script>
