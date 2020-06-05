<template>
   <div>
      <drop-list v-model="isOpen" :innerData="computedList">
        <template #activator>
          <q-input @click.stop="isOpen = true" v-model="inputValue" dense outlined label="Phone" />
        </template>

        <template #default="{ innerData }">
          <ul v-show="innerData.length" class="list">
            <li
              v-for="(item, index) in innerData"
              :key="item.name + index"
              class="list-item"
              :class="{active: item.name === selectedValue}"
              v-html="item.html"
              @click="chooseOption(item.name)"
            />
          </ul>
        </template>
      </drop-list>
   </div>
</template>

<script>
import DropList from '@/components/DropList.vue';

export default {
  components: {
    DropList,
  },
  data () {
    return {
      isOpen: false,
      inputValue: '',
      selectedValue: '',
      list: [
        { name: 'Apple' },
        { name: 'Google' },
        { name: 'Facebook' },
        { name: 'Huawei' },
        { name: 'Oppo' },
        { name: 'Samsung' },
        { name: 'Intel' },
        { name: 'Qualcomm' },
        { name: 'ARM' },
        { name: 'AMD' },
        { name: 'Sony' },
      ],
    };
  },
  computed: {
    computedList() {
      let filtered = this.list.filter(item => {
        if(this.inputValue !== '') return item.name.toLowerCase().includes( this.inputValue.toLowerCase() );
      });

      filtered.forEach(item => {
        let html = `<span class="input-letters">${this.inputValue}</span>`;
        html = item.name.toLowerCase().replace(this.inputValue.toLowerCase(), html);
        item.html = html;
      });

      return filtered
    },
  },
  methods: {
    chooseOption(name) {
      this.inputValue = name;
      this.selectedValue = name;
    },
  },
}
</script>

<style scoped>
.list {
  max-height: 300px;
  overflow: auto;
  box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
  padding: 8px 0;
  border-radius: 7px;
  overflow: hidden;
}

.list-item {
  padding: 10px 18px;
  transition: 0.3s;
  cursor: pointer;
}
.list-item:hover {
  background: #E9EBEC;
}
.active {
  background: #c5dbe6;
}
</style>

<style>
.input-letters {
  background: #E9EBEC;
}
</style>