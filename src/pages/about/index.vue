<template>
  <section class="about">
    <div class="about__nav">
      <Logo class="about__logo" />
    </div>
    <div class="about__content">
      <img class="about__content-img" src="@/assets/images/character__illustration.png" alt="Illustration de Suzanne"/>
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
  name: 'AboutPage'
}
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  padding: 65px;
  background-color: $color-primary;

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

    &-text {
      font-style: italic;
      line-height: 1.5;
      margin-top: 65px;
      width: 80%;
    }

    &-back {
      align-self: flex-start;
    }
  }
}
</style>
