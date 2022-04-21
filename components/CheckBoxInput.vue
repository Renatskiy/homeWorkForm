<template>
  <div>
    <input
      type="checkbox"
      :checked="checked"
      class="checkbox"
      @change="$emit('change', title)"
    />
    <label class="title">{{ title }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class InputdWithSelect extends Vue {
  @Prop({ default: false }) checked!: boolean
  @Prop({ default: '' }) title!: string
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.checkbox-wraper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-bottom: 30px;
}
.checkbox {
  width: 45px;
  height: 45px;
  border-radius: 8px;
  border: 2px solid #c8d3db;
}
.title {
  font: normal normal normal 18px/24px Roboto;
  color: #394556;
  margin-left: 20px;
  display: inline-block;
}
.title::first-letter {
  text-transform: uppercase;
}
</style>
