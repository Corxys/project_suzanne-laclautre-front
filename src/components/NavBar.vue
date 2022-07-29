<template>
  <nav class="nav">
    <div class="nav__logo">
      <Logo />
      <div v-show="$route.path === '/' || $route.path === '/projects'" class="nav__intro">
        Designeuse graphique <br> et conceptrice d’outils pédagogiques.
      </div>
    </div>
    <div v-show="$route.path === '/' || $route.path === '/projects'" class="nav__buttons">
      <nuxt-link to="/about">
        <custom-button class="nav__button" text="À propos" />
      </nuxt-link>
      <nuxt-link to="/contact">
        <custom-button class="nav__button" text="Contact" />
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
  align-items: flex-start;
  margin: 30px;
  font-family: $font-secondary;

  &__logo {
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 30px;
    min-height: 38px;
    max-width: 200px;
  }

  &__intro {
    position: absolute;
    top: 46px;
    font-family: $font-primary;
    font-size: 12px;
  }

  &__buttons {
    display: flex;
    flex-direction: column;

    a {
      &:first-child {
        margin-bottom: 10px;
      }
    }
  }

  &__button {
    padding: 11px 10px 7px 10px;
  }
}

@media (min-width: 768px) {
  .nav {
    margin: 30px 65px;
    &__logo {
      max-width: 235px;
    }
    &__intro {
      display: block;
      font-size: 14px;
    }
    &__buttons {
      flex-direction: row;
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
}
</style>
