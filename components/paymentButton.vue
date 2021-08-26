<template>
  <div>
    <button class="theme-btn-one btn-black-overlay btn_sm" @click="submit">Payer!</button>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data () {

  },
  methods: {
    submit () {
      this.$axios.post('/api/payment/process-payment')
    },
  },
};
</script>