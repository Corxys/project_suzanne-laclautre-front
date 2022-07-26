<template>
  <section class="contact">
    <div class="contact__nav">
      <Logo class="contact__logo" />
    </div>
    <div class="contact__content">
      <div class="contact__content-infos">
        <p class="contact__content-text">
          Design graphique, design de services et dispositifs pédagogiques.
        </p>
        <div class="contact__content-lines">
          <div class="contact__content-line">
            <img class="contact__content-line-icon" src="@/assets/images/contact_mail-icon.png" alt="Icône d'une enveloppe noire" />
            <div class="contact__content-line-text">suzanne.laclautre@gmail.com</div>
          </div>
          <div class="contact__content-line">
            <img class="contact__content-line-icon" src="@/assets/images/contact_city-icon.png" alt="Icône d'un marqueur sur une carte" />
            <div class="contact__content-line-text">Strasbourg</div>
          </div>
        </div>
        <button class="contact__content-button button">
          Télécharger mon CV
        </button>
        <div class="contact__content-socials">
          <img class="contact__content-social" src="@/assets/images/contact_instagram-icon.png" alt="Logo du réseau social Instagram" />
          <img class="contact__content-social" src="@/assets/images/contact_linkedin-icon.png" alt="Logo du réseau professionnel LinkedIn" />
        </div>
      </div>
      <nuxt-link class="contact__content-back" to="/">
        <ArrowBack />
      </nuxt-link>
    </div>
    <div class="contact__form-wrapper">
      <form class="contact__form">
        <div class="contact__form-line">
          <input class="contact__form-input contact__form-input--first-child" type="text" placeholder="votre nom" />
          <input class="contact__form-input" type="text" placeholder="votre prénom" />
        </div>
        <div class="contact__form-line">
          <input class="contact__form-input" type="text" placeholder="objet" />
        </div>
        <textarea class="contact__form-input" placeholder="votre message"></textarea>
        <input class="contact__form-input" type="submit" value="envoyer" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  height: 100vh;
  &__nav {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 65px;
  }

  &__content, &__form {
    padding: 65px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color: $color-secondary;

    &-button {
      padding: 7px 20px 7px 20px;
      background-color: $color-primary;
      text-transform: none;
      font-style: italic;
      margin-bottom: 40px;
    }
    &-infos {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
    }
    &-lines {
      align-self: flex-start;
      margin: 40px 0;
    }
    &-line {
      display: flex;
      align-items: center;

      &:first-child {
        margin-bottom: 15px;
      }

      &-icon {
        width: 17px;
        margin-right: 20px;
      }
    }
    &-socials {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &-social {
      &:first-child {
        margin-bottom: 10px;
      }
    }
    &-back {
      align-self: flex-start;
    }
  }

  &__form {
    min-width: 100%;
    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60%;
    }

    &-line {
      display: flex;
      margin-bottom: 10px;
    }

    &-input {
      &--first-child {
        margin-right: 10px;
      }
    }

    input {
      width: 100%;
      min-height: 38px;
      padding: 0 20px;
      border: 1px solid $color-black;
    }

    textarea {
      vertical-align: top;
      min-height: 150px;
      max-height: 450px;
      margin-bottom: 10px;
      border: 1px solid $color-black;
      padding: 20px;
      width: 100%;
      resize: vertical;
    }

    input[type=submit] {
      text-align: center;
    }
    width: 60%;
  }
}
</style>
