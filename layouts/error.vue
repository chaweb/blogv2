<template lang="pug">
.content(class="flex justify-center items-center flex-col")
    h1 Error {{error.statusCode}}
    p {{error.message}} 
        span(v-if="error.path") to {{error.path}}
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>