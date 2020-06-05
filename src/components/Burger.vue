<template>
  <q-scroll-area :thumb-style="thumbStyle" class="burger">
    <transition-group class="burger-list" name="burger-transition-wrapper" tag="ul">
      <li key="burger-top" class="burger-item burger-top"></li>
      <li
        class="burger-item"
        v-for="item in list"
        :key="item.name"
      >
        <div
          v-for="number in item.count"
          :key="number"
          v-ripple
          class="burger-item-inner"
          :class="item.name"
          :draggable="params.draggable"
          @dragstart="dragstart(item.name)"
        />
      </li>
      
      <li key="burger-bottom" class="burger-item burger-bottom"></li>
    </transition-group>
  </q-scroll-area>
</template>

<script>
import { mapGetters } from 'vuex';
import { INGREDIENT_LIST } from '../consts';

export default {
  props: {
    params: {
      type: Object,
      default() {
        return {
          draggable: true,
        };
      },
    },
  },
  data () {
    return {
      drag: false,
      thumbStyle: {
        right: '-8px',
        borderRadius: '5px',
        backgroundColor: '#4e342e',
        width: '5px',
      },
    };
  },
  computed: {
    ...mapGetters({
      list: INGREDIENT_LIST,
    }),
  },
  methods: {
    dragstart(name) {
      event.dataTransfer.setData('removingElementName', name);
    },
  },
}
</script>

<style scoped>
.burger {
  width: 295px;
  height: 175px;
}
.burger-list {
  width: 90%;
  margin: 0 auto;
}
.burger-item {
  margin: 4px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.burger-item-inner {
  margin-bottom: 4px;
  cursor: grab;
  transition: transform .2s;
}
.burger-item-inner:hover {
  transform: scale(1.07);
}
.burger-item-inner:active {
  cursor: grabbing;
  transform: scale(0.93);
}
.burger-item-inner:last-child {
  margin: 0;
}
.cutlet {
  height: 22px;
  border-radius: 20px;
  width: 95%;
  background: url('../assets/img/cutlet-texture.png');
}
.cheese {
  height: 10px;
  border-radius: 50px;
  width: 100%;
  background: #F7DA4C;
}
.tomato {
  height: 15px;
  border-radius: 2px;
  width: 90%;
  background: #EF4004;
}
.cucumber {
  height: 12px;
  border-radius: 2px;
  width: 90%;
  background: #5C9735;
}
.burger-ghost-item {
  background: #ccc;
  border: 1px solid #000;
}
.burger-top {
  border-radius: 50px 50px 10% 10%;
  height: 30px;
  background: linear-gradient(90deg, rgba(239,163,53,1) 74%, rgba(253,143,49,1) 85%);
}
.burger-bottom {
  border-radius: 10% 10% 50px 50px;
  height: 30px;
  background: linear-gradient(90deg, rgba(239,163,53,1) 74%, rgba(253,143,49,1) 85%);
}

.burger-transition-wrapper-enter-active, .burger-transition-wrapper-leave-active {
  transition: all 1s;
}
.burger-transition-wrapper-enter, .burger-transition-wrapper-leave-to {
  opacity: 0;
}
.burger-transition-wrapper-move {
  transition: .3s;
}

</style>