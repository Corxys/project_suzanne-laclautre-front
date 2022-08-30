<template>
  <section class="about">
    <div class="about__content">
      <nuxt-img provider="static" format="webp" class="about__content-image" src="/images/character__illustration.png" alt="Illustration de Suzanne" />
      <p class="about__content-text">
        Suzanne est designeuse graphique et spécialisée dans la conception de dispositifs pédagogiques. Elle partage son temps entre une pratique d’un graphisme porteur de sens et des projets à visée pédagogique allant de la réalisation d’outils sur mesure à une démarche complète en passant par de l’animation d’ateliers pour différentes structures scolaires, associatives et culturelles.
      </p>
    </div>
    <arrow-back />
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped src="../../assets/styles/pages/about.scss" lang="scss" />

<router>
{
  path: '/a-propos'
}
</router>
