<template>
  <div class="container">
    <header class="header">
      <div class="header__categories">
        <nuxt-link class="header__category" to="/projets">
          <img class="header__category-image" src="@/assets/images/category_graphism.png" alt="Dessin d'un crayon">
          <div class="header__category-title">
            Graphisme
          </div>
        </nuxt-link>
        <nuxt-link class="header__category" to="/projets">
          <img class="header__category-image" src="@/assets/images/category_edition.png" alt="Dessin d'un carnet avec une fleur sur la couverture">
          <div class="header__category-title">
            Édition
          </div>
        </nuxt-link>
        <nuxt-link class="header__category" to="/projets">
          <img class="header__category-image" src="@/assets/images/category_workshop.png" alt="Dessin d'une paire de ciseaux">
          <div class="header__category-title">
            Ateliers
          </div>
        </nuxt-link>
        <nuxt-link class="header__category" to="/projets">
          <img class="header__category-image" src="@/assets/images/category_illustration.png" alt="Dessin de deux cartes avec des formes abstraites">
          <div class="header__category-title">
            Illustrations
          </div>
        </nuxt-link>
        <nuxt-link class="header__category" to="/projets">
          <img class="header__category-image" src="@/assets/images/category_tools.png" alt="Dessin d'une boîte rectangulaire ouverte">
          <div class="header__category-title">
            Dispositifs
          </div>
        </nuxt-link>
        <div class="header__category mobile">
          <div class="header__scroll">
            <img class="header__scroll-border" src="@/assets/images/scroll_border.png" alt="Scroll pour en voir plus">
            <img class="header__scroll-body" src="@/assets/images/scroll_body.png" alt="Illustration">
          </div>
        </div>
      </div>
      <div class="header__scroll desktop">
        <img class="header__scroll-border" src="@/assets/images/scroll_border.png" alt="Scroll pour en voir plus">
        <img class="header__scroll-body" src="@/assets/images/scroll_body.png" alt="Illustration">
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
              <div class="section__project">
                <nuxt-link to="/projet">
                  <img class="section__project-image" src="@/assets/images/project_01.png" alt="Cartes de visite">
                  <span class="section__project-text">
                    Cartes de visite
                    <br>
                    2021
                  </span>
                </nuxt-link>
              </div>
              <div class="section__project">
                <nuxt-link to="/projet">
                  <img class="section__project-image" src="@/assets/images/project_02.png" alt="Objet d'édition">
                  <span class="section__project-text">
                    Édition
                    <br>
                    2021
                  </span>
                </nuxt-link>
              </div>
            </div>
            <div class="section__projects-line">
              <div class="section__project">
                <nuxt-link to="/projet">
                  <img class="section__project-image" src="@/assets/images/project_03.png" alt="Carotte avec des feuilles vertes sur fond jaune et rose">
                  <span class="section__project-text">
                    Illustration
                    <br>
                    2021
                  </span>
                </nuxt-link>
              </div>
              <div class="section__project">
                <nuxt-link to="/projet">
                  <img class="section__project-image" src="@/assets/images/project_04.png" alt="Badge jaune avec un casque de chantier dessiné dessus">
                  <span class="section__project-text">
                    Dispositifs
                    <br>
                    2021
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="section__contact">
          Mon travail t'intéresse ?
          <nuxt-link class="section__contact--bold" to="/contact">
            Contacte-moi !!
          </nuxt-link>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="footer__text">
        Crédits © {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 146px 0 50px 0;
  height: calc(100vh - 90px);
  background-image: linear-gradient(90deg, $color-primary 50%, $color-secondary 50%);
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
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__category {
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-weight: 700;
    text-transform: lowercase;
    min-height: 150px;
    &-image {
      width: 60%;
      max-width: 140px;
      margin-bottom: 10px;
    }
    &:last-child {
      justify-self: flex-start;
    }
    &-title {
      max-width: 120px;
    }
  }
  &__scroll {
    z-index: 5;
    position: relative;
    height: 100px;
    width: 100px;
    &-border {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
    &-body {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
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
    }
    &__category {
      margin: 0 20px 0 20px;
      min-width: 90px;
      &:nth-child(1) {
        margin-left: 0;
      }
      &:nth-child(5) {
        margin-right: 0;
      }
      &:nth-child(6) {
        display: none;
      }
      &-image {
        width: 100%;
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
  &__project {
    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &-text {
      display: none;
    }
  }
  &__contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--bold {
      margin-top: 3px;
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
    &__project {
      margin: 30px;
      &-image {
        object-fit: scale-down;
      }
      &:nth-child(1) {
        object-position: top right;
      }
      &:nth-child(2) {
        object-position: bottom left;
      }
      &:nth-child(3) {
        object-position: top right;
      }
      &:nth-child(4) {
        object-position: bottom left;
      }
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
    width: 70%;
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
