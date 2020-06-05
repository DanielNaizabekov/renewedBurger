<template>
  <q-layout view="hHh LpR fFf">

    <Navbar/>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import './DragDropTouch';
import { mapActions } from 'vuex';
import Navbar from './components/Navbar';
import { INGREDIENT_LIST } from './consts';

export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions({
      ingredientList: INGREDIENT_LIST,
    }),
  },
  mounted() {
    this.ingredientList();
  },
}
</script>

<style>
  .q-header {
    max-width: 100vw;
  }
</style>