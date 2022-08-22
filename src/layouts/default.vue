<template>
  <main class="main" @mousemove="updateCursorPosition" @mousedown="mouseDown" @mouseup="mouseUp">
    <div class="cursor cursor__large" />
    <div class="cursor cursor__small" />
    <nav-bar />
    <nuxt />
    <foo-ter />
  </main>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import gsap from 'gsap'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      cursorOuter: null,
      cursorInner: null,
      cursorOuterOriginalState: {
        width: null,
        height: null
      },
      mouse: {
        x: -100,
        y: -100
      }
    }
  },
  computed: {
    ...mapState({
      cursorIsStuck: state => state.app.cursorIsStuck
    })
  },
  mounted () {
    this.cursorOuter = document.querySelector('.cursor__large')
    this.cursorInner = document.querySelector('.cursor__small')
    this.cursorOuterOriginalState = {
      width: this.cursorOuter.getBoundingClientRect().width,
      height: this.cursorOuter.getBoundingClientRect().height
    }
    this.updateCursor()

    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    // })
  },
  methods: {
    mouseDown () {
      gsap.to(this.cursorInner, 0.15, {
        scale: 2
      })
    },
    mouseUp () {
      gsap.to(this.cursorInner, 0.15, {
        scale: 1
      })
    },
    updateCursor () {
      gsap.set(this.cursorInner, {
        x: this.mouse.x,
        y: this.mouse.y
      })
      if (!this.cursorIsStuck) {
        gsap.to(this.cursorOuter, {
          duration: 0.15,
          x: this.mouse.x - this.cursorOuterOriginalState.width / 2,
          y: this.mouse.y - this.cursorOuterOriginalState.width / 2
        })
      }
      requestAnimationFrame(this.updateCursor)
    },
    updateCursorPosition (event) {
      this.mouse.x = event.pageX
      this.mouse.y = event.pageY
    }
  }
}
</script>

<style lang="scss">
.mobile { display: block; }
.desktop { display: none; }

@media (min-width: 768px) {
  .mobile { display: none; }
  .desktop { display: block; }
}

body {
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $color-black;
  }
}

@media (min-width: 768px) {
  body {
    cursor: none;
  }
}

.cursor {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  pointer-events: none;
  z-index: 100;
  &__large {
    --size: 40px;
    border: 1px solid rgb(0, 0, 0);
  }
  &__small {
    --size: 10px;
    background: rgb(0, 0, 0);
    transform: translate(-50%, -50%);
  }
}
</style>
