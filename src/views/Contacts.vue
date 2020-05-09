<template>
   <div>
      <h2>Contacts</h2>
      <q-btn @click="home" color="white" text-color="black" label="Home" />

      <q-scroll-area
         :thumb-style="thumbStyle"
         :content-active-style="contentActiveStyle"
         style="height: 200px; max-width: 300px;"
      >
         <div v-for="n in 3" :key="n" class="q-pa-xs">
         Lorem ipsum dolor sit amet, consectetur adipisicing
         elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua.
         </div>
      </q-scroll-area>
   </div>
</template>

<script>
export default {
  data () {
    return {
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },

      contentActiveStyle: {
        backgroundColor: '#eee',
        color: 'black'
      },

      thumbStyle: {
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
      }
    }
  },
  methods: {
    home() {
      this.$router.push('/');
    },
  }
}
</script>