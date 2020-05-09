<template>
  <div class="burger-control">
    <q-card class="my-card">
      <q-card-section class="bg-brown-9 text-white">
        <p class="text-h6 text-center">Total price: {{ totalPrice }}</p>
      </q-card-section>

      <q-card-actions>
        <ul class="burger-control-list">
          <li
            v-for="(item, index) in list"
            :key="index"
            class="burger-control-item row justify-between items-center"
          >
            <q-btn
              @click="handleRemove(item.name)"
              class="burger-control-item-btn"
              :disable="item.count === 0"
              round
              flat
              color="brown-8"
            >
              <q-icon class="burger-control-item-icon" name="remove" />
            </q-btn>
            <div class="burger-control-ingredient text-weight-bold text-uppercase text-brown-5">{{ item.name }}</div>
            <q-btn
              @click="handleAdd(item.name)"
              class="burger-control-item-btn"
              round
              flat
              color="brown-8"
            >
              <q-icon class="burger-control-item-icon" name="add" />
            </q-btn>
          </li>
        </ul>
      </q-card-actions>

      <q-card-section>
        <div
          class="row justify-around items-center"
        >
          <q-btn rounded color="brown-9 text-weight-bold" label="Reset" style="width: 100px"/>
          <q-btn rounded color="green-6 text-weight-bold" label="Continue" style="width: 100px"/>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      list: 'ingredientList',
    }),
    totalPrice() {
      return this.list.reduce((acc, currentValue) => acc + currentValue.price * currentValue.count, 0);
    },
  },
  methods: {
    ...mapMutations(['ingredientRemove', 'ingredientAdd']),
    handleRemove(type) {
      this.ingredientRemove(type);
    },
    handleAdd(type) {
      this.ingredientAdd(type);
    },
  },
}
</script>

<style scoped>
.burger-control-list {
  width: 100%;
  padding: 0 15px;
}
.burger-control-item {
  padding: 5px 0;
  border-bottom: 1px solid #E0E0E0;
}
.burger-control-item:first-child {
  padding: 0 0 5px 0;
}
.burger-control-item:last-child {
  padding: 5px 0 0 0;
  border: 0;
}
.burger-control-ingredient {
  padding: 0 35px;
}
.burger-control-item-btn {
  width: 35px;
  height: 35px;
  position: relative;
}
.burger-control-item-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>