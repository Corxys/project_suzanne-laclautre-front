<template>
  <section class="contact">
    <div class="contact__content">
      <div class="contact__infos">
        <p class="contact__infos-text">
          Design graphique, design de services et dispositifs pédagogiques.
        </p>
        <div class="contact__infos-lines">
          <div class="contact__infos-line">
            <nuxt-img class="contact__infos-icon" src="/icons/contact_mail.svg" alt="Icône d'une enveloppe noire" />
            <a href="mailto:suzanne.laclautre@gmail.com">
              <div class="contact__infos-text">
                suzanne.laclautre@gmail.com
              </div>
            </a>
          </div>
          <div class="contact__infos-line">
            <nuxt-img class="contact__infos-icon" src="/icons/contact_city.svg" alt="Icône d'un marqueur sur une carte" />
            <div class="contact__infos-text">
              Strasbourg
            </div>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/15cl-6CuGALKLYwWCvu2whIDCAntoQHvQ/view" target="_blank">
          <custom-button text="Télécharger mon CV" />
        </a>
        <div class="contact__infos-socials">
          <a href="https://www.instagram.com/suzanne.laclautre/" target="_blank">
            <nuxt-img class="contact__infos-social" src="/icons/contact_instagram.svg" alt="Logo du réseau social Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/suzanne-laclautre-ba775520a/" target="_blank">
            <nuxt-img class="contact__infos-social" src="/icons/contact_linkedin.svg" alt="Logo du réseau professionnel LinkedIn" />
          </a>
        </div>
      </div>
      <arrow-back />
    </div>
    <div class="contact__form-wrapper">
      <form ref="form" class="contact__form" @submit.prevent="sendEmail">
        <div class="contact__form-line">
          <input v-model="form.lastName" class="contact__form-input contact__form-input--first-child" type="text" placeholder="votre nom" name="last_name">
          <input v-model="form.firstName" class="contact__form-input" type="text" placeholder="votre prénom" name="first_name">
        </div>
        <div class="contact__form-line">
          <input v-model="form.object" class="contact__form-input" type="text" placeholder="objet" name="object">
        </div>
        <textarea v-model="form.message" class="contact__form-input" placeholder="votre message" name="message" />
        <input class="contact__form-input" type="submit" value="envoyer">
        <div class="contact__form-message">
          {{ formMessage }}
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactPage',
  data () {
    return {
      formMessage: '',
      form: {
        lastName: '',
        firstName: '',
        object: '',
        message: ''
      }
    }
  },
  beforeMount () {
    const vh = window.innerHeight / 100
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      const vh = window.innerHeight / 100
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
  methods: {
    sendEmail () {
      if (this.form.firstName === '' || this.form.lastName === '' || this.form.object === '' || this.form.message === '') {
        this.formMessage = 'Tous les champs sont obligatoires !!'
      } else {
        emailjs.sendForm(this.$config.emailJsServiceId, this.$config.emailJsTemplateId, this.$refs.form, this.$config.emailJsUserId)
          .then(() => {
            this.formMessage = 'Mail envoyé avec succès :)\n' + '\n' + 'Je vous recontacterai dans les plus brefs délais !'
            this.form.firstName = ''
            this.form.lastName = ''
            this.form.object = ''
            this.form.message = ''
          })
          .catch(() => {
            this.formMessage = 'Une erreur s\'est produite lors de l\'envoi du mail :/\n' + '\n' + 'Si le problème persiste, n\'hésitez pas à me contacter directement par mail.'
          })
      }
    }
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
      width: 25px;
      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
  &__form {
    position: relative;
    width: 100%;
    padding: 100px 30px;
    margin-bottom: 50px;
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
      cursor: none;
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
      cursor: none;
    }
    input[type=submit] {
      text-align: center;
      cursor: none;
    }
    &-message {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      text-align: center;
      font-size: 12px;
      white-space: pre-line;
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
      margin-bottom: 0;
      &-wrapper {
        width: 60%;
      }
    }
  }
}
</style>
