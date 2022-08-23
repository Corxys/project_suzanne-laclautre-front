<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CustomButtonComponent',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  cursor: none;
  position: relative;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid $color-black;
  letter-spacing: 1px;
  min-width: 100px;
  min-height: 38px;
  overflow: hidden;
  transition: color 0.2s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $color-black;
    transform: translateX(-101%);
    transition: 0.2s ease-in-out;
    z-index: -1;
  }
  &:hover {
    color: $color-white;
    &:before {
      transform: translateX(0);
    }
  }
}

@media (min-width: 768px) {
  .button {
    font-size: 14px;
    min-width: 130px;
  }
}
</style>
