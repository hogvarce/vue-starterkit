<template>
  <div class="root">
    <h1>{{ msg }}</h1>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hotel`s service'
    }
  }
}
</script>

<style scoped lang="stylus">
  @import 'assets/styles/App.styl';
</style>
