<template>
  <div class="back" @click="$router.go(-1)">
    <div class="back__arrow">
      <div class="back__arrow-body" />
      <div class="back__arrow-tip" />
    </div>
    <div class="back__text">
      Retour
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrowBackComponent'
}
</script>

<style scoped lang="scss">
.back {
  max-width: 120px;
  align-self: flex-start;
  &__arrow {
    position: relative;
    top: 6px;
    &-body {
      position: absolute;
      top: 2px;
      left: 0px;
      width: 50px;
      height: 1px;
      background-color: $color-black;
      transition: transform 500ms ease-in;
    }
    &-tip {
      position: absolute;
      left: 46px;
      height: 5px;
      width: 5px;
      border-top: 1px solid $color-black;
      border-right: 1px solid $color-black;
      transform: rotate(45deg);
      transition: transform 500ms ease-in;
    }
  }
  &__text {
    margin-left: 70px;
    font-style: italic;
    text-transform: lowercase;
  }
}
</style>
