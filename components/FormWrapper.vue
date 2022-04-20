<template>
  <div class="FormWrapper">
    <nav>
      <div
        :class="route.class"
        v-for="(route, index) in RoutePages"
        :key="index"
      >
        <div>{{ index + 1 }}</div>
        <div>{{ route }}</div>
      </div>
    </nav>
    <div class="form-wrapper"><slot /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AuthPages } from '../constants/AuthPages'

@Component
export default class FormWrapper extends Vue {
  get CurrentPage() {
    return this.$route.name
  }
  get RoutePages() {
    return AuthPages.map((page) => {
      return {
        ...page,
        class: { active: page.routeName === this.$route.name },
      }
    })
  }
}
</script>

<style scoped lang="css">
.form-wrapper {
  padding: 32px;
}
.container {
  background: #ebebeb;
  opacity: 1;
}
.form-wrapper {
  margin: 0 auto;
  width: 490px;
  height: 718px;
  box-shadow: 0px 3px 18px #00000029;
  background: #ffffff;
}
</style>
