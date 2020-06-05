<template>
  <div class="ingredient-list">
    <div
      v-for="item in list"
      :key="item.name"
      class="ingredient-list-item"
      draggable="true"
      @dragstart="selectIngredient(item.name)"
    >
      <img :src="ingredients[item.name]" :alt="item.name">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { INGREDIENT_LIST } from '../consts';
import * as cutlet from '../assets/img/cutlet.svg';
import * as cheese from '../assets/img/cheese.svg';
import * as tomato from '../assets/img/tomato.svg';
import * as cucumber from '../assets/img/cucumber.svg';

export default {
  data() {
    return {
      ingredients: {
        cutlet,
        cheese,
        tomato,
        cucumber,
      },
    };
  },
  computed: {
    ...mapGetters({
      list: INGREDIENT_LIST,
    }),
  },
  methods: {
    selectIngredient(name) {
      this.$emit('selectIngredient', name);
    },
  },
}
</script>

<style scoped>
.ingredient-list {
  background: #4e342e;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
}
.ingredient-list-item {
  width: 60px;
  height: 60px;
  background: #fff;
  padding: 3px;
  cursor: grab;
}
.ingredient-list-item:active {
  cursor: grabbing;
}
.ingredient-list-item img {
  width: 100%;
  transition: .3s;
}
.ingredient-list-item:hover img {
  transform: scale(1.1);
}
.ingredient-list-item:active img {
  transform: scale(0.95);
}
</style>