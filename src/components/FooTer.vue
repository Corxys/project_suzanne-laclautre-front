<template>
  <footer class="footer">
    <div class="footer__text">
      Crédits © {{ new Date().getFullYear() }} | <nuxt-link class="footer__text-link" to="/mentions-legales">
        Mentions légales
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooTerComponent'
}
</script>

<style scoped lang="scss">
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
    width: 80%;
    &-link {
      margin-left: 10px;
    }
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
