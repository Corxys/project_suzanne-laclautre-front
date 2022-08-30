<template>
  <transition name="projects">
    <div class="projects">
      <div class="projects__content">
        <div class="projects__filter">
          <category
            v-for="category of categories"
            :key="category.id"
            class="projects__category"
            :data="category"
            :background-active="category.name === activeCategory ? true : false"
            :redirect="false"
            :show-title="false"
          />
        </div>
        <div class="projects__list">
          <project v-for="project in (activeProjects.length === 0 ? projects : activeProjects)" :key="project.id" class="projects__item" :data="project" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

import { categories } from '../../data/categories'

export default {
  name: 'ProjectsPage',
  data () {
    return {
      categories
    }
  },
  computed: {
    ...mapState({
      projects: state => state.app.projects,
      activeProjects: state => state.app.projectsByCategory,
      activeCategory: state => state.app.activeCategory
    })
  }
}
</script>

<style scoped src="../../assets/styles/pages/projects.scss" lang="scss" />

<router>
{
  path: '/projets'
}
</router>
