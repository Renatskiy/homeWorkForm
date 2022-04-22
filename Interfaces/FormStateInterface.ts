export interface FormFieldInterface {
  phone?: boolean
  title: string
  type: string
  value: string
  phoneType?: string
  text?: string
  id: number
}
export interface FormStateInterface {
  membership: string
  formFields: FormFieldInterface[]
}
