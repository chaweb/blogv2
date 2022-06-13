<template lang="pug">
button(class="flex content-center justify-center" @click="copy(`${text}`)")  
  span.material-icons(:style="`color:${color};margin: ${(size/24) * 10}px; width:${size+1}px;font-size: ${size}px;user-select:none`") content_paste

</template>

<script>
export default {
  props: {
    color: { 
      type: String,
      default: "white",
      required: false
    },
    size: { 
      type: Number ,
      default: 24,
      required: false
    },
    text: { 
      type: String,
      default: undefined,
      required: true
    },

  },
  methods: {
    async copy(text) {
            try {
                await this.$copyText(text);
            } catch (e) {
                console.error(e);
            }
        },
  }
}
</script>