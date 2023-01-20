<template>
  <template v-if="entry">
    <div class="entry-tittle d-flex justify-content-between p-2">

      <div>
          <span class="text-success fs-3 fw-bold">{{dayMonthYear.day}}</span>
          <span class="mx-1 fs-3">{{dayMonthYear.month}}</span>
          <span class="mx-2 fs-4 fw-light">{{dayMonthYear.yearDay}}</span>
      </div>

      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>

          <button class="btn btn-primary">
              Subir Foto
              <i class="fa fa-upload"></i>
          </button>
      </div>
    </div>

    <hr>
      
    <div class="d-flex flex-column px-3 h-75">

      <textarea 
        v-model="entry.text" 
        placeholder="¿Que sucedio hoy?"
      ></textarea>

    </div>

  </template>

  <Fab 
    icon="fa-save"
  />
  
  <img class="img-thumbnail" src="https://i.pinimg.com/736x/0d/a9/a3/0da9a30e3b3b522f290ec4a99d71fa4b.jpg" alt="Xd">

</template>

<script>
import { defineAsyncComponent } from "vue"
import { mapGetters } from "vuex"

import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  components: {
        Fab: defineAsyncComponent(() => import('../components/FaB.vue'))
  },

  data() {
    return {
      entry: null
    }
  },

  methods: {
    loadEntry() {
      const entry = this.getEntryById( this.id )
      if(!entry) return this.$router.push({ name: 'no-entry' })
      
      this.entry = entry
        
    }
  },

  computed: {
    ...mapGetters('journal', ['getEntryById']),
  
    dayMonthYear() {
            const {day, month, yearDay} = getDayMonthYear(this.entry.date)
            return {day, month, yearDay}
    },
},

  created() {
    //console.log(this.id)
    this.loadEntry()
  },

  watch: {
    id() {
      this.loadEntry()
    }
  }

}
</script>

<style lang="scss" scoped>

    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }

    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10 px rgba($color: #000000, $alpha: 0.2);
    }

</style>