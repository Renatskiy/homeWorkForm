<template>
  <div>
    <RoutingBlock
      :RoutePages="RoutePages"
      v-if="showCred"
      class="RoutindBlock"
    />
    <div class="form_wrapper">
      <slot />
      <ButtonsBlock
        @submit="submit"
        @changeRoute="changeRoute"
        :showCred="showCred"
        :CurrentPage="CurrentPage"
      />
    </div>
    <Modal v-if="post" @close="post = ''" class="modal-block">
      <p class="message">
        {{ post }}
      </p>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AuthPages } from '../constants/AuthPages'
import { namespace } from 'vuex-class'
import { FieldsInterface } from '../Interfaces/formInterace'
import { AuthPagesInterface } from '../Interfaces/AuthPagesInterface'
import RoutingBlock from './RoutingBlock.vue'
import ButtonsBlock from './Buttons.vue'
import Modal from '../components/Modal.vue'
import axios from 'axios'

const formModuleStore = namespace('modules/formModule')
@Component({
  components: {
    RoutingBlock,
    ButtonsBlock,
    Modal,
  },
})
export default class FormWrapper extends Vue {
  @Prop({ default: true }) showCred!: boolean

  @formModuleStore.State
  public formState!: FieldsInterface

  public post: string = ''

  changeRoute(action: string = 'back') {
    const item = AuthPages.find(
      (page: AuthPagesInterface) => page.routeName === this.$route.name
    )
    if (item) {
      if (action === 'forward') {
        const step = item.index + 1
        this.$router.push({ name: AuthPages[step].routeName })
      } else {
        const step = item.index - 1
        this.$router.push({ name: AuthPages[step].routeName })
      }
    }
  }
  get CurrentPage() {
    const item = AuthPages.find(
      (page: AuthPagesInterface) => page.routeName === this.$route.name
    )
    return item
  }

  get RoutePages() {
    return AuthPages.map((page: AuthPagesInterface) => {
      return {
        ...page,
        class: { active: page.routeName === this.$route.name } || '',
      }
    })
  }

  async submit(): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      charset: 'utf-8',
    }
    try {
      await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(this.formState),
        { headers }
      )
      this.post = 'Thank you! Now we now all about you!)'
    } catch (e) {
      this.post = 'Error. Check you network'
      console.log(e)
    }
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&display=swap');

body {
  font-family: 'Open Sans';
}
body a {
  color: #007bff;
  cursor: pointer;
  font: normal normal bold 18px/18px 'Open Sans';
}
a:not([href]):not([class]) {
  color: #007bff;
}
a:hover {
  color: #007bff;
}
h3 {
  color: #007bff;
  font: normal normal bold 18px/18px 'Open Sans';
  padding: 10px 0;
}
.container {
  background: #ebebeb;
  opacity: 1;
}
.form_wrapper {
  margin: 0 auto;
  padding: 32px;
  width: 490px;
  height: auto;
  box-shadow: 0px 3px 18px #00000029;
  background: #ffffff;
  border-radius: 16px;
}
.routing_wrapper {
  display: flex;
  justify-content: space-evenly;
}
.roundedBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.roundedBlock__item {
  width: 80px;
  height: 80px;
  /* UI Properties */
  border: 2px solid #c8d3db;
  border-radius: 50%;
  display: flex;
  align-content: center;
  align-items: center;
  color: #c8d3db;
}
.active .roundedBlock__item {
  border: 2px solid #15b0fc;
  color: #15b0fc;
}
.roundedBlock__index {
  margin: 0 auto;
  margin: 0 auto;
  font-size: 48px;
  font-weight: bold;
}
.buttons_wrapper {
  margin: 32px 0;
}
.btn-primary {
  height: 64px;
  font-size: 28px;
}
.modal-content-wrapper .form_wrapper {
  padding: 0;
}
.modal-block {
  display: block;
}
.RoutindBlock {
  margin-bottom: 80px;
}
</style>
