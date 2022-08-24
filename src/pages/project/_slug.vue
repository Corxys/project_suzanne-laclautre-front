<template>
  <section v-if="project" class="project">
    <div class="project__header">
      <h2 class="project__header-title">
        {{ project.title }}
      </h2>
      <h3 class="project__header-date">
        {{ project.year }}
      </h3>
      <div class="project__header-image mobile">
        <nuxt-img
          provider="cloudinary"
          format="webp"
          v-if="project.pictures"
          :src="project.pictures[0].srcLarge ? project.pictures[0].srcLarge : project.pictures[0].srcMedium ? project.pictures[0].srcMedium : project.pictures[0].srcSmall ? project.pictures[0].srcSmall : '/'"
          :alt="project.pictures[0].alt ? project.pictures[0].alt : ''"
        />
      </div>
      <p class="project__header-text">
        {{ project.description }}
      </p>
      <arrow-back class="desktop" />
    </div>
    <div class="project__content">
      <div v-if="project.pictures" class="project__content-images">
        <nuxt-img
          provider="cloudinary"
          format="webp"
          v-for="(image, index) in project.pictures"
          :key="image.id"
          :class="index === 0 ? 'project__content-image desktop' : 'project__content-image'" :src="image.srcLarge ? image.srcLarge : image.srcMedium ? image.srcMedium : image.srcSmall ? image.srcSmall : '/'"
          :alt="image.alt ? image.alt : ''"
        />
      </div>
      <arrow-back class="mobile" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProjectPage',
  computed: {
    ...mapState({
      project: state => state.app.project
    })
  }
}
</script>

<style scoped src="../../assets/styles/pages/project.scss" lang="scss">

</style>

<router>
{
  path: '/projet/:slug'
}
</router>
