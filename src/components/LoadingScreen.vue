<template>
  <div v-if="loading" class="loading">
    <div class="loading__image">
      <nuxt-img class="loading__image-border" src="/images/loader_border.svg" alt="Scroll pour en voir plus" />
      <nuxt-img class="loading__image-body" src="/images/scroll_body.png" alt="Illustration" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import gsap from 'gsap'

export default {
  name: 'LoadingScreenComponent',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects.projects
    })
  },
  // updated () {
  //   const tl = new gsap.timeline({ repeat: 0 })
  //   tl.from('.loading__image', { opacity: 0, delay: 1 })
  //   tl.to('.loading__image', { opacity: 1, delay: 1 })
  // },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.loading {
  z-index: 100;
  background-color: $color-white;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__image {
    position: relative;
    width: 115px;
    height: 115px;
    &-border {
      position: relative;
      height: 100%;
      width: 100%;
      animation: 5s linear infinite rotate;
    }
    &-body {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 55%;
    }
  }
}

@keyframes rotate {
  from { transform: rotate(0deg) translate3d(0px, 0px, 0px) }
  to { transform: rotate(360deg) translate3d(0px, 0px, 0px) }
}
</style>
