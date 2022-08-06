<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <header class="header">
      <div class="header__categories">
        <div class="header__category" @click="handleGetProjectsByCategory('Graphisme')">
          <nuxt-img class="header__category-image" src="/images/category_graphism.png" alt="Dessin d'un crayon" />
          <div class="header__category-title">
            Graphisme
          </div>
        </div>
        <div class="header__category" @click="handleGetProjectsByCategory('Édition')">
          <nuxt-img class="header__category-image" src="/images/category_edition.png" alt="Dessin d'un carnet avec une fleur sur la couverture" />
          <div class="header__category-title">
            Édition
          </div>
        </div>
        <div class="header__category" @click="handleGetProjectsByCategory('Ateliers')">
          <nuxt-img class="header__category-image" src="/images/category_workshop.png" alt="Dessin d'une paire de ciseaux" />
          <div class="header__category-title">
            Ateliers
          </div>
        </div>
        <div class="header__category" @click="handleGetProjectsByCategory('Illustrations')">
          <nuxt-img class="header__category-image" src="/images/category_illustration.png" alt="Dessin de deux cartes avec des formes abstraites" />
          <div class="header__category-title">
            Illustrations
          </div>
        </div>
        <div class="header__category" @click="handleGetProjectsByCategory('Dispositifs')">
          <nuxt-img class="header__category-image" src="/images/category_tools.png" alt="Dessin d'une boîte rectangulaire ouverte" />
          <div class="header__category-title">
            Dispositifs
          </div>
        </div>
        <div class="header__category mobile">
          <div class="header__scroll">
            <nuxt-img class="header__scroll-border" src="/images/scroll_border.png" alt="Scroll pour en voir plus" />
            <nuxt-img class="header__scroll-body" src="/images/scroll_body.png" alt="Illustration" />
          </div>
        </div>
      </div>
      <div class="header__scroll desktop">
        <nuxt-img class="header__scroll-border" src="/images/scroll_border.png" alt="Scroll pour en voir plus" />
        <nuxt-img class="header__scroll-body" src="/images/scroll_body.png" alt="Illustration" />
      </div>
    </header>
    <main class="main">
      <section class="section">
        <h1 class="section__title">
          À la une
        </h1>
        <div class="section__content">
          <div class="section__projects">
            <div class="section__projects-line">
              <div v-for="projectSpotlight in projectsSpotlight.slice(0, 2)" :key="projectSpotlight.id" class="section__project" @click="handleGetProject(projectSpotlight)">
                <img class="section__project-image" :src="$config.apiURL + projectSpotlight.attributes.photos.data[0].attributes.url">
                <span class="section__project-text">
                  {{ projectSpotlight.attributes.titre }}
                  <br>
                  {{ projectSpotlight.attributes.annee }}
                </span>
              </div>
            </div>
            <div class="section__projects-line">
              <div v-for="projectSpotlight in projectsSpotlight.slice(2, 4)" :key="projectSpotlight.id" class="section__project" @click="handleGetProject(projectSpotlight)">
                <img class="section__project-image" :src="$config.apiURL + projectSpotlight.attributes.photos.data[0].attributes.url">
                <span class="section__project-text">
                  {{ projectSpotlight.attributes.titre }}
                  <br>
                  {{ projectSpotlight.attributes.annee }}
                </span>
              </div>
            </div>
          </div>
          <div class="section__contact">
            Mon travail t'intéresse ?
            <nuxt-link class="section__contact--bold" to="/contact">
              Contacte-moi !!
            </nuxt-link>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="footer__text">
        Crédits © {{ new Date().getFullYear() }} | <nuxt-link class="footer__text-link" to="/mentions-legales">
          Mentions légales
        </nuxt-link>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import slugify from 'slugify'

export default {
  name: 'HomePage',
  computed: {
    ...mapState({
      projectsSpotlight: state => state.projects.projectsSpotlight
    })
  },
  methods: {
    ...mapMutations('projects', ['GET_PROJECT']),
    ...mapMutations('projects', ['GET_PROJECTS_BY_CATEGORIES']),
    slugifyTitle (title) {
      const modifiedTitle = title.replace('_', '-').replace('&', '').replace('\'', '-').replace('/', '-')
      return (slugify(modifiedTitle, {
        lower: true
      }))
    },
    handleGetProjectsByCategory (type) {
      this.GET_PROJECTS_BY_CATEGORIES({ type })
      this.$router.push('/projets')
    },
    handleGetProject (project) {
      this.GET_PROJECT({ project })
      this.$router.push(`/projet/${this.slugifyTitle(project.attributes.titre)}`)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 146px 0 50px 0;
  height: calc(100vh - 90px);
  background-image: linear-gradient(90deg, $color-primary 50%, $color-secondary 50%);
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20%;
    background-image: linear-gradient(0deg, $color-white 10%, #ffffff00 100%);
  }
  &__categories {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__category {
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-weight: 700;
    text-transform: lowercase;
    min-height: 150px;
    cursor: pointer;
    &-image {
      width: 60%;
      max-width: 140px;
      margin-bottom: 10px;
    }
    &:last-child {
      justify-self: flex-start;
    }
    &-title {
      max-width: 120px;
    }
  }
  &__scroll {
    z-index: 5;
    position: relative;
    height: 100px;
    width: 100px;
    &-border {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
    &-body {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
    }
  }
}

@media (min-width: 768px) {
  // RESPONSIVE FOR THE HEADER
  .header {
    position: relative;
    padding: 0 65px;
    height: 100vh;
    &__categories {
      align-items: center;
      flex-wrap: nowrap;
    }
    &__category {
      margin: 0 20px 0 20px;
      min-width: 90px;
      &:nth-child(1) {
        margin-left: 0;
      }
      &:nth-child(5) {
        margin-right: 0;
      }
      &:nth-child(6) {
        display: none;
      }
      &-image {
        width: 100%;
      }
    }
    &__scroll {
      position: absolute;
      right: 65px;
      bottom: 65px;
    }
  }
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  margin: 60px 0;
  &__content {
    max-width: 1200px;
    width: 100%;
  }
  &__projects {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
    &-line {
      display: flex;
    }
  }
  &__project {
    cursor: pointer;
    &-image {
      width: 100%;
      height: 100%;
      max-height: 600px;
      object-fit: cover;
    }
    &-text {
      display: none;
    }
  }
  &__contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--bold {
      margin-top: 3px;
      font-weight: 700;
    }
  }
}

@media (min-width: 768px) {
  // RESPONSIVE FOR THE SECTION PROJECTS
  .section {
    padding: 0 65px;
    &__projects {
      &-line {
        &:first-child {
          align-items: flex-end;
        }
        &:last-child {
          align-items: flex-start;
        }
      }
    }
    &__project {
      margin: 30px;
      &-image {
        object-fit: scale-down;
      }
      &:nth-child(1) {
        object-position: top right;
      }
      &:nth-child(2) {
        object-position: bottom left;
      }
      &:nth-child(3) {
        object-position: top right;
      }
      &:nth-child(4) {
        object-position: bottom left;
      }
    }
  }
}

.footer {
  display: flex;
  justify-content: center;
  padding: 0 30px;
  text-align: center;
  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-top: 1px solid $color-black;
    width: 70%;
    &-link {
      margin-left: 10px;
    }
  }
}

@media (min-width: 768px) {
  // RESPONSIVE FOR THE FOOTER
  .footer {
    &__text {
      width: 50%;
    }
  }
}
</style>
