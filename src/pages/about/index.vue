<template>
  <section class="about">
    <div class="about__content">
      <nuxt-img class="about__content-image" src="/images/character__illustration.png" alt="Illustration de Suzanne" />
      <p class="about__content-text">
        Suzanne est designeuse graphique et spécialisée dans la conception de dispositifs pédagogiques. Elle partage son temps entre une pratique d’un graphisme porteur de sens et des projets à visée pédagogique allant de la réalisation d’outils sur mesure à une démarche complète en passant par de l’animation d’ateliers pour différentes structures scolaires, associatives et culturelles.
      </p>
    </div>
    <nuxt-link class="about__content-back" to="/">
      <ArrowBack />
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  beforeMount () {
    const vh = window.innerHeight / 100
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      const vh = window.innerHeight / 100
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }
}
</script>

<style scoped lang="scss">
:root {
  --vh: 1vh;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 100px 30px 30px 30px;
  nav {
    &__text {
      display: none;
    }
  }
  &__nav {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 65px;
  }
  &__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-image {
      max-width: 200px;
    }
    &-text {
      font-style: italic;
      line-height: 1.5;
      margin: 30px 0 60px 0;
      max-width: 425px;
    }
    &-back {
      align-self: flex-start;
    }
  }
}

@media (min-width: 768px) {
  .about {
    width: 50%;
    height: 100vh;
    padding: 100px 65px 65px 65px;
    background-color: $color-primary;
    &-text {
      width: 80%;
    }
  }
}
</style>

<router>
{
  path: '/a-propos'
}
</router>
