<template>
  <div class="default">
    <nav-bar />
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss">
.mobile { display: block; }
.desktop { display: none; }

@media (min-width: 768px) {
  .mobile { display: none; }
  .desktop { display: block; }
}
</style>
