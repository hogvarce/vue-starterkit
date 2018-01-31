<template>
  <input class="form-control" :value="value" @keyup="onChanged" />
</template>
<script>
  export default {
    props: [
      'value',
      {
        onChange: {
          type: Function,
          required: true,
        },
      }
    ],
    methods: {
      onChanged: function(e) {
        const { value } = e.target;
        this.$emit('change', value);
      }
    }
  }
</script>
