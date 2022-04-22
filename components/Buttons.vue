<template>
  <div class="buttons_wrapper" v-if="showCred">
    <b-button
      v-if="CurrentPage.index !== 2"
      @click="$emit('changeRoute', 'forward')"
      block
      variant
      variant="primary"
      >Continue</b-button
    >
    <b-button
      v-if="CurrentPage.index === 2"
      @click="$emit('submit')"
      block
      variant
      variant="primary"
      >Submit</b-button
    >
    <b-button
      v-if="CurrentPage.index !== 0"
      @click="$emit('changeRoute')"
      block
      variant
      variant="outline-primary"
      >Back</b-button
    >
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import RoutingBlock from './RoutingBlock.vue'

const formModuleStore = namespace('modules/formModule')
@Component({
  components: {
    RoutingBlock,
  },
})
export default class FormWrapper extends Vue {
  @Prop({ default: true }) showCred!: boolean
  @Prop({ default: true }) CurrentPage!: number
}
</script>

<style scoped>
.buttons_wrapper {
  margin: 32px 0;
}
.btn-primary,
.btn-outline-primary {
  height: 64px;
  font-size: 28px;
}
.modal-content-wrapper .form_wrapper {
  padding: 0;
}
</style>
