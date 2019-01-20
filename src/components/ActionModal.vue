<template>
  <transition name="modal-fade">
    <div class="action-modal">
      <div class="modal-backdrop">
        <div class="modal">
          <header class="modal-header">
            <slot name="header">
              This is the default title!
            </slot>
            <button
              type="button"
              class="btn-close"
              @click="close"
            >
              x
            </button>
          </header>

          <section class="modal-body">
            <slot name="body">
              I'm the default body!
            </slot>
          </section>

          <footer class="modal-footer">
            <slot name="footer">
              I'm the default footer!
              <button
                type="button"
                class="btn-green"
                @click="close"
              >
                Close me!
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
  min-width: 35vw;
  /*min-height: 50vh;*/
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 20px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #1565c0;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  padding-left: 30px;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: center;
}

.modal-body {
  position: relative;
  padding: 30px;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
}

.btn-close {
  border: none;
  padding: 0px;
  cursor: pointer;
  font-weight: bold;
  color: #1565c0;
  background: transparent;
}

.btn-green {
  color: white;
  background: #1565c0;
  border: 1px solid #1565c0;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}
</style>
