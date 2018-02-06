<template>
  <b-container class="bv-example-row">
    <h1>Home</h1>
  </b-container>
</template>
<script>
  import { mapState, mapActions } from 'vuex';
  import { auth } from 'main';

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
      logOut() {
        auth.logOut();
        this.$router.push('/login');
      }
    },
  }
</script>
