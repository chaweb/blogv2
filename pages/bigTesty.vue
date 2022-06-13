<template lang="pug">
.content(style="height:400vh")
  h1 Coucou
  h2 subtitle
  p Ceci est un test de tous les composants utiliser pour un bon article. 
  blockquote
    img(src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg")
    .content
      h1 Jean-Michel du Mhâht
      p Ceci est une mention d'une personne intelligente et respactable ! Cette personne est une personne.
  p code javascript
  pre
    code.javascript(v-highlight)
      |var js = 6
      |console.log(salut, "salutation")
  p code python
  pre
    code.python(v-highlight)
      |js = 6;
      |print(salut, "salutation");
      |for i in range(js):
      |&emsp;print(i);
    copy(text="js = 6;print(salut, 'salutation');for i in range(js):;&emsp;print(i)")
</template>