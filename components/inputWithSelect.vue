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
        <option class="current_value" :value="innerSelectorValue">
          {{ selectValue }}
        </option>
      </select>
    </textInput>
    <div class="button_wrapper" v-if="showCred">
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
  @Prop({ default: true }) showCred!: boolean

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
.select {
  position: absolute;
  width: 105px;
  height: 45px;
  background: #eeeeee 0% 0% no-repeat padding-box;
  border: 2px solid #c8d3db;
  border-radius: 8px 0px 0px 8px;
  padding: 7px 10px;
  box-sizing: border-box;
  font-size: normal;
  color: #394556;
  font: normal normal bold 18px/18px 'Open Sans';
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
  flex-basis: 20%;
}
.button_delete {
  height: 45px;
  margin-top: 14px;
  /* border: 1px solid grey; */
  border-radius: 10px;
  border: 2px solid #c8d3db;
  width: 100%;
  font: normal normal bold 18px/18px 'Open Sans';
}
.input-field::v-deep .input {
  padding-left: 110px;
}
</style>
