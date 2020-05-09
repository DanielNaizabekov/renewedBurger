<template>
  <q-layout view="hHh LpR fFf">

    <Navbar/>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
  },
  data () {
    return {
    };
  },
  methods: {
  },
}
</script>