<template>
  <div class="logo">
    <nuxt-link to="/">
      <span class="logo--bold">Suzanne</span> Laclautre
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LogoComponent'
}
</script>

<style scoped lang="scss">
.logo {
  font-size: 16px;
  font-family: $font-secondary;
  &:hover {
    span {
      &:after {
        width: 207%;
      }
    }
  }
  span {
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
      transition: all 0.2s ease;
    }
  }
}
@media (min-width: 768px) {
  .logo {
    font-size: 18px;
    min-width: 232px;
  }
}
</style>
