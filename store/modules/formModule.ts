import { TextField } from '../../Interfaces/formInterace'
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

const phoneTypes = ['home', 'work', 'mobile', 'any']

@Module({
  name: 'formModule',
  stateFactory: true,
  namespaced: true,
})
export default class Form extends VuexModule {
  public formState = {
    membership: 'Regular',
    formFields: [
      {
        title: 'firstName',
        type: 'textInput',
        value: '',
        id: 4,
        phoneType: false,
      },
      {
        title: 'lastName',
        type: 'textInput',
        value: '',
        id: 3,
        phoneType: false,
      },
      { title: 'email', type: 'textInput', value: '', id: 0, phoneType: false },
      {
        phone: true,
        title: 'Phone',
        type: 'inputWithSelect',
        value: '',
        phoneType: 'home',
        id: 1,
      },
      {
        phone: true,
        title: 'Phone',
        type: 'inputWithSelect',
        value: '',
        phoneType: 'work',
        text: 'phone',
        id: 2,
      },
    ],
  }
  @Mutation
  ADD_PHONE_FIELD(type: string) {
    const item = this.formState.formFields.find(
      (x) => x.type === 'inputWithSelect'
    )
    const copyField: typeof item = { ...item }
    copyField.id = Math.floor(Math.random() * 100)
    copyField.phoneType = type
    copyField.value = ''
    this.formState.formFields.push(copyField)
  }
  @Mutation
  SET_FIELD_VALUE(payload: { field: number; value: string }) {
    const { field, value } = payload
    let item = this.formState.formFields.find((x) => x.id === field)
    item.value = value
  }

  @Mutation
  SET_PHONE_SELECTOR(payload: { id: number; selector: any }) {
    const { id, selector } = payload
    let item = this.formState.formFields.find((x) => x.id === id)
    item.phoneType = selector
  }
  @Mutation
  DELETE_PHONE_FIELD(id: number) {
    const res = this.formState.formFields.filter((x) => x.id !== id)
    this.formState.formFields = res
  }

  get availablePhoneTypes(): Array<string> {
    const userPhoneTipes = this.formState.formFields
      .map((field) => {
        if (field.phone) return field.phoneType
      })
      .filter(Boolean)
    console.log(userPhoneTipes)
    return phoneTypes.filter((type) => {
      return !userPhoneTipes.includes(type)
    })
  }
}
