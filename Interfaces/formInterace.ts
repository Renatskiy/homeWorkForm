export interface FieldsInterface {
  formFields: TextField[]
  membership: string
}

export interface TextField {
  title: 'string'
  type: 'string'
  value: 'string'
  phoneType: 'string' | boolean
  phone: boolean
  id: number
}
