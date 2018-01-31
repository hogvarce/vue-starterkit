<template>
  <div class="root">
    <h2>About</h2>
    <form-field class="login" :value="value" @change="value = $event" />
    <my-button text="Send" size="lg" variant="success" :onClick="onSubmit" />
  </div>
</template>
<script>
  import FormField from 'components/FormField';
  import Button from 'components/Button';
  export default {
    name: 'about',
    components: {
      FormField,
      'my-button': Button,
    },
    data () {
      return {
        value: 'adadsad',
      }
    },
    methods: {
      onSubmit() {
        console.log(this.value);
      }
    }
  }
</script>
<style scoped lang="stylus">
  .root
    margin: 50px
    .login
      margin: 20px auto;
      width: 500px;
</style>
