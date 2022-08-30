<template>
  <main class="main" @mousemove="updateCursorPosition" @mousedown="mouseDown" @mouseup="mouseUp">
    <div class="cursor cursor__large" />
    <div class="cursor cursor__small" />
    <nav-bar />
    <nuxt />
  </main>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      vh: null,
      cursorOuter: null,
      cursorInner: null,
      cursorOuterOriginalState: {
        width: null,
        height: null
      },
      mouse: {
        x: -100,
        y: -100
      },
      goUp: true,
      end: null,
      interval: null
    }
  },
  mounted () {
    this.vh = window.innerHeight / 100
    document.documentElement.style.setProperty('--vh', `${this.vh}px`)
    window.addEventListener('resize', this.adjustViewHeight)

    this.cursorOuter = document.querySelector('.cursor__large')
    this.cursorInner = document.querySelector('.cursor__small')
    this.cursorOuterOriginalState.width = this.cursorOuter.getBoundingClientRect().width
    this.cursorOuterOriginalState.height = this.cursorOuter.getBoundingClientRect().height
    this.updateCursor()
  },
  unmounted () {
    window.removeEventListener('resize', this.adjustViewHeight)
  },
  methods: {
    /**
     * @name adjustViewHeight
     * on resize, we adjust the height of the viewport (fix 100vh bug on iOS)
     */
    adjustViewHeight () {
      document.documentElement.style.setProperty('--vh', `${this.vh}px`)
    },
    /**
     * @name mouseDown
     * when the user press mouse down
     */
    mouseDown () {
      gsap.to(this.cursorInner, 0.15, {
        scale: 2
      })
    },
    /**
     * @name mouseUp
     * when the user press mouse up
     */
    mouseUp () {
      gsap.to(this.cursorInner, 0.15, {
        scale: 1
      })
    },
    /**
     * @name updateCursor
     * update visually the cursor position
     */
    updateCursor () {
      gsap.set(this.cursorInner, {
        x: this.mouse.x,
        y: this.mouse.y
      })
      gsap.to(this.cursorOuter, {
        duration: 0.15,
        x: this.mouse.x - this.cursorOuterOriginalState.width / 2,
        y: this.mouse.y - this.cursorOuterOriginalState.width / 2
      })
      requestAnimationFrame(this.updateCursor)
    },
    /**
     * @name updateCursorPosition
     * set the cursor position in the mouse object
     */
    updateCursorPosition (event) {
      this.mouse.x = event.clientX
      this.mouse.y = event.clientY
    }
  }
}
</script>

<style lang="scss">
.cursor {
  opacity: 0;
}

@media (min-width: 768px) {
  .cursor {
    opacity: 1;
    position: fixed;
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
}
</style>
