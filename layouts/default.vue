<template lang="pug">
#layout
    navbar.navbar(:id="opened ? 'opened' : ''")
        button(@click="opened = !opened" )#openMenu
            p(v-if="opened" ) fermer navigation
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" :icon="opened?'arrow_back_ios' : 'arrow_forward_ios'")
        
        nuxtLink(to="/")
            p(v-if="opened" ) menu
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="home")
            
        nuxtLink(to="/bio")
            p(v-if="opened" ) bio
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="person")
            
        nuxtLink(to="/blog")
            p(v-if="opened" ) blog
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="description")
            
        nuxtLink(to="/contact")
            p(v-if="opened" ) contact
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="alternate_email")

        button(@click="changeColors()" )
            p(v-if="opened" class="text-xl" ) theme : {{$colorMode.preference }}
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" :icon="$colorMode.preference === 'system' ? 'computer' : ($colorMode.preference === 'dark' ? 'brightness_2' : 'brightness_high')")
        #after(@click="opened = !opened" )
    nuxt
</template>

<script>
export default {
  methods: {
      changeColors(){
          if(this.$colorMode.preference === "system"){
              this.$colorMode.preference = "dark"
          }else{
              if(this.$colorMode.preference === "dark"){
                  this.$colorMode.preference = "light"
              }else{
                  this.$colorMode.preference = "system"
              }
          }

      }
  },
  data () {
    return {
        opened: false,
    }
  },
    
}
</script>