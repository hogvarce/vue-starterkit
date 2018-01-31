<template>
  <div>
    <h2>Home</h2>
    <b-button to="/about">About</b-button>
    <div>{{ count }}</div>
    <div>
      <b-button @click="increment">+</b-button>
    </div>
    <banners />
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex';
  import banners from 'components/Banners';

  export default {
    computed: {
      ...mapState([
        'count',
      ]),
    },
    methods: {
      ...mapActions({
        increment: 'increment',
      }),
    },
    components: {
      banners
    },
  }
</script>
