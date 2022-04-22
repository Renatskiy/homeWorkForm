<template>
  <nav class="routing_wrapper">
    <div :class="route.class" v-for="(route, index) in RoutePages" :key="index">
      <div class="roundedBlock__item">
        <div class="roundedBlock__index">
          {{ index + 1 }}
        </div>
      </div>
      <div>{{ route.text }}</div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { AuthPagesInterface } from '../Interfaces/AuthPagesInterface'

const formModuleStore = namespace('modules/formModule')
@Component
export default class FormWrapper extends Vue {
  @Prop({ default: true }) RoutePages!: AuthPagesInterface[]
}
</script>
