<template>
  <div class="category" @click="getProjectsByCategory(data.name, redirect)">
    <div class="category__image">
      <nuxt-img provider="static" format="webp" class="category__source" :src="data.src" :alt="data.alt" />
      <div class="category__background" :class="{ active: backgroundActive }" />
    </div>
    <div v-show="showTitle" class="category__title">
      {{ data.name }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProjectsCategoryComponent',
  props: {
    redirect: {
      type: Boolean,
      required: true
    },
    showTitle: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      required: true,
      default () {
        return { id: 1, name: 'Catégorie', src: '/', alt: 'Texte alternatif de l\'image.' }
      }
    },
    backgroundActive: {
      type: Boolean
    }
  },
  methods: {
    ...mapMutations('app', ['GET_PROJECTS_BY_CATEGORY']),
    getProjectsByCategory (categoryName, redirect) {
      this.GET_PROJECTS_BY_CATEGORY({ name: categoryName, redirect })
      if (redirect) { this.$router.push('/projets') }
    }
  }
}
</script>

<style scoped lang="scss">
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &__image {
    position: relative;
    margin: 0 10px;
  }
  &__source {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__title {
    font-weight: 700;
    text-transform: lowercase;
    margin-top: 20px;
  }
  &__background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    transition: all 200ms ease-in-out;
    &.active {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 768px) {
  .category {
    &:hover {
      .category__background {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
