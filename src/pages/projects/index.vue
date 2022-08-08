<template>
  <div class="projects">
    <div class="projects__content">
      <div class="projects__filter">
        <div class="projects__item" @click="GET_PROJECTS_BY_CATEGORIES({ type: 'Graphisme' })">
          <nuxt-img class="projects__item-image" src="/images/category_graphism.png" alt="Dessin d'un crayon" />
        </div>
        <div class="projects__item" @click="GET_PROJECTS_BY_CATEGORIES({ type: 'Édition' })">
          <nuxt-img class="projects__item-image" src="/images/category_edition.png" alt="Dessin d'un carnet avec une fleur sur la couverture" />
        </div>
        <div class="projects__item" @click="GET_PROJECTS_BY_CATEGORIES({ type: 'Ateliers' })">
          <nuxt-img class="projects__item-image" src="/images/category_workshop.png" alt="Dessin d'une paire de ciseaux" />
        </div>
        <div class="projects__item" @click="GET_PROJECTS_BY_CATEGORIES({ type: 'Illustrations' })">
          <nuxt-img class="projects__item-image" src="/images/category_illustration.png" alt="Dessin de deux cartes avec des formes abstraites" />
        </div>
        <div class="projects__item" @click="GET_PROJECTS_BY_CATEGORIES({ type: 'Dispositifs' })">
          <nuxt-img class="projects__item-image" src="/images/category_tools.png" alt="Dessin d'une boîte rectangulaire ouverte" />
        </div>
      </div>
      <div class="projects__list">
        <div v-for="project in (activeProjects.length === 0 ? projects : activeProjects)" :key="project.id" class="projects__image" @click="handleGetProject(project)">
          <img :id="`project-${ project.id }`" class="projects__image-src" :src="project.pictures[0].source">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import slugify from 'slugify'

export default {
  name: 'ProjectsPage',
  computed: {
    ...mapState({
      projects: state => state.projects.projects,
      activeProjects: state => state.projects.activeProjects
    })
  },
  methods: {
    ...mapMutations('projects', ['GET_PROJECT']),
    ...mapMutations('projects', ['GET_PROJECTS_BY_CATEGORIES']),
    slugifyTitle (title) {
      const modifiedTitle = title.replace('_', '-').replace('&', '').replace('\'', '-')
      return (slugify(modifiedTitle, {
        lower: true
      }))
    },
    handleGetProject (project) {
      this.GET_PROJECT({ project })
      this.$router.push(`/projet/${this.slugifyTitle(project.title)}`)
    }
  }
}
</script>

<style scoped lang="scss">
.projects {
  nav {
    height: 100px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 176px 30px 100px 30px;
  }
  &__filter {
    align-self: flex-start;
    display: flex;
    margin-bottom: 50px;
    :nth-child(1) {
      margin-left: 0;
    }
    :nth-child(5) {
      margin-right: 0;
    }
  }
  &__item {
    cursor: pointer;
    margin: 0 5px 0 5px;
    &-image {
      width: 100%;
    }
  }
  &__image {
    cursor: pointer;
    margin-bottom: 30px;
    &-src {
      width: 100%;
    }
  }
}

@media (min-width: 768px) {
  .projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__content {
      padding: 176px 65px 100px 65px;
    }
    &__filter {
      width: 70%;
    }
    &__item {
      &-image {
        max-width: 122px;
      }
    }
    &__list {
      columns: 3;
      column-count: 3;
      column-gap: 30px;
    }
    &__image {
      margin-bottom: 30px;
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
