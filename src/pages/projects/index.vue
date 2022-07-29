<template>
  <div class="projects">
    <div class="projects__content">
      <div class="projects__filter">
        <div class="projects__item">
          <img class="projects__item-image" src="@/assets/images/category_graphism.png" alt="Dessin d'un crayon">
        </div>
        <div class="projects__item">
          <img class="projects__item-image" src="@/assets/images/category_edition.png" alt="Dessin d'un carnet avec une fleur sur la couverture">
        </div>
        <div class="projects__item">
          <img class="projects__item-image" src="@/assets/images/category_workshop.png" alt="Dessin d'une paire de ciseaux">
        </div>
        <div class="projects__item">
          <img class="projects__item-image" src="@/assets/images/category_illustration.png" alt="Dessin de deux cartes avec des formes abstraites">
        </div>
        <div class="projects__item">
          <img class="projects__item-image" src="@/assets/images/category_tools.png" alt="Dessin d'une boîte rectangulaire ouverte">
        </div>
      </div>
      <div class="projects__list">
        <div class="projects__image">
          <nuxt-link to="/projet">
            <img class="projects__image-src" src="@/assets/images/project_01.png" :alt="`Photo du projet ${ '' }`">
          </nuxt-link>
        </div>
        <div class="projects__image">
          <nuxt-link to="/projet">
            <img class="projects__image-src" src="@/assets/images/project_02.png" :alt="`Photo du projet ${ '' }`">
          </nuxt-link>
        </div>
        <div class="projects__image">
          <nuxt-link to="/projet">
            <img class="projects__image-src" src="@/assets/images/project_03.png" :alt="`Photo du projet ${ '' }`">
          </nuxt-link>
        </div>
        <div class="projects__image">
          <nuxt-link to="/projet">
            <img class="projects__image-src" src="@/assets/images/project_04.png" :alt="`Photo du projet ${ '' }`">
          </nuxt-link>
        </div>
        <div class="projects__image">
          <nuxt-link to="/projet">
            <img class="projects__image-src" src="@/assets/images/project_05.png" :alt="`Photo du projet ${ '' }`">
          </nuxt-link>
        </div>
        <div class="projects__image">
          <nuxt-link to="/projet">
            <img class="projects__image-src" src="@/assets/images/project_06.png" :alt="`Photo du projet ${ '' }`">
          </nuxt-link>
        </div>
        <div class="projects__image">
          <nuxt-link to="/projet">
            <img class="projects__image-src" src="@/assets/images/project_07.png" :alt="`Photo du projet ${ '' }`">
          </nuxt-link>
        </div>
        <div class="projects__image">
          <nuxt-link to="/projet">
            <img class="projects__image-src" src="@/assets/images/project_08.png" :alt="`Photo du projet ${ '' }`">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage'
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
    margin: 0 5px 0 5px;
    &-image {
      width: 100%;
    }
  }
  &__image {
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
