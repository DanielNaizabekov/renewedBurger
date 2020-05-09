<template>
  <q-scroll-area :thumb-style="thumbStyle" class="burger">
    <transition-group name="burger-transition-wrapper" tag="ul">
      <li key="burger-top" class="burger-item burger-top"></li>
      <!-- <draggable
        class="burger-item"
        key="burger-item"
        v-bind="{ghostClass: 'burger-ghost-item', animation: 200, tag: 'li'}"
      >
        <div
          v-for="item in separatedList"
          :key="item.id"
          class="burger-item-inner"
          :class="item.name"
        />
      </draggable> -->
      <li
        class="burger-item"
        v-for="item in list"
        :key="item.name"
      >
        <div
          v-for="number in item.count"
          :key="number"
          class="burger-item-inner"
          :class="item.name"
        />
      </li>
      
      <li key="burger-bottom" class="burger-item burger-bottom"></li>
    </transition-group>
  </q-scroll-area>
</template>

<script>
import { mapGetters } from 'vuex'
// import draggable from "vuedraggable"

export default {
  components: {
    // draggable,
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
      list: 'ingredientList',
    }),
    separatedList() {
      let newList = [];
      this.list.forEach(item => {
        for(let i = 0; i < item.count; i++) {
          newList.push({name: item.name, id: item.name + 'Date.now()'});
        }
      });
      return newList;
    },
  },
}
</script>

<style scoped>
.burger {
  width: 280px;
  height: 175px;
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
  transition: opacity .2s;
  /* animation: slideDown .5s; */
}
.burger-item-inner:hover {
  opacity: .7;
}
.burger-item-inner:active {
  cursor: grabbing;
}
.burger-item-inner:last-child {
  margin: 0;
}
@keyframes slideDown {
  0% {
    /* margin-top: -15px; */
    opacity: 0;
  }
  100% {
    /* margin-top: 0; */
    opacity: 1;
  }
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
  /* margin-top: -15px; */
}
.burger-transition-wrapper-move {
  transition: .3s;
}

</style>