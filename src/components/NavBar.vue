<template>
  <nav class="nav">
    <div class="nav__logo">
      <logo />
      <div v-show="$route.path === '/' || $route.path === '/projets'" class="nav__intro">
        Designeuse graphique <br> et conceptrice d’outils pédagogiques.
      </div>
    </div>
    <div v-show="$route.path === '/' || $route.path === '/projets'" class="nav__buttons">
      <nuxt-link to="/a-propos">
        <custom-button text="À propos" />
      </nuxt-link>
      <nuxt-link to="/contact">
        <custom-button text="Contact" />
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent'
}
</script>

<style scoped src="../assets/styles/components/navbar.scss" lang="scss" />
