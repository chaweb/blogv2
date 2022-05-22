<template lang="pug">
nuxtLink(:to="url").box 
    .title {{titre}}
    
</template>

<script>
export default {
    props: {
        titre: { 
            type: String,
            default: "titre introuvé",
            required: true
        },
        url: { 
            type: Number,
            default: "none",
            required: true
        },
        tag: { 
            type: String,
            default: undefined,
            required: true
        },
    }
}
</script>