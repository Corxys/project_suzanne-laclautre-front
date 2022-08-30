<template>
  <section v-if="objectProject" class="project">
    <div class="project__header">
      <h2 class="project__header-title">
        {{ objectProject.title }}
      </h2>
      <h3 class="project__header-date">
        {{ objectProject.year }}
      </h3>
      <div class="project__header-image mobile">
        <nuxt-img
          provider="strapi"
          v-if="objectProject.pictures"
          :src="objectProject.pictures[0].src"
          :alt="objectProject.pictures[0].alt ? objectProject.pictures[0].alt : ''"
        />
      </div>
      <p class="project__header-text">
        {{ objectProject.description }}
      </p>
      <arrow-back class="desktop" />
    </div>
    <div class="project__content">
      <div v-if="objectProject.pictures" class="project__content-images">
        <nuxt-img
          provider="strapi"
          v-for="(image, index) in objectProject.pictures"
          :key="image.id"
          :class="index === 0 ? 'project__content-image desktop' : 'project__content-image'"
          :src="image.src"
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
  data () {
    return {
      objectProject: {}
    }
  },
  computed: {
    ...mapState({
      project: state => state.app.project
    })
  },
  mounted () {
    const localStorage = window.localStorage.getItem('project')
    localStorage ? this.objectProject = JSON.parse(localStorage) : this.project
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
