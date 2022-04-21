<template>
  <div class="inputWrapper">
    <!-- @input="$emit('input', { field: value, selector: innerSelectorValue })" -->
    <textInput
      class="input-field"
      :value="value"
      :title="title"
      :type="'text'"
      v-on="$listeners"
    >
      <select
        :key="selectValue"
        :value="selectValue"
        class="select"
        @change="handleSelectorChange($event.target.value)"
      >
        <option
          v-for="(item, index) in selectOptions"
          :key="item.id"
          :value="item"
        >
          {{ item }}
        </option>
        <option :value="innerSelectorValue">{{ selectValue }}</option>
      </select>
    </textInput>
    <div class="button_wrapper">
      <button
        :disabled="disableDeleteButton"
        class="button_delete"
        @click="deleteItem()"
      >
        delete
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import textInput from './textInput.vue'
@Component({
  components: {
    textInput,
  },
})
export default class InputdWithSelect extends Vue {
  @Prop({ default: '' }) title!: string
  @Prop({ default: false }) disableDeleteButton!: boolean
  @Prop({ default: '' }) selectValue!: string
  @Prop({ default: () => [] }) selectOptions!: string[]
  @Prop({ default: '' }) value!: string
  @Prop({ required: false, default: 0 }) id!: number

  innerSelectorValue = this.selectValue

  deleteItem() {
    this.$emit('deletePhoneItem', this.id)
  }

  handleSelectorChange(value: string) {
    this.innerSelectorValue = value
    this.$emit('change', value)
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.select {
  position: absolute;
  width: 105px;
  height: 45px;
  background: #eeeeee 0% 0% no-repeat padding-box;
  border: 2px solid #c8d3db;
  border-radius: 8px 0px 0px 8px;
  padding: 12px 20px;
  box-sizing: border-box;
  font: normal normal normal 16px/21px Roboto;
  color: #394556;
}
.inputWrapper {
  display: flex;
  justify-content: space-between;
}
.button_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input-field::v-deep .input {
  padding-left: 110px;
}
</style>
