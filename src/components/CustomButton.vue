<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CustomButtonComponent',
  props: ['text']
}
</script>

<style scoped lang="scss">
.button {
  position: relative;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  border: 1px solid $color-black;
  min-width: 100px;
  min-height: 38px;
}

@media (min-width: 768px) {
  .button {
    font-size: 14px;
    min-width: 130px;
  }
}
</style>
