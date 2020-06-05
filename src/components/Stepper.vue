<template>
  <q-stepper
    v-model="step"
    ref="stepper"
    contracted
    animated
  >
    <q-step
      v-for="(item, index) in stepList"
      :key="item.name"
      :name="index + 1"
      :icon="item.icon"
      :title="item.name"
      :done="step > index + 1"
    >
      <slot :name="item.name"> slot {{ index + 1 }} </slot>
    </q-step>

    <template #navigation>
      <q-card-actions>
        <q-btn flat label="Close" color="brown-9 text-weight-bold" v-close-popup/>
        <q-space />
        <q-btn
          v-if="step > 1"
          @click="prevStep"
          flat
          color="brown-9 text-weight-bold"
          label="Back"
        />
        <q-btn
          @click="nextStep"
          flat
          color="green-6 text-weight-bold"
          :label="nextButtonLabel"
        />
      </q-card-actions>
    </template>
  </q-stepper>
</template>

<script>
export default {
  props: {
    stepList: {
      type: Array,
      default() {
        return [
          {name: 'Step1', icon: 'settings'},
          {name: 'Step2', icon: 'create_new_folder'},
          {name: 'Step3', icon: 'add_comment'},
        ];
      },
    }
  },
  data () {
    return {
      step: 1,
    };
  },
  computed: {
    nextButtonLabel() {
      return this.step === this.stepList.length ? 'Finish' : 'Next';
    },
  },
  methods: {
    prevStep() {
      this.$refs.stepper.previous();
    },
    nextStep() {
      if(this.step === 2) return this.$emit('onSubmit', this.$refs.stepper);
      if(this.step === this.stepList.length) return this.$emit('onFinish');
      this.$refs.stepper.next();
    },
  },
}
</script>