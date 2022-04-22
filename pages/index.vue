<template>
  <div class="container global_wrapper">
    <b-button
      @click="$router.push({ name: 'form-contact-info' })"
      block
      variant
      variant="primary"
      >To Form</b-button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="postcss" scoped>
.global_wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
