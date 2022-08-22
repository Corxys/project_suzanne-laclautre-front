<template>
  <section v-if="project" class="project">
    <!--    {{ project }}-->
    <div class="project__header">
      <h2 class="project__header-title">
        {{ project.title }}
      </h2>
      <h3 class="project__header-date">
        {{ project.year }}
      </h3>
      <div class="project__header-image mobile">
        <img v-if="project.pictures" :src="project.pictures[0].source" :alt="project.pictures[0].alt ? project.pictures[0].alt : ''">
      </div>
      <p class="project__header-text">
        {{ project.description }}
      </p>
      <arrow-back class="desktop" />
    </div>
    <div class="project__content">
      <div v-if="project.pictures" class="project__content-images">
        <img v-for="(image, index) in project.pictures" :key="image.id" :class="index === 0 ? 'project__content-image desktop' : 'project__content-image'" :src="image.source" :alt="image.alt ? image.alt : ''">
      </div>
      <arrow-back class="mobile" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProjectPage',
  computed: {
    ...mapState({
      project: state => state.app.project
    })
  }
}
</script>

<style scoped lang="scss">
.project {
  display: flex;
  flex-direction: column;
  padding: 100px 30px 100px 30px;
  &__header {
    &-date {
      margin: 10px 0;
    }
    &-image {
      margin: 30px 0;
      img {
        width: 100%;
      }
    }
    &-text {
      white-space: pre-line;
      line-height: 1.5;
    }
  }
  &__content {
    &-images {
      margin-top: 30px;
      img {
        width: 100%;
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 80px;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .project {
    flex-direction: row;
    justify-content: center;
    padding: 176px 65px 100px 65px;
    &__header {
      margin-right: 30px;
      width: 40%;
      max-width: 400px;
      &-title {
        margin-bottom: 30px;
      }
      &-date {
        margin-bottom: 40px;
      }
      &-text {
        margin-bottom: 80px;
      }
    }
    &__content {
      width: 60%;
      max-width: 550px;
      &-images {
        margin-top: 0;
        img {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>

<router>
{
  path: '/projet/:slug'
}
</router>
