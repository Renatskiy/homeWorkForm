<template>
  <nav class="routing_wrapper">
    <div
      :class="route.class"
      class="roundedBlock__block"
      v-for="(route, index) in RoutePages"
      :key="route.index"
    >
      <div class="roundedBlock__item">
        <div class="roundedBlock__index">
          {{ index + 1 }}
        </div>
      </div>
      <div class="route_text">{{ route.text }}</div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&display=swap');

.routing_wrapper {
  padding: 20px 60px;
}
.route_text {
  font: normal normal normal 24px/24px 'Open Sans';
}
.roundedBlock__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.roundedBlock__item {
  margin-bottom: 15px;
}
</style>
