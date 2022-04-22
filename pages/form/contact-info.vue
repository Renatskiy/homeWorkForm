<template>
  <FormWrapper :showCred="showCred">
    <div>
      <h3 v-if="showCred">ContactInfo</h3>
      <h3 v-else>Edit information</h3>
      <component
        @change="changeSelectValue($event, input.id)"
        @input="emitEvent($event, input.id)"
        @deletePhoneItem="deletePhoneItem"
        :is="input.type"
        v-for="input in formState.formFields"
        :key="input.id"
        v-bind="input"
        :title="input.title"
        :disableDeleteButton="disableDeleteButton"
        :selectOptions="availablePhoneTypes"
        :selectValue="input.phoneType"
        :showCred="showCred"
      >
      </component>
      <a
        v-if="availablePhoneTypes.length && showCred"
        @click="addPhoneField"
        class="add-phone-btn"
      >
        + Add phone
      </a>
    </div>
  </FormWrapper>
</template>

<script lang="ts">
import FormWrapper from '../../components/FormWrapper.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { FieldsInterface } from '../../Interfaces/formInterace'
import TextInput from '../../components/textInput.vue'

const formModuleStore = namespace('modules/formModule')

@Component({
  components: { FormWrapper, TextInput },
})
export default class ContactInfo extends Vue {
  @Prop({ default: true }) showCred!: boolean

  public inputTitle: string = 'textInput'

  @formModuleStore.State
  public formState!: FieldsInterface

  @formModuleStore.Mutation('SET_FIELD_VALUE') SET_FIELD_VALUE!: (payload: {
    field: number
    value: string
  }) => void
  @formModuleStore.Mutation('SET_PHONE_SELECTOR')
  SET_PHONE_SELECTOR!: (payload: { id: number; selector: string }) => void

  @formModuleStore.Mutation('ADD_PHONE_FIELD')
  ADD_PHONE_FIELD!: (type: string) => void

  @formModuleStore.Mutation('DELETE_PHONE_FIELD')
  DELETE_PHONE_FIELD!: (id: number | string) => void

  @formModuleStore.Getter
  public availablePhoneTypes!: Array<string>

  get disableDeleteButton() {
    const phones = this.formState.formFields.filter((item) => item.phone)
    return phones.length < 2
  }

  emitEvent(data: string, id: number): void {
    const payload = { field: id, value: data }
    this.SET_FIELD_VALUE(payload)
  }
  changeSelectValue(event: string, id: number): void {
    const payload = { id, selector: event }
    this.SET_PHONE_SELECTOR(payload)
  }
  addPhoneField() {
    this.ADD_PHONE_FIELD(this.availablePhoneTypes[0])
  }
  deletePhoneItem(id: number | string) {
    this.DELETE_PHONE_FIELD(id)
  }
}
</script>

<style scoped lang="css">
.container {
  background: #ebebeb;
  opacity: 1;
}
.form_wrapper {
  margin: 0 auto;
  width: 490px;
  height: 718px;
  box-shadow: 0px 3px 18px #00000029;
  background: #ffffff;
}
.add-phone-btn:hover {
  text-decoration: none;
}
.add-phone-btn {
  font: normal normal bold 18px/18px 'Open Sans';
}
</style>
