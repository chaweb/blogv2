<template lang="pug">
.layout(v-if="isntComputer")
    navbar.navbar(:class="opened ? 'opened' : ''")
        button(@click="opened = !opened" )#openMenu
            p(v-if="opened" ) fermer navigation
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" :icon="opened?'arrow_back_ios' : 'arrow_forward_ios'")
        
        nuxtLink(to="/")
            p(v-if="opened" ) menu
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="home")
            
        nuxtLink(to="/bio")
            p(v-if="opened" ) bio
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="info")
            
        nuxtLink(to="/blog")
            p(v-if="opened" ) blog
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="description")
            
        nuxtLink(to="/contact")
            p(v-if="opened" ) contact
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="alternate_email")

        button(@click="changeColors()" )
            p(v-if="opened") : {{$colorMode.preference === 'system' ? 'système' : ($colorMode.preference === 'dark' ? 'noir' : 'blanc') }}
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" :icon="$colorMode.preference === 'system' ? 'computer' : ($colorMode.preference === 'dark' ? 'brightness_2' : 'brightness_high')")
        #after(@click="opened = !opened" )
    .app(class="")
        nuxt


.layout(v-else)
    navbar.navbar(:id="opened ? 'opened' : ''")
        nuxtLink(to="/")
            p menu
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="home")
            
        nuxtLink(to="/bio")
            p bio
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="info")
            
        NuxtLink(to="/blog")#dropdownButton
            p blog
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="keyboard_arrow_down")
        
            div#dropdown
                ul
                    li 
                        nuxtLink(to="/blog") mathématiques
                    li 
                        nuxtLink(to="/blog") dev web
                    li 
                        nuxtLink(to="/blog") python
            
        nuxtLink(to="/contact")
            p contact
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="alternate_email")

        nuxtLink(to="/bigTesty")
            p big testy
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" icon="lunch_dining")

        button(@click="changeColors()" )#colorMode
            p thème : {{$colorMode.preference === 'system' ? 'système' : ($colorMode.preference === 'dark' ? 'noir' : 'blanc') }}
            icon(:color="$colorMode.value === 'dark'? '#D3D3DE': '#21212C'" :size="20" :icon="$colorMode.preference === 'system' ? 'computer' : ($colorMode.preference === 'dark' ? 'brightness_2' : 'brightness_high')")
    .app(class="m-16 mx-auto p-2 py-4 " style="max-width: 1000px; ")
        nuxt
        button.btn
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
    computed: {
        isntComputer () {return this.$breakpoints.sMd },
    }
}
</script>