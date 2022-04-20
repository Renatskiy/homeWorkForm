<template>
  <FormWrapper>
    <div>
      <h1>ContactInfo</h1>
      <component
        @click.native="setInputTitle(input.title)"
        @emitEvent="emitEvent"
        :is="input.type"
        v-for="(input, index) in formState.formFields"
        v-bind="input"
      >
      </component>
      <b-button
        @click="$router.push({ name: 'form-membership' })"
        block
        variant
        variant="outline-primary"
        >Continue</b-button
      >
    </div>
  </FormWrapper>
</template>

<script lang="ts">
import FormWrapper from '../../components/FormWrapper.vue'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { FieldsInterface } from '../../Interfaces/formInterace'
import TextInput from '../../components/textInput.vue'

const formModuleStore = namespace('modules/formModule')

@Component({
  components: { FormWrapper, TextInput },
})
export default class ContactInfo extends Vue {
  public inputTitle: string = 'textInput'

  @formModuleStore.State
  public formState: FieldsInterface

  @formModuleStore.Mutation('SET_FIELD_VALUE') SET_FIELD_VALUE: (payload: {
    field: string[]
    value: string
  }) => void

  setInputTitle(type: string) {
    console.log(this.inputTitle)
    this.inputTitle = type
  }

  emitEvent(data: string): void {
    const payload = { field: this.inputTitle, value: data }
    this.SET_FIELD_VALUE(payload)
  }
}
</script>

<style scoped lang="css">
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
