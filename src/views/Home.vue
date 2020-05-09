<template>
  <div class="home">
    <div class="burger-wrapper row justify-center">
      <Burger />
    </div>
    
    <div class="burger-control-wrapper row justify-center">
      <BurgerControl />
    </div>
  </div>
</template>

<script>
import Burger from '../components/Burger'
import BurgerControl from '../components/BurgerControl'

export default {
  components: {
    Burger,
    BurgerControl,
  },
}
</script>

<style scoped>
.burger-wrapper {
  padding: 20px 0;
}
.burger-control-wrapper {
  padding: 20px 0 30px 0;
}
</style>