<template>
  <div class="field-wrapper">
    <label class="title">{{ title }}</label>
    <div>
      <slot> </slot>
      <input
        class="input"
        @input="$emit('emitEvent', $event.target.value)"
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.filed-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
}
.title {
  font: normal normal normal 18px/24px Roboto;
  color: #394556;
  margin-bottom: 10px;
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
  font: normal normal normal 18px/24px Roboto;
}
</style>
