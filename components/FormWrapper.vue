<template>
  <div class="FormWrapper">
    <nav class="routing_wrapper" v-if="showCred">
      <div
        :class="route.class"
        v-for="(route, index) in RoutePages"
        :key="index"
      >
        <div class="roundedBlock__item">
          <div class="roundedBlock__index">
            {{ index + 1 }}
          </div>
        </div>
        <div>{{ route.text }}</div>
      </div>
    </nav>
    <div class="form-wrapper">
      <slot />
      <b-button
        v-if="CurrentPage.index !== 2 && showCred"
        @click="changeRoute('forward')"
        block
        variant
        variant="outline-primary"
        >Continue</b-button
      >
      <b-button
        v-if="CurrentPage.index !== 0 && showCred"
        @click="changeRoute()"
        block
        variant
        variant="outline-primary"
        >Back</b-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AuthPages } from '../constants/AuthPages'
import { namespace } from 'vuex-class'
import { FieldsInterface } from '../Interfaces/formInterace'

const formModuleStore = namespace('modules/formModule')
@Component
export default class FormWrapper extends Vue {
  @Prop({ default: true }) showCred!: boolean

  @formModuleStore.State
  public formState!: FieldsInterface

  changeRoute(action: string) {
    const item = AuthPages.find((page) => page.routeName === this.$route.name)
    if (action === 'forward') {
      const step = item.index + 1
      this.$router.push({ name: AuthPages[step].routeName })
    } else {
      const step = item.index - 1
      this.$router.push({ name: AuthPages[step].routeName })
    }
  }
  get CurrentPage() {
    const item = AuthPages.find((page) => page.routeName === this.$route.name)
    return item
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

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap');

body {
  font-family: 'Open Sans';
}
body a {
  color: #007bff;
  cursor: pointer;
}
a:not([href]):not([class]) {
  color: #007bff;
}
a:hover {
  color: #007bff;
}
h3 {
  color: #007bff;
}
.container {
  background: #ebebeb;
  opacity: 1;
}
.form-wrapper {
  margin: 0 auto;
  padding: 32px;
  width: 490px;
  height: auto;
  box-shadow: 0px 3px 18px #00000029;
  background: #ffffff;
}
.routing_wrapper {
  display: flex;
  justify-content: space-evenly;
}
.roundedBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.roundedBlock__item {
  width: 80px;
  height: 80px;
  /* UI Properties */
  border: 2px solid grey;
  border-radius: 50%;
  display: flex;
  align-content: center;
  align-items: center;
}
.active .roundedBlock__item {
  border: 2px solid #15b0fc;
  color: #15b0fc;
}
.roundedBlock__index {
  margin: 0 auto;
}
</style>
