<template>
  <div class="project" @click="getProject(data)" @mouseenter="showToolkit = true" @mousemove="moveToolkit" @mouseleave="showToolkit = false">
    <img class="project__image" :src="data.pictures[0].source" :data="data.pictures[0].alt !== '' ? data.pictures[0].alt : ''">
    <div ref="toolkit" class="project__text" :class="{ active: showToolkit }">
      <span class="project__text--bold">
        {{ data.title }}
      </span>
      {{ data.year }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import { slugifyTitle } from '../utils/slugifyTitle'

export default {
  name: 'ProjectComponent',
  props: {
    data: {
      type: Object,
      required: true,
      default () {
        return { id: 1, title: 'Projet', year: '2022', src: '/', alt: 'Texte alternatif de l\'image.' }
      }
    }
  },
  data () {
    return {
      showToolkit: false
    }
  },
  methods: {
    ...mapMutations('projects', ['GET_PROJECT']),
    getProject (project) {
      this.GET_PROJECT({ project })
      this.$router.push(`/projet/${slugifyTitle(project.title)}`)
    },
    moveToolkit (event) {
      const target = this.$refs.toolkit
      const offset = target.parentElement.getBoundingClientRect()
      const tipDist = 15
      target.style.top = (event.clientY - offset.top + tipDist) + 'px'
      target.style.left = (event.clientX - offset.left + tipDist) + 'px'
    }
  }
}
</script>

<style scoped lang="scss">
.project {
  cursor: pointer;
  position: relative;
  &__image {
    display: block;
    width: 100%;
  }
  &__text {
    z-index: 10;
    display: none;
    position: absolute;
    background-color: $color-black;
    padding: 10px;
    min-width: 150px;
    color: $color-white;
    white-space: nowrap;
    &--bold {
      font-weight: 700;
      margin-bottom: 5px;
    }
  }
}

@media (min-width: 768px) {
  .project {
    &__text {
      &.active {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
