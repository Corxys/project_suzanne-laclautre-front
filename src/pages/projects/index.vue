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

<style scoped lang="scss">
.projects {
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 176px 30px 100px 30px;
  }
  &__filter {
    display: flex;
    margin-bottom: 50px;
    width: 100%;
  }
  :deep(.category__background) {
    background: radial-gradient(circle at center, $color-secondary 10%, $color-secondary-gradient 72%);
  }
  :deep(.category__background.active) {
    background: radial-gradient(circle at center, $color-primary 10%, $color-primary-gradient 72%);
  }
  &__item {
    margin-bottom: 30px;
  }
}

@media (min-width: 768px) {
  .projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__content {
      align-items: flex-start;
      width: 100%;
      padding: 176px 65px 100px 65px;
    }
    &__filter {
      width: 80%;
    }
    &__list {
      column-count: 3;
      column-gap: 30px;
    }
    &__item {
      display: inline-block;
      width: 100%;
    }
  }
}

@media (min-width: 1200px) {
  .projects {
    &__content {
      max-width: 1200px;
    }
  }
}
</style>

<router>
{
  path: '/projets'
}
</router>
