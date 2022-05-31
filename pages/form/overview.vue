<template>
  <FormWrapper>
    <h3>OverView</h3>
    <div
      class="overview-block"
      v-for="item in formState.formFields"
      :key="item.id"
    >
      <div class="overview-title font">{{ item.title }} :</div>
      <div class="overview-value font">{{ item.value }}</div>
    </div>
    <div class="overview-block">
      <div class="overview-title font">Membership :</div>
      <div class="overview-value font">{{ formState.membership }}</div>
    </div>
    <div class="overview-block edit-block">
      <a @click="toggleModal('start')" сlass="overview-title font"
        >Edit information :</a
      >
    </div>

    <Modal
      v-show="showModal"
      @close="toggleModal('doNotSave')"
      class="modal-block"
    >
      <div class="modal-content-wrapper">
        <div class="">
          <contactInfo :showCred="false" />
        </div>
        <div class="memberShip">
          <h3>MemberShip</h3>
          <div class="memberShip__wrapper">
            <div
              v-for="(item, index) in memberShipsArray"
              class="memberShip_item"
            >
              <ChekboxInput
                @change="changeMemberShip"
                :checked="formState.membership === item.type"
                :title="item.type"
                :index="index"
              />
            </div>
          </div>
          <b-button @click="toggleModal('save')" block variant variant="primary"
            >Save</b-button
          >
        </div>
      </div>
    </Modal>
  </FormWrapper>
</template>

<script lang="ts">
import FormWrapper from '../../components/FormWrapper.vue'
import { Component, Vue } from 'vue-property-decorator'
import { FieldsInterface } from '../../Interfaces/formInterace'
import ChekboxInput from '../../components/CheckBoxInput.vue'
import { memberShips } from '../../constants/memberships'
import contactInfo from './contact-info.vue'
import { namespace } from 'vuex-class'
import Modal from '../../components/Modal.vue'

const formModuleStore = namespace('modules/formModule')

@Component({
  components: { contactInfo, FormWrapper, ChekboxInput, Modal },
})
export default class OverView extends Vue {
  @formModuleStore.State
  public formState!: FieldsInterface

  @formModuleStore.Getter
  public stateCopy!: any

  @formModuleStore.Mutation('CHANGE_MEMBERSHIP') CHANGE_MEMBERSHIP!: (
    type: string
  ) => void
  @formModuleStore.Mutation('SAVE_GLOBAL_STATE') SAVE_GLOBAL_STATE!: () => void
  @formModuleStore.Mutation('RETURN_STATE_VALUES')
  RETURN_STATE_VALUES!: () => void

  showModal = false

  get memberShipsArray() {
    return memberShips
  }

  toggleModal(runType: string) {
    if (runType === 'start') {
      this.SAVE_GLOBAL_STATE()
    }
    if (runType === 'doNotSave') {
      this.RETURN_STATE_VALUES()
    }
    this.showModal = !this.showModal
  }
  changeMemberShip(title: string) {
    this.CHANGE_MEMBERSHIP(title)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&display=swap');

.overview-block {
  display: flex;
  padding: 16px 0;
  align-items: center;
}
.overview-title {
  flex-basis: 40%;
}
.overview-title.font {
  font: normal normal bold 18px/18px 'Open Sans';
}
.font {
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 18px;
}

.edit-btn {
  align-self: flex-start;
  border: hidden;
  outline: hidden;
  background: white;
  color: #15b0fc;
  font: normal normal normal 18px/24px Roboto;
  cursor: pointer;
  margin: 0;
  padding-bottom: 31px;
}

.section-title {
  font: normal normal bold 34px/45px Roboto;
  color: #15b0fc;
  margin: 0;
  padding-bottom: 35px;
}
.memberShip {
  padding: 0 10px;
  max-width: 490px;
  margin: 0 auto;
}
.memberShip__wrapper {
  display: flex;
}
.memberShip_item {
  margin-right: 30px;
}
</style>
