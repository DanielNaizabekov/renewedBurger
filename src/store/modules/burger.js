import { HTTP_GET, HTTP_PUT, INGREDIENT_LIST, ORDER_DATA } from '../../consts';

const state = {
  ingredientList: [],
};

const getters = {
  [INGREDIENT_LIST]: state => state.ingredientList,
};

const actions = {
  [INGREDIENT_LIST]({ dispatch }) {
    dispatch(HTTP_GET, { method: INGREDIENT_LIST });
  },
  [ORDER_DATA]({ dispatch }, body) {
    dispatch(HTTP_PUT, { method: ORDER_DATA, body, mutation: false });
  },
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
  ingredientReset(state) {
    let resetList = JSON.parse( sessionStorage.getItem('ingredientList') );
    state.ingredientList = resetList;
  },
  [INGREDIENT_LIST](state, data) {
    state.ingredientList = data;
    sessionStorage.setItem('ingredientList', JSON.stringify(data) );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};