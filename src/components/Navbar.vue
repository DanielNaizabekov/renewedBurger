<template>
  <q-header elevated class="bg-brown-9 text-white row justify-end items-center" height-hint="98">
    <q-btn
      class="q-mx-md"
      target="_blank"
      type="a"
      href="https://github.com/DanielNaizabekov/renewedBurger"
      flat
      round
      color="white"
      icon="code"
    >
      <q-tooltip>Source code</q-tooltip>
    </q-btn>
    <div>
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
    </div>
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