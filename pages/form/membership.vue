<template>
  <FormWrapper>
    <div class="memberShip__wrapper">
      <h3>MemberShip</h3>
      <div v-for="(item, index) in memberShipsArray">
        <ChekboxInput
          @change="changeMemberShip"
          :checked="formState.membership === item.type"
          :title="item.type"
          :index="index"
        />
      </div>
      <div>{{ description.description }}</div>
    </div>
  </FormWrapper>
</template>

<script lang="ts">
import FormWrapper from '../../components/FormWrapper.vue'
import { Component, Vue } from 'vue-property-decorator'
import { FieldsInterface } from '../../Interfaces/formInterace'
import { memberShips } from '../../constants/memberships'
import ChekboxInput from '../../components/CheckBoxInput.vue'
import { namespace } from 'vuex-class'

const formModuleStore = namespace('modules/formModule')

@Component({
  components: { FormWrapper, ChekboxInput },
  transition: 'home',
})
export default class MemberShip extends Vue {
  @formModuleStore.State
  public formState!: FieldsInterface
  @formModuleStore.Mutation('CHANGE_MEMBERSHIP') CHANGE_MEMBERSHIP!: (
    type: string
  ) => void

  changeMemberShip(title: string) {
    this.CHANGE_MEMBERSHIP(title)
  }

  get memberShipsArray() {
    return memberShips
  }

  get description() {
    return memberShips.find((x) => x.type === this.formState.membership)
  }
}
</script>

<style>
.memberShip__wrapper {
  margin: 0 auto;
  /* padding: 20px 0; */
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.3s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
