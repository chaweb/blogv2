<template lang="pug">
.layout
    navbar.navbar(:id="opened ? 'opened' : ''")
        button(@click="opened = !opened" v-if="mounted").navbar__open.navbar__element
            p fermer navigation
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" :icon="opened?'arrow_back_ios' : 'arrow_forward_ios'")
        
        nuxtLink(to="/").navbar__element
            p menu
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="home")
            
        nuxtLink(to="/bio").navbar__element
            p bio
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="info")
            
        nuxtLink(to="/blog").navbar__element.navbar__dropdown
            p blog
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="description")
        
            ul(v-if="mounted")
                li 
                    nuxtLink(to="/blog") mathématiques
                li 
                    nuxtLink(to="/blog") dev web
                li 
                    nuxtLink(to="/blog") python
            
        nuxtLink(to="/contact").navbar__element
            p contact
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="alternate_email")
        
        nuxtLink(to="/bigTesty").navbar__element
            p big testy
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="lunch_dining")
        .navbar__breaker
        button(@click="changeColors()" ).navbar__element
            p thème&#8239: {{$colorMode.preference === 'system' ? 'système' : ($colorMode.preference === 'dark' ? 'noir' : 'blanc') }}
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" :icon="$colorMode.preference === 'system' ? 'computer' : ($colorMode.preference === 'dark' ? 'brightness_2' : 'brightness_high')")
    nuxt

    .botbar
        .botbar__element
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
            mounted: false
        }
    },
    computed: {
        isntComputer () {return this.$breakpoints.sMd },
    },
    mounted() {
        this.mounted = true
    }
}
</script>