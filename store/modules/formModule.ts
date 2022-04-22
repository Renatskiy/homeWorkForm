import { TextField } from '../../Interfaces/formInterace'
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import {
  FormFieldInterface,
  FormStateInterface,
} from '../../Interfaces/FormStateInterface'
const phoneTypes = ['Home', 'Work', 'Mobile', 'Any']
//TODO

@Module({
  name: 'formModule',
  stateFactory: true,
  namespaced: true,
})
export default class Form extends VuexModule {
  public formState: FormStateInterface = {
    membership: 'Regular',
    formFields: [
      {
        title: 'First name',
        type: 'textInput',
        value: '',
        id: 4,
      },
      {
        title: 'Last name',
        type: 'textInput',
        value: '',
        id: 3,
      },
      { title: 'E-mail', type: 'textInput', value: '', id: 0 },
      {
        phone: true,
        title: 'Phone',
        type: 'inputWithSelect',
        value: '',
        phoneType: 'Home',
        id: 1,
      },
      {
        phone: true,
        title: 'Phone',
        type: 'inputWithSelect',
        value: '',
        phoneType: 'Work',
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
    if (!item) {
      return
    }
    const copyField: FormFieldInterface = { ...item }
    copyField.id = Math.floor(Math.random() * 100)
    copyField.phoneType = type
    copyField.value = ''
    this.formState.formFields.push(copyField)
  }
  @Mutation
  SET_FIELD_VALUE(payload: { field: number | string[]; value: string }) {
    const { field, value } = payload
    let item = this.formState.formFields.find((x) => x.id === field)
    if (item) {
      item.value = value
    }
  }

  @Mutation
  SET_PHONE_SELECTOR(payload: { id: number; selector: string }) {
    const { id, selector } = payload
    let item = this.formState.formFields.find((x) => x.id === id)
    if (!item) return
    item.phoneType = selector
  }
  @Mutation
  DELETE_PHONE_FIELD(id: number) {
    const res = this.formState.formFields.filter((x) => x.id !== id)
    this.formState.formFields = res
  }
  @Mutation
  CHANGE_MEMBERSHIP(type: string) {
    this.formState.membership = type
  }

  get availablePhoneTypes(): Array<string> {
    const userPhoneTipes = this.formState.formFields
      .map((field) => {
        if (field.phone) return field.phoneType?.toLowerCase()
      })
      .filter(Boolean)
    return phoneTypes.filter((type) => {
      return !userPhoneTipes.includes(type.toLowerCase())
    })
  }
}
