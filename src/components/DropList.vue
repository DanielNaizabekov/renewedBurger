<template>
  <div ref="wrapper" class="wrapper">
    <slot name="activator"></slot>

    <div v-show="isOpen" ref="inner" class="inner">
      <slot :innerData="innerData"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'innerData'],
  data() {
    return {
      isOpen: false,
      documentBody: null,
      closeHandler: () => {},
    };
  },
  watch: {
    value(v) {
      if(v) {
        this.onOpen();
        this.documentBody.addEventListener('click', this.closeHandler)
      } else {
        this.documentBody.removeEventListener('click', this.closeHandler)
      }
    },
    isOpen(v) {
      this.$emit('input', v);
    },
    innerData() {
      this.setPosition();
    }
  },
  methods: {
    setPosition() {
      this.$nextTick(() => {

        const inner = this.$refs.inner;
        inner.style.top = '100%';
        inner.style.bottom = 'auto';
        const innerOffsetBottom = inner.getBoundingClientRect().bottom;

        if(innerOffsetBottom > window.innerHeight) {
          inner.style.top = 'auto';
          inner.style.bottom = '100%';
        }

      });
    },
    onOpen() {
      this.isOpen = true;
      this.setPosition();
    },
  },
  mounted() {
    this.documentBody = document.querySelector('body');
    this.closeHandler = () => this.isOpen = false;
  },
}
</script>

<style scoped>
.wrapper {
  position: relative;
  display: inline-block;
}

.inner {
  width: 100%;
  position: absolute;
  top: 100%;
}
</style>