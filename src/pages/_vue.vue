<template>
  <div class="error">
    <h1 class="error__title">
      Oups !
    </h1>
    <p class="error__text">
      Y a rien à voir ici !
      <br> <br>
      Pour retourner à l'accueil
    </p>
    <nuxt-link class="error__link" to="/">
      c'est par là !
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style scoped src="../assets/styles/pages/404.scss" lang="scss" />
