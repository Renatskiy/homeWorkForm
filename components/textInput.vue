<template>
  <div class="field-wrapper">
    <label class="title">{{ title }}</label>
    <div>
      <slot> </slot>
      <input
        @input="$emit('input', $event.target.value)"
        class="input"
        :type="type"
        :value="value"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class Field extends Vue {
  @Prop({ default: '' }) type!: string
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) value!: string
}
</script>
<style scoped>
.filed-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
}
.title {
  color: #394556;
  margin-bottom: 10px;
  font: normal normal bold 18px/18px 'Open Sans';
}
.input {
  outline: none;
  width: 100%;
  height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #c8d3db;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 5px;
  box-sizing: border-box;
  font-size: normal;
}
</style>
