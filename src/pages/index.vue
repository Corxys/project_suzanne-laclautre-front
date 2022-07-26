<template>
  <div class="container">
    <header class="header">
      <nav class="header__nav">
        <div class="header__nav-text">
          <div class="header__nav-logo">
            <nuxt-link to="/">
              <span class="header__nav-logo--bold">Suzanne</span> Laclautre
            </nuxt-link>
            <p class="header__nav-intro">
              Designeuse graphique <br /> et conceptrice d’outils pédagogiques.
            </p>
          </div>
        </div>
        <div class="header__nav-buttons">
          <nuxt-link to="/a-propos">
            <div class="header__nav-button button">
                À propos
            </div>
          </nuxt-link>
          <nuxt-link to="/contact">
            <div class="header__nav-button button">
                Contact
            </div>
          </nuxt-link>
        </div>
      </nav>
      <div class="header__categories">
        <div class="header__category">
          <img class="header__category-img" src="@/assets/images/category_graphism.png" alt="Dessin d'un crayon" />
          <div class="header__category-title">Graphisme</div>
        </div>
        <div class="header__category">
          <img src="@/assets/images/category_edition.png" alt="Dessin d'un crayon" />
          <div class="header__category-title">Édition</div>
        </div>
        <div class="header__category">
          <img src="@/assets/images/category_workshop.png" alt="Dessin d'un crayon" />
          <div class="header__category-title">Ateliers</div>
        </div>
        <div class="header__category">
          <img src="@/assets/images/category_illustration.png" alt="Dessin d'un crayon" />
          <div class="header__category-title">Illustrations</div>
        </div>
        <div class="header__category">
          <img src="@/assets/images/category_tools.png" alt="Dessin d'un crayon" />
          <div class="header__category-title">Dispositifs</div>
        </div>
      </div>
      <div class="header__scroll">
        <img class="header__scroll-border" src="@/assets/images/scroll_border.png" alt="Scroll pour en voir plus">
        <img class="header__scroll-body" src="@/assets/images/scroll_body.png" alt="Illustration">
      </div>
    </header>
    <section class="section">
      <h1 class="section__title">
        À la une
      </h1>
      <div class="section__content">
        <div class="section__projects">
          <div class="section__projects-line">
            <div class="section__project" @mousemove="showTooltip">
              <img class="section__project-img" src="@/assets/images/project_01.png" alt="Cartes de visite" />
              <span class="section__project-text">
                Cartes de visite
                <br/>
                2021
              </span>
            </div>
            <div class="section__project">
              <img class="section__project-img" src="@/assets/images/project_02.png" alt="Objet d'édition" />
              <span class="section__project-text">
                Édition
                <br/>
                2021
              </span>
            </div>
          </div>
          <div class="section__projects-line">
            <div class="section__project">
              <img class="section__project-img" src="@/assets/images/project_03.png" alt="Carotte avec des feuilles vertes sur fond jaune et rose" />
              <span class="section__project-text">
                Illustration
                <br/>
                2021
              </span>
            </div>
            <div class="section__project">
              <img class="section__project-img" src="@/assets/images/project_04.png" alt="Badge jaune avec un casque de chantier dessiné dessus" />
              <span class="section__project-text">
                Dispositifs
                <br/>
                2021
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="section__contact">
        Mon travail t'intéresse ?
        <span class="section__contact--bold">
          Contacte-moi !!
        </span>
      </div>
    </section>
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

<style lang="scss">
.header {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 65px;
  background: linear-gradient(90deg, $color-primary 50%, $color-secondary 50%);

  &:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-image: linear-gradient(0deg, $color-white 10%, #ffffff00 100%);
    width: 100%;
    height: 20%;
  }

  &__nav {
    height: 100px;
    position: absolute;
    top: 0;
    left: 65px;
    right: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $font-secondary;
    font-size: 18px;

    &-text {
      position: relative;
    }

    &-logo {
      min-width: 232px;

      &--bold {
        position: relative;
        font-weight: 700;

        &:after {
          content: '';
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: 2px;
          left: 0;
          background-color: $color-black;
        }
      }
    }

    &-intro {
      position: absolute;
      top: 40px;
      left: 0;
      font-family: $font-primary;
      font-size: 14px;
    }

    &-buttons {
      display: flex;
    }

    &-button {
      &:first-child {
        margin-right: 40px;
      }
    }
  }

  &__categories {
    display: flex;
    align-items: center;
  }

  &__category {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    text-transform: lowercase;
    margin: 0 20px;

    &:first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }

    &-title {
      margin-top: 15px;
    }
  }

  &__scroll {
    position: absolute;
    right: 132px;
    bottom: 132px;
    z-index: 5;

    &-border {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 150px;
      width: 150px;
    }

    &-body {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 85px;
      width: 85px;
    }
  }
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 65px;
  margin: 65px 0;

  &__content {
    width: 100%;
    display: flex;
    justify-content: stretch;
  }

  &__projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin: 65px 0;
    padding: 0 165px;

    &-line {
      display: flex;

      &:first-child {
        align-items: flex-end;
      }

      &:last-child {
        align-items: flex-start;
      }
    }

    div {
      img {
        object-fit: scale-down;
      }
    }

    :nth-child(1) {
      img {
        object-position: top right;
      }
    }
    :nth-child(2) {
      img {
        object-position: bottom left;
      }
    }
    :nth-child(3) {
      img {
        object-position: top right;
      }
    }
    :nth-child(4) {
      img {
        object-position: bottom left;
      }
    }
  }

  &__project {
    position: static;
    margin: 30px;

    &-text {
      display: none;
    }

    &:hover {
      span {
        z-index: 10;
        width: 150px;
        display: block;
        position: fixed;
        background-color: red;
      }
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

.footer {
  display: flex;
  justify-content: center;
  padding: 0 65px;
  text-align: center;

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-top: 1px solid $color-black;
    width: 50%;
  }
}
</style>
