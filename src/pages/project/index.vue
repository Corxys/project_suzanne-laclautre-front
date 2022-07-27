<template>
  <section class="project">
    <div class="project__text">
      <h2 class="project__title">
        Le jeu du 6/6
      </h2>
      <h3 class="project__date">
        2021
      </h3>
      <p class="project__paragraph">
        Le projet à été réalisé dans le cadre d’un service civique au sein de l’association, en tant que designer sur le quartier de l’Elsau. En complément des enseignements de géographie sur «l’habiter et l’habiter mieux», et par des interventions ponctuelles, nous souhaitions donner des clés de compréhension aux élèves sur leur quartier et sa rénovation en cours afin de favoriser leur participation dans l’évolution de leur environnement. Cette démarche convoquait à la fois la conception et la réalisation de divers outils pédagogiques et l’animation de plusieurs ateliers d’éveil et de sensibilisation aux transformations du quartier de l’Elsau avec 3 classes de CM1 de l’école Léonard de Vinci. Dans cette collection d’outils on trouve notamment Le jeu du 6/6: un outils de discussion qui a pour but de se familiariser au vocabulaire et aux principes écologiques dans l’espace urbain tout en sensibilisant aux écogestes.
      </p>
      <arrow-back />
    </div>
    <div class="project__images">
      <img class="project__image" src="@/assets/images/project-page_01.png">
      <img class="project__image" src="@/assets/images/project-page_02.png">
      <img class="project__image" src="@/assets/images/project-page_03.png">
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
  margin: 200px 0;
  padding: 0 20%;

  &__text {
    margin-right: 40px;
  }

  &__title {
    margin-bottom: 50px;
  }

  &__date {
    margin-bottom: 60px;
  }

  &__paragraph {
    line-height: 1.5;
    margin-bottom: 65px;
    width: 80%;
  }

  &__images {
    img {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
