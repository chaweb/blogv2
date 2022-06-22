<template lang="pug">
.icon(:style="`margin: ${(size/24) * 10}px;`")
  span.material-icons(:style="`color:${color}; width:${size+1}px; height:${size+1}px;font-size: ${size}px;user-select:none`") {{icon}}

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
    icon: { 
      type: String,
      default: undefined,
      required: true
    },

  },
    setup() {
        
    },
}
</script>