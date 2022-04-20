<template>
  <FormWrapper>
    <div>MemberShip</div>
  </FormWrapper>
</template>

<script lang="ts">
import FormWrapper from '../../components/FormWrapper.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { FormWrapper },
})
export default class MemberShip extends Vue {}
</script>
