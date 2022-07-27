<template>
  <div class="projects">
    <div class="projects__content">
      <div class="projects__filter">
        <div class="projects__item">
          <img class="header__category-img" src="@/assets/images/category_graphism.png" alt="Dessin d'un crayon" />
        </div>
        <div class="projects__item">
          <img src="@/assets/images/category_edition.png" alt="Dessin d'un crayon" />
        </div>
        <div class="projects__item">
          <img src="@/assets/images/category_workshop.png" alt="Dessin d'un crayon" />
        </div>
        <div class="projects__item">
          <img src="@/assets/images/category_illustration.png" alt="Dessin d'un crayon" />
        </div>
        <div class="projects__item">
          <img src="@/assets/images/category_tools.png" alt="Dessin d'un crayon" />
        </div>
      </div>
      <div class="projects__list">
        <div class="projects__image">
          <img class="projects__image-src" src="@/assets/images/project_01.png" />
        </div>
        <div class="projects__image">
          <img class="projects__image-src" src="@/assets/images/project_02.png" />
        </div>
        <div class="projects__image">
          <img class="projects__image-src" src="@/assets/images/project_03.png" />
        </div>
        <div class="projects__image">
          <img class="projects__image-src" src="@/assets/images/project_04.png" />
        </div>
        <div class="projects__image">
          <img class="projects__image-src" src="@/assets/images/project_05.png" />
        </div>
        <div class="projects__image">
          <img class="projects__image-src" src="@/assets/images/project_06.png" />
        </div>
        <div class="projects__image">
          <img class="projects__image-src" src="@/assets/images/project_07.png" />
        </div>
        <div class="projects__image">
          <img class="projects__image-src" src="@/assets/images/project_08.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage'
}
</script>

<style scoped lang="scss">
.projects {
  margin: 200px 0;
  nav {
    height: 100px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
  }
  &__filter {
    align-self: flex-start;
    display: flex;
    margin-bottom: 50px;
  }
  &__item {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100px;
    }
  }
  &__list {
    columns: 3;
    column-count: 3;
    column-gap: 40px;
  }
  &__image {
    margin-bottom: 40px;
    &-src {
      width: 100%;
    }
  }
}
</style>
