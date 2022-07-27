<template>
  <nav class="nav">
    <div class="nav__text">
      <div class="nav__logo">
        <Logo />
        <p v-show="$route.path === '/' || $route.path === '/projects'" class="nav__intro">
          Designeuse graphique <br> et conceptrice d’outils pédagogiques.
        </p>
      </div>
    </div>
    <div v-show="$route.path === '/' || $route.path === '/projects'" class="nav__buttons">
      <nuxt-link to="/about">
        <div class="nav__button button">
          À propos
        </div>
      </nuxt-link>
      <nuxt-link to="/contact">
        <div class="nav__button button">
          Contact
        </div>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent'
}
</script>

<style scoped lang="scss">
.nav {
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 65px;
  font-family: $font-secondary;
  font-size: 18px;

  &__text {
    position: relative;
  }

  &__intro {
    position: absolute;
    top: 40px;
    left: 0;
    font-family: $font-primary;
    font-size: 14px;
  }

  &__buttons {
    display: flex;
    a {
      &:first-child {
        margin-right: 40px;
      }
    }
  }

  &__button {
    padding: 12px 20px 7px 20px;
  }
}
</style>
