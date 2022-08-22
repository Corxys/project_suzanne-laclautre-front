<template>
  <div class="container">
    <header class="header">
      <div ref="categories" class="header__categories">
        <category v-for="category of categories" :key="category.id" :data="category" :redirect="true" :show-title="true" />
        <div class="header__category mobile">
          <div ref="scroll" class="header__scroll">
            <nuxt-img class="header__scroll-border" src="/images/scroll_border.png" alt="Scroll pour en voir plus" />
            <nuxt-img class="header__scroll-body" src="/images/scroll_body.png" alt="Illustration" />
          </div>
        </div>
      </div>
      <div ref="scroll" class="header__scroll desktop">
        <nuxt-img class="header__scroll-border" src="/images/scroll_border.png" alt="Scroll pour en voir plus" />
        <nuxt-img class="header__scroll-body" src="/images/scroll_body.png" alt="Illustration" />
      </div>
      <div ref="background" class="header__background" />
    </header>
    <main class="main">
      <section class="section">
        <h1 class="section__title">
          À la une
        </h1>
        <div class="section__content">
          <div class="section__projects">
            <div class="section__projects-line">
              <project v-for="project in projects.filter(project => project.spotlight === true).slice(0, 2)" :key="project.id" :data="project" />
            </div>
            <div class="section__projects-line">
              <project v-for="project in projects.filter(project => project.spotlight === true).slice(2, 4)" :key="project.id" :data="project" />
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
  </div>
</template>

<script>
import gsap from 'gsap'
import { mapState } from 'vuex'

import { categories } from '../data/categories'

export default {
  name: 'HomePage',
  data () {
    return {
      categories,
      visitSession: true
    }
  },
  computed: {
    ...mapState({
      projects: state => state.app.projects,
      activeCategory: state => state.projects.activeCategory
    })
  },
  mounted () {
    // const tween = gsap.to(this.$refs.background, { backgroundImage: 'linear-gradient(0deg, #FCFAF3 0%, #FCFAF300 20%)', duration: 1, delay: 1 })
    // tween.invalidate()
    // const timelineBackground = new gsap.timeline({ repeatRefresh: true })
    // timelineBackground.to(this.$refs.background, { backgroundImage: 'linear-gradient(0deg, #FCFAF3 0%, #FCFAF300 20%)', duration: 1, delay: 1 })
    // const timelineCategories = new gsap.timeline({ repeatRefresh: true })
    // timelineCategories.to(this.$refs.categories, { opacity: 1, delay: 2.5 })
    // const scrolls = document.querySelectorAll('.header__scroll')
    // scrolls.forEach((scroll) => {
    //   const timelineScroll = new gsap.timeline({ repeatRefresh: true })
    //   timelineScroll.to(scroll, { opacity: 1, delay: 2.5 })
    // })
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
  padding: 0 0 30px 0;
  background-image: linear-gradient(90deg, $color-primary 50%, $color-secondary 50%);
  &__background {
    z-index: 5;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #FCFAF3 0%, #FCFAF300 20%);
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
  :deep(.category) {
    width: 50%;
    height: calc(100% / 3);
  }
  :deep(.category__image) {
      height: 140px;
      width: 140px;
  }
  :deep(.category__background) {
    background: radial-gradient(circle at center, rgba(252,250,243,1) 10%, rgba(252,250,243,0) 72%);
  }
  &__scroll {
    z-index: 10;
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
    :deep(.category__image) {
      height: auto;
      width: auto;
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
  :deep(.project) {
    position: relative;
    max-width: 50%;
  }
  :deep(.project__image) {
    width: 100%;
    height: 100%;
    max-height: 600px;
    object-fit: cover;
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
    :deep(.project) {
      margin: 30px;
    }
  }
}
</style>
