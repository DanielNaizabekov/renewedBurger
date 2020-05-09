const ingredientList = [
  {name: 'cutlet', count: 2, price: 50},
  {name: 'cheese', count: 2, price: 30},
  {name: 'tomato', count: 1, price: 20},
  {name: 'cucumber', count: 1, price: 10},
];

const state = {
   ingredientList,
};

const getters = {
  ingredientList: state => state.ingredientList,
};

const mutations = {
  ingredientAdd(state, type) {
    let ingredient = state.ingredientList.find(item => item.name === type);
    ingredient.count++;
  },
  ingredientRemove(state, type) {
    let ingredient = state.ingredientList.find(item => item.name === type);
    if(ingredient.count !== 0) ingredient.count--;
  },
};

export default {
   state,
   getters,
   actions: {},
   mutations,
};