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
    formFields: [
      { title: 'firstName', type: 'textInput', value: '' },
      { title: 'lastName', type: 'textInput', value: '' },
      { title: 'email', type: 'textInput', value: '' },
      {
        phone: true,
        title: 'phone',
        type: 'inputWithSelect',
        value: '123',
        phoneType: 'home',
      },
      {
        phone: true,
        title: 'phone',
        type: 'inputWithSelect',
        value: '123',
        phoneType: 'work',
      },
    ],
  }
  @Mutation
  SET_FIELD_VALUE(payload: { field: string; value: string }) {
    console.log(payload)
    const { field, value } = payload
    let item = this.formState.formFields.find((x) => x.title === field)
    item.value = value
  }
}

//   getters: {
//     availablePhoneTypes: (phoneTypes: Array<string>) => {
//         return phoneTypes.filter(type => {
//             type !===
//         })
//     },
//   },
