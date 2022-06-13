<template lang="pug">
.content 
    h1 Les blogs
    .blogs-menu
        viewBlog(v-for="item in blogs" key="id" :titre="item.titre" :url="item.lien" :tag="item.tag")
</template>

<script>
export default {
    data () {
        return {
            blogs: [],
        }
    },
  async mounted() {
        await (this.$axios.$post('/api/',{"query" :`
                {
                    blog {
                        id
                        tag
                        titre
                        lien
                    }
                }`
            }).then(resolve => {this.blogs = resolve.data.blog})
            .catch(function (error) {
                console.log(error);
            }))

  }
}
</script>