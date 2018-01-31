<template>
  <b-button :size="size" :variant="variant" @click="onClick">{{ text }}</b-button>
</template>
<script>
  export default {
    props: [
      'size',
      'variant',
      'text',
      'onClick',
    ],
  }
</script>
