<template>
  <div class="container">
    <header class="header">
      <div class="header__categories">
        <category v-for="category of categories" :key="category.id" :data="category" :redirect="true" :show-title="true" />
        <div class="header__category mobile">
          <div class="header__scroll">
            <nuxt-img provider="static" format="webp" class="header__scroll-border" src="/images/scroll_border.png" alt="Scroll pour en voir plus" />
            <nuxt-img provider="static" format="webp" class="header__scroll-body" src="/images/scroll_body.png" alt="Illustration" />
          </div>
        </div>
      </div>
      <div class="header__scroll desktop">
        <nuxt-img provider="static" format="webp" class="header__scroll-border" src="/images/scroll_border.png" alt="Scroll pour en voir plus" />
        <nuxt-img provider="static" format="webp" class="header__scroll-body" src="/images/scroll_body.png" alt="Illustration" />
      </div>
      <div class="header__background" />
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
    <foo-ter />
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
      projects: state => state.app.projects
    })
  },
  mounted () {
    window.addEventListener('scroll', this.rotateTriggerScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.rotateTriggerScroll)
  },
  methods: {
    /**
     * @name rotateTriggerScroll
     * on scroll, rotate the scroll trigger
     */
    rotateTriggerScroll () {
      const triggers = document.querySelectorAll('.header__scroll-border')
      triggers.forEach((trigger) => {
        trigger.style.transform = 'rotate(' + window.scrollY / 2 + 'deg) translate3d(0px, 0px, 0px)'
      })
    }
  }
}
</script>

<style scoped src="../assets/styles/pages/home.scss" lang="scss" />
