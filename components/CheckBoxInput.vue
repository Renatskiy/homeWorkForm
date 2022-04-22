<template>
  <div class="checkbox_wrapper">
    <input
      type="radio"
      :checked="checked"
      class="checkbox"
      @change="$emit('change', title)"
      :id="`${index}_checkbox_id`"
    />
    <label :for="`${index}_checkbox_id`" class="title">{{ title }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class InputdWithSelect extends Vue {
  @Prop({ default: false }) checked!: boolean
  @Prop({ default: '' }) title!: string
  @Prop({ default: 0 }) index!: number
}
</script>
<style scoped>
.checkbox_wrapper {
  display: flex;
  align-items: center;
  margin: 10px 0;
  align-content: center;
}
.checkbox-wraper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-bottom: 30px;
}
.checkbox {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 2px solid #c8d3db;
  cursor: pointer;
}
.checkbox:checked {
  color: red;
}
.title {
  font: normal normal normal 18px/24px 'Open Sans';
  color: #394556;
  margin-left: 20px;
  display: inline-block;
  margin-bottom: 0;
  cursor: pointer;
}
.title::first-letter {
  text-transform: uppercase;
}
</style>
