<template>
  <q-header elevated class="bg-brown-9 text-white" height-hint="98">
    <q-tabs align="right">
      <q-tab
        class="text-weight-bold text-capitalize"
        v-for="item in menuList"
        :key="item.label"
        @click="openMenu(item.path)"
      >
        {{ item.label }}
      </q-tab>
    </q-tabs>
  </q-header>
</template>

<script>
import { menuList } from '../router/menuList'

export default {
  data () {
    return {
      menuList,
    };
  },
  methods: {
    openMenu(name) {
      this.$router.push({name});
    },
  },
}
</script>