<template>
  <div>
    <transition-group class="burger" name="burger" tag="ul">
      <li key="burger-top" class="burger-top">top</li>
      <li
         v-for="item in list"
         :key="item.name"
      >
        <div
          v-for="number in item.count"
          :key="item.name + number"
          :class="item.name"
        >
          {{ item.name }}
        </div>
      </li>
      <li key="burger-bottom" class="burger-bottom">bottom</li>
   </transition-group>

   <button @click="add">add</button>
   <button @click="remove">remove</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {name: 'cutlet', count: 1},
        {name: 'cheese', count: 2},
        {name: 'tomato', count: 1},
        {name: 'cucumber', count: 1},
      ]
    };
  },
  computed: {
  },
  methods: {
    add() {
      let newList = {...this.list}
      // let newList = this.list
      newList[0].count++;
    },
    remove() {
      this.list[0].count--;
    },
  },
}
</script>

<style scoped>
/* .list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: scale(0);
  background: #000;
} */

.burger {
  width: 200px;
  height: 200px;
  overflow: auto;
}

.burger-top,
.burger-bottom{
  background: #FF851B;
  height: 20px;
  border-radius: 15px;
}

.cucumber{
  background: orange;
}
.tomato{
  background: red;
}
.cheese{
  background: yellow;
}
.cutlet{
  background: brown;
}

.burger-move {
  transition: 1s;
}
</style>