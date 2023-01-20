<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input  type="text" 
                class="form-control d-flex"
                placeholder="Buscar Entrada" 
                v-model="term"
        />
    </div>

    <div class="entry-scrollarea">
        <EntryC 
          v-for="entry in entriesByTerm" 
          :key="entry.id" 
          :entry="entry" />
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from "vuex";

export default {
    data(){
        return {
            term: ''
        }
    },
    components: {
        EntryC: defineAsyncComponent(() => import('@/modules/daybook/components/EntryC.vue'))
    },

    methods: {

    },
    
    computed: {
        ...mapGetters('journal', ['getEntriesByTerm']),
        entriesByTerm() {
            return this.getEntriesByTerm( this.term )
        }
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

