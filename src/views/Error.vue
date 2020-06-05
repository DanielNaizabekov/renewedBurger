<template>
  <div>
    <transition-card v-model="isOpen">
      <template #activator>
        <q-btn @click.stop="isOpen = true" label="Open"/>
      </template>

      <q-card style="width: 170px;">
        <q-card-section class="bg-brown-9 row justify-center">
          <div class="text-h6 text-center text-white">Do you want to continue?</div>
        </q-card-section>
      </q-card>
    </transition-card>
  </div>
</template>

<script>
import TransitionCard from '@/components/TransitionCard';

export default {
  components: {
    TransitionCard,
  },
  data() {
    return {
      isOpen: false,
    };
  },
}
</script>