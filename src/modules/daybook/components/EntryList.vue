<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input  type="text" 
                class="form-control d-flex"
                placeholder="Buscar Entrada" 
        />
    </div>

    <div class="entry-scrollarea">
        <EntryC 
          v-for="item in 100" 
          :key="item" />
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        EntryC: defineAsyncComponent(() => import('@/modules/daybook/components/EntryC.vue'))
    }
}
</script>

<style lang="scss" scoped>
    .entry-list-container{
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);
    }
    .entry-scrollarea{
        height: calc(100vh - 110px);
        overflow: auto;
    }
</style>

