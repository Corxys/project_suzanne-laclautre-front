<template>
  <section class="contact">
    <div class="contact__content">
      <div class="contact__infos">
        <p class="contact__infos-text">
          Design graphique, design de services et dispositifs pédagogiques.
        </p>
        <div class="contact__infos-lines">
          <div class="contact__infos-line">
            <nuxt-img provider="static" format="webp" class="contact__infos-icon" src="/icons/contact_mail.svg" alt="Icône d'une enveloppe noire" />
            <a href="mailto:suzanne.laclautre@gmail.com">
              <div class="contact__infos-text">
                suzanne.laclautre@gmail.com
              </div>
            </a>
          </div>
          <div class="contact__infos-line">
            <nuxt-img provider="static" format="webp" class="contact__infos-icon" src="/icons/contact_city.svg" alt="Icône d'un marqueur sur une carte" />
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
            <nuxt-img provider="static" format="webp" class="contact__infos-social" src="/icons/contact_instagram.svg" alt="Logo du réseau social Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/suzanne-laclautre-ba775520a/" target="_blank">
            <nuxt-img provider="static" format="webp" class="contact__infos-social" src="/icons/contact_linkedin.svg" alt="Logo du réseau professionnel LinkedIn" />
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
        <button class="contact__form-input contact__form-input--submit">
          Envoyer
        </button>
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

<style scoped src="../../assets/styles/pages/contact.scss" lang="scss" />
