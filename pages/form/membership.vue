<template>
  <FormWrapper>
    <div class="memberShip__wrapper">
      <h1>MemberShip</h1>
      {{ formState.membership }}
      <div v-for="(item, index) in memberShipsArray">
        <ChekboxInput
          @change="changeMemberShip"
          :checked="formState.membership === item.type"
          :title="item.type"
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
import { MemberShipInterface } from '../../Interfaces/MembershipInterface'
import { memberShips } from '../../constants/memberships'
import ChekboxInput from '../../components/CheckBoxInput.vue'
import { namespace } from 'vuex-class'

const formModuleStore = namespace('modules/formModule')

@Component({
  components: { FormWrapper, ChekboxInput },
})
export default class MemberShip extends Vue {
  @formModuleStore.State
  public formState!: FieldsInterface
  @formModuleStore.Mutation('CHANGE_MEMBERSHIP') CHANGE_MEMBERSHIP!: (
    type: string
  ) => void

  changeMemberShip(title: string) {
    console.log(title)
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
