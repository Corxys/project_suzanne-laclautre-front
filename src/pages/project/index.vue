<template>
  <section class="project">
    <div class="project__header">
      <h2 class="project__header-title">
        Le jeu du 6/6
      </h2>
      <h3 class="project__header-date">
        2021
      </h3>
      <div class="project__header-image mobile">
        <nuxt-img src="/images/project-page_01.png" alt="" />
      </div>
      <p class="project__header-text">
        Le projet à été réalisé dans le cadre d’un service civique au sein de l’association, en tant que designer sur le quartier de l’Elsau. En complément des enseignements de géographie sur «l’habiter et l’habiter mieux», et par des interventions ponctuelles, nous souhaitions donner des clés de compréhension aux élèves sur leur quartier et sa rénovation en cours afin de favoriser leur participation dans l’évolution de leur environnement. Cette démarche convoquait à la fois la conception et la réalisation de divers outils pédagogiques et l’animation de plusieurs ateliers d’éveil et de sensibilisation aux transformations du quartier de l’Elsau avec 3 classes de CM1 de l’école Léonard de Vinci. Dans cette collection d’outils on trouve notamment Le jeu du 6/6: un outils de discussion qui a pour but de se familiariser au vocabulaire et aux principes écologiques dans l’espace urbain tout en sensibilisant aux écogestes.
      </p>
      <arrow-back class="desktop" />
    </div>
    <div class="project__content">
      <div class="project__content-images">
        <nuxt-img class="project__content-image desktop" src="/images/project-page_01.png" alt="" />
        <nuxt-img class="project__content-image" src="/images/project-page_02.png" alt="" />
        <nuxt-img class="project__content-image" src="/images/project-page_03.png" alt="" />
      </div>
      <arrow-back class="mobile" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectPage'
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
  path: '/projet'
}
</router>
