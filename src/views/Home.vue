<template>
  <div class="home">
    <div class="burger-block row justify-between">
      <div class="col-6 col-sm-3 row justify-center items-center">
        <Ingredients @selectIngredient="selectIngredient"/>
      </div>

      <div class="burger-wrapper col-12 col-sm-auto row justify-center items-center" @dragover.prevent @drop="handleAdd">
        <Burger/>
      </div>

      <div class="col-6 col-sm-3 row justify-center items-center">
        <div
          @dragover.prevent
          @dragenter="trashIconHover = true"
          @dragleave="trashIconHover = false"
          @drop="handleRemove"
        >
          <q-icon class="trash-icon" :class="{active: trashIconHover}" name="delete_outline" />
        </div>
      </div>
    </div>
    
    <div class="burger-control-block row justify-center">
      <BurgerControl @openModal="openModal"/>
    </div>

    <q-dialog v-model="isOpenModal" persistent>
      <q-card>
        <q-card-section class="bg-brown-9 row justify-center">
          <div class="text-h6 text-center text-white">Do you want to continue?</div>
        </q-card-section>
        
        <Stepper
          :stepList="stepList"
          @onSubmit="onSubmit"
          @onFinish="onFinish"
        >
          <template #burgerConfirm>
            <Burger :params="{draggable: false}"/>
          </template>

          <template #form>
            <q-form ref="form" style="width: 300px">
              <q-input v-model="form.name" label="Name" :rules="[() => validateName()]"/>
              <q-input v-model="form.address" label="Adress" :rules="[() => validateAddress()]"/>
              <div class="row justify-between items-end">
                <q-input v-model="form.bonuseCode" label="Bonuse code" fill-mask mask="### - ###"/>
                <q-btn
                  :loading="bonusCodeLoading"
                  color="brown-9 text-weight-bold"
                  @click="checkBonusCode"
                  label="Check"
                  :disable="validateBonuseCode"
                >
                  <q-tooltip :delay="1000" anchor="top middle" self="bottom middle" :offset="[10, 10]">
                    Check the code validity
                  </q-tooltip>
                </q-btn>
              </div>
              <q-input
                v-model="form.phone"
                label="Phone"
                fill-mask
                mask="# (###) ### - ###"
                :rules="[() => validatePhone()]"
              />
            </q-form>
          </template>

          <template #step3>
            step3
          </template>
        </Stepper>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import Ingredients from '../components/Ingredients';
import Burger from '../components/Burger';
import BurgerControl from '../components/BurgerControl';
import Stepper from '../components/Stepper';
import { ORDER_DATA } from '../consts';

const stepList = [
  {name: 'burgerConfirm', icon: 'settings'},
  {name: 'form', icon: 'create_new_folder'},
  {name: 'step3', icon: 'add_comment'},
];

export default {
  components: {
    Ingredients,
    Burger,
    BurgerControl,
    Stepper,
  },
  data() {
    return {
      trashIconHover: false,
      isOpenModal: false,
      bonusCodeLoading: false,
      form: {
        name: '',
        address: '',
        bonuseCode: '',
        phone: '',
      },
      stepList,
    };
  },
  computed: {
    validateBonuseCode() {
      let numbersArray = this.form.bonuseCode.split('').filter(item => !isNaN(item));
      return numbersArray.length < 8;
    },
  },
  methods: {
    ...mapMutations(['ingredientRemove', 'ingredientAdd']),
    ...mapActions({
      orderData: ORDER_DATA,
    }),
    selectIngredient(name) {
      event.dataTransfer.setData('addingElementName', name);
    },
    handleAdd(event) {
      let name = event.dataTransfer.getData('addingElementName');
      if(name) {
        this.ingredientAdd(name);
      }
    },
    handleRemove(event) {
      let name = event.dataTransfer.getData('removingElementName');
      if(name) {
        this.ingredientRemove(name);
      }
      this.trashIconHover = false;
    },
    openModal() {
      this.isOpenModal = true;
    },
    checkBonusCode() {
      this.bonusCodeLoading = true;

      setTimeout(() => {
        this.bonusCodeLoading = false;
        this.form.bonuseCode = '';

        this.$q.notify({
          message: 'Invalid code',
          type: 'negative',
          position: 'top-right',
        })
      }, 1500);
    },
    validateName(value = this.form.name) {
      let hasUpperLetter = value.split('').find(item => item === item.toUpperCase());
      return hasUpperLetter ? true : value ? 'Enter at least one uppercase letter' : 'Please, enter your name';
    },
    validateAddress(value = this.form.address) {
      return value.length > 4 || 'Please, enter your address';
    },
    validatePhone(value = this.form.phone) {
      let numbersArray = value.split('').filter(item => !isNaN(item));
      return numbersArray.length > 13 || 'Please, enter your phone';
    },
    onSubmit(stepper) {
      this.$refs.form.validate().then(success => {
        if (success) {
          stepper.next();
        }
      });
    },
    onFinish() {
      this.orderData(this.form);
      this.isOpenModal = false;
    },
  },
}
</script>

<style scoped>
.home {
  overflow: hidden;
}
.burger-block,
.burger-control-block {
  padding: 20px 0;
}
.trash-icon {
  font-size: 170px;
  color: #4e342e;
  transition: .3s;
}
.trash-icon.active {
  transform: scale(1.07);
}

@media(max-width: 600px) {
  .burger-wrapper {
    order: -10;
    margin-bottom: 10px;
  }
}
</style>