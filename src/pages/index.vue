<template>
  <div class="container">
    <header class="header">
      <div v-gsap.from="{ opacity: 0, delay: 1 }" v-gsap.to="{ opacity: 1, delay: 1 }" class="header__categories">
        <projects-category
          v-for="category of categories"
          :key="category.id"
          :data="category"
          :redirect="true"
          :show-title="true"
        />
        <div class="header__category mobile">
          <div class="header__scroll">
            <nuxt-img class="header__scroll-border" src="/images/scroll_border.png" alt="Scroll pour en voir plus" />
            <nuxt-img class="header__scroll-body" src="/images/scroll_body.png" alt="Illustration" />
          </div>
        </div>
      </div>
      <div v-gsap.from="{ opacity: 0, delay: 1.5 }" v-gsap.to="{ opacity: 1, delay: 1.5 }" class="header__scroll desktop">
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
              <project v-for="projectSpotlight in projectsSpotlight.slice(0, 2)" :key="projectSpotlight.id" :data="projectSpotlight" />
            </div>
            <div class="section__projects-line">
              <project v-for="projectSpotlight in projectsSpotlight.slice(2, 4)" :key="projectSpotlight.id" :data="projectSpotlight" />
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
import { mapState } from 'vuex'

import { categories } from '../data/categories'

export default {
  name: 'HomePage',
  data () {
    return {
      categories
    }
  },
  computed: {
    ...mapState({
      activeCategory: state => state.projects.activeCategory,
      projectsSpotlight: state => state.projects.projectsSpotlight
    })
  },
  mounted () {
    const scrollBorders = document.querySelectorAll('.header__scroll-border')
    scrollBorders.forEach((scrollBorder) => {
      window.addEventListener('scroll', () => {
        scrollBorder.style.transform = 'rotate(' + window.scrollY / 2 + 'deg) translate3d(0px, 0px, 0px)'
      })
    })
  },
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

.header {
  position: relative;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(90deg, $color-primary 50%, $color-secondary 50%);
  padding: 0 0 30px 0;
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
    align-items: center;
    flex-wrap: wrap;
    padding: 146px 0 30px 0;
    height: calc(var(--vh, 1vh) * 100);
  }
  &__category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: calc(100% / 3);
  }
  ::v-deep .category {
    width: 50%;
    height: calc(100% / 3);
    &__image {
      height: 140px;
      width: 140px;
    }
    &__background {
      background-color: $color-white;
    }
  }
  &__scroll {
    z-index: 5;
    position: relative;
    height: 100px;
    width: 100px;
    &-border {
      height: 100%;
      width: 100%;
    }
    &-body {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
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
      width: 100%;
      max-width: 900px;
      padding: 108px 0 65px 0;
    }
    &__category {
      display: none;
    }
    ::v-deep .category {
      &__image {
        height: auto;
        width: auto;
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
  ::v-deep .project {
    position: relative;
    max-width: 50%;
    &__image {
      width: 100%;
      height: 100%;
      max-height: 600px;
      object-fit: cover;
    }
  }
  &__contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--bold {
      margin-top: 7px;
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
    ::v-deep .project {
      margin: 30px;
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
    width: 80%;
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
