<template>
  <div>
    <h2>Home</h2>
    <b-button to="/about">About</b-button>
    <div>{{ count }}</div>
    <b-button @click="logOut">LogOut</b-button>
    <div>
      <b-button @click="increment">+</b-button>
    </div>
  </div>
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
