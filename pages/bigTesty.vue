<template lang="pug">
.app
  .content
    h1#h1 Coucou
    h2.text.popup--info subtitle
    h3 subsubtitle
    h4 description
    h5 je ne sais pas quoi mettre
    h6 A
    a#link je suis un lien vers quelques chose
    br
    #text.text.dosis text en dosis
    .text.inter text en inter
    .text.base text avec la police par defaut
    a.popup--info je suis un autre lien mais en couleur de l'information
    p Ceci est un test de tous les composants utiliser pour un bon article. 
    //- blockquote disfonctionnelle ! à regler
    blockquot.citation
      img.citation__image(srcset="logo/logo256x256 256w,logo/logo320x320.png 320w, logo/logo1280x1280.png 1280w" sizes="(max-width: 1280) 320w" src="logo/logo1280x1280.png")
      .citation__content
        h1.citation__title Jean-Michel du Mhâht
        p.citation__text Ceci est une mention d'une personne intelligente et respactable ! Cette personne est une personne.
    
    blockquot#blockquots.citation
      img.citation__image(srcset="logo/logo256x256 256w,logo/logo320x320.png 320w, logo/logo1280x1280.png 1280w" sizes="(max-width: 1280) 320w" src="logo/logo1280x1280.png")
      .citation__content
        h1.citation__title Jean-Michel du Mhâht
        p.citation__text Ceci est une mention assez courte.
    blockquot.citation
      img.citation__image(srcset="logo/logo256x256 256w,logo/logo320x320.png 320w, logo/logo1280x1280.png 1280w" sizes="(max-width: 1280) 320w" src="logo/logo1280x1280.png")
      .citation__content
        h1.citation__title Jean-Michel du Mhâht
        p.citation__text Ceci est une mention plutôt longue censé rempresenter la conjecture de point carré. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor 
          u commodo
          |  laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit. Eiusmod velit laboris ullamco dolor commodo laborum sint sit.
    p#code code javascript
    pre
      code.javascript(v-highlight)
        |var js = 6
        |console.log(salut, "salutation")
    p code python copiable
    pre
      code.python(v-highlight)
        |js = 6;
        |print(salut, "salutation");
        |for i in range(js):
        |&emsp;print(i);
      copy(text="js = 6;print(salut, 'salutation');for i in range(js):;&emsp;print(i)")
  .content
    a(href="#h1") titre
    br
    a(href="#link") liens
    br
    a(href="#text") texte
    br
    a(href="#blockquots") blockquots
    br
    a(href="#code") code
</template>