<template>
  <FormWrapper>
    <h3>OverView</h3>
    <div class="overview-block" v-for="(item, index) in formState.formFields">
      <div class="overview-title font">{{ item.title }} :</div>
      <div class="overview-value font">{{ item.value }}</div>
    </div>
    <div class="overview-block">
      <div class="overview-title font">Membership :</div>
      <div class="overview-value font">{{ formState.membership }}</div>
    </div>
    <div class="overview-block edit-block">
      <a @click="toggleModal" lass="overview-title font">Edit information :</a>
    </div>

    <Modal v-show="showModal" @close="toggleModal" class="modal-block">
      <div class="modal-content-wrapper">
        <div class="">
          <contactInfo :showCred="false" />
        </div>
        <!-- <div class="">
          <p class="section-title">Membership</p>
          <membership-fields />
        </div> -->
      </div>
    </Modal>
  </FormWrapper>
</template>

<script lang="ts">
import FormWrapper from '../../components/FormWrapper.vue'
import { Component, Vue } from 'vue-property-decorator'
import { FieldsInterface } from '../../Interfaces/formInterace'
import ChekboxInput from '../../components/CheckBoxInput.vue'
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
  showModal = false

  toggleModal() {
    this.showModal = !this.showModal
    console.log(this.showModal)
  }
}
</script>

<style scoped>
.modal-block {
  display: block;
}
.overview-block {
  display: flex;
  padding: 16px 0;
}
.overview-title {
  flex-basis: 40%;
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
.modal-content-wrapper {
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
}
/* .container {
  max-width: 50%;
} */
.section-title {
  font: normal normal bold 34px/45px Roboto;
  color: #15b0fc;
  margin: 0;
  padding-bottom: 35px;
}
</style>
