<template>
  <section class="contact">
    <div class="contact__content">
      <div class="contact__infos">
        <p class="contact__infos-text">
          Design graphique, design de services et dispositifs pédagogiques.
        </p>
        <div class="contact__infos-lines">
          <div class="contact__infos-line">
            <img class="contact__infos-icon" src="@/assets/images/contact_mail-icon.png" alt="Icône d'une enveloppe noire">
            <div class="contact__infos-text">
              suzanne.laclautre@gmail.com
            </div>
          </div>
          <div class="contact__infos-line">
            <img class="contact__infos-icon" src="@/assets/images/contact_city-icon.png" alt="Icône d'un marqueur sur une carte">
            <div class="contact__infos-text">
              Strasbourg
            </div>
          </div>
        </div>
        <custom-button text="Télécharger mon CV" />
        <div class="contact__infos-socials">
          <img class="contact__infos-social" src="@/assets/images/contact_instagram-icon.png" alt="Logo du réseau social Instagram">
          <img class="contact__infos-social" src="@/assets/images/contact_linkedin-icon.png" alt="Logo du réseau professionnel LinkedIn">
        </div>
      </div>
      <nuxt-link class="contact__content-back" to="/">
        <ArrowBack />
      </nuxt-link>
    </div>
    <div class="contact__form-wrapper">
      <form class="contact__form">
        <div class="contact__form-line">
          <input class="contact__form-input contact__form-input--first-child" type="text" placeholder="votre nom">
          <input class="contact__form-input" type="text" placeholder="votre prénom">
        </div>
        <div class="contact__form-line">
          <input class="contact__form-input" type="text" placeholder="objet">
        </div>
        <textarea class="contact__form-input" placeholder="votre message" />
        <input class="contact__form-input" type="submit" value="envoyer">
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  beforeMount () {
    const vh = window.innerHeight / 100
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      const vh = window.innerHeight / 100
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }
}
</script>

<style scoped lang="scss">
:root {
  --vh: 1vh;
}

.contact {
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $color-secondary;
    padding: 100px 30px 40px 30px;
    &-back {
      align-self: flex-start;
    }
  }
  &__infos {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      align-self: flex-start;
      line-height: 1.5;
    }
    &-lines {
      align-self: flex-start;
      margin: 30px 0;
    }
    &-line {
      display: flex;
      align-items: center;
      &:first-child {
        margin-bottom: 15px;
      }
    }
    .button {
      padding: 7px 20px 7px 20px;
      background-color: $color-primary;
      text-transform: none;
      font-style: italic;
    }
    &-icon {
      width: 17px;
      margin-right: 20px;
    }
    &-socials {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 30px 0 40px 0;
    }
    &-social {
      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
  &__form {
    width: 100%;
    padding: 100px 30px;
    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
  }
}

@media (min-width: 768px) {
  .contact {
    flex-direction: row;
    &__content {
      width: 40%;
      padding: 100px 65px 65px 65px;
    }
    &__infos {
      width: 80%;
      p {
        max-width: 310px;
      }
    }
    &__form {
      width: 80%;
      &-wrapper {
        width: 60%;
      }
    }
  }
}
</style>
