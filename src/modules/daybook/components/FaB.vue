<template>
  <button class="btn btn-primary"
   @:click="this.$emit('on:click')">
    <i class= "fa" 
        :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    } 
  },
}
</script>

<style lang="scss" scoped>
    button {
        border-radius: 25%;
        bottom: 20px;
        height: 40px;
        position: fixed;
        right:  20px;
        width:  40px;
    }
</style>