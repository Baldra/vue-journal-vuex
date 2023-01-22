<template>
  <template v-if="entry">
    <div class="entry-tittle d-flex justify-content-between p-2">

      <div>
          <span class="text-success fs-3 fw-bold">{{dayMonthYear.day}}</span>
          <span class="mx-1 fs-3">{{dayMonthYear.month}}</span>
          <span class="mx-2 fs-4 fw-light">{{dayMonthYear.yearDay}}</span>
      </div>

      <div>

        <input type="file"
          @change="onSelectedImage"
          ref="imageSelector"
          v-show="false"
          accept="image/png, image/jpeg"
        >

          <button 
            v-if="entry.id"
            class="btn btn-danger mx-2"
            @click="onDeleteEntry">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>

          <button 
            class="btn btn-primary"
              @click="onSelectImage">
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
    @on:click="saveEntry"
  />


   <img
      v-if="entry.picture && !localImage" 
      class="img-thumbnail" 
      :src="entry.picture" 
      alt="Img">
      

  <img
    v-if="localImage" 
    class="img-thumbnail" 
    :src="localImage" 
    alt="Img"
    >
    
    <button
     v-if="localImage"
     class="btn btn-danger btn-circle btn-position"
     @click="this.localImage = null"> <!--  Elimina la imagen en vista previa-->
     <i class="fa fa-times"></i>
     </button> 

</template>

<script>
import { defineAsyncComponent } from "vue"
import { mapActions, mapGetters } from "vuex"
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage'

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
      entry: null,
      localImage: null,
      file: null
    }
  },

  methods: {
    ...mapActions('journal', ['updateEntry', 'createEntry','deleteEntry']),

    loadEntry() {
      let entry

      if(this.id === 'new'){
        entry = {
          text: '',
          date: new Date().getTime()
        }

      } else {

        entry = this.getEntryById( this.id )
        if(!entry) return this.$router.push({ name: 'no-entry' })
      }
  
      this.entry = entry
        
    },

    async saveEntry() {

      new Swal({
        title: 'Espere por favor',
        allowOutsideClick: false
      })
      Swal.showLoading()

      const picture = await uploadImage(this.file)
      this.entry.picture = picture


      if(this.entry.id){
        //autialzia entrada
        await this.updateEntry(this.entry)
      } else {
        //crear nueva entrada
        await this.createEntry(this.entry)
        //console.log('Post de una nueva entrada')
        this.$router.push({ name: 'entry', params: {id: this.entry.id} })
      }

      this.file = null
      Swal.fire('Guardado', 'Entrada registrada con exito', 'success')

    },

    async onDeleteEntry() {

      const { isConfirmed } = await Swal.fire({
        title: '¿Seguro que quiere eliminar la entrada?',
        text: 'Una vez borrado, no se podra recuperar',
        showDenyButton: true,
        confirmButtonText: 'Si, estoy seguro'
      })

      if(isConfirmed) {
        new Swal({
        title: 'Espere por favor',
        allowOutsideClick: false
        })

        Swal.showLoading()

        await this.deleteEntry(this.entry.id)
        this.$router.push({ name: 'no-entry'}) 

        Swal.fire('Eliminado','', 'success')
      }
    },

    onSelectedImage(event){
      const file = event.target.files[0]
      if( !file ){ 
        this.file = null
        return
      }

      this.file = file

      const fr = new FileReader()
      fr.onload = () => this.localImage = fr.result
      const asd = fr.readAsDataURL( file )
    },

    onSelectImage() {
        this.$refs.imageSelector.click()
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


      //TODO: Deberia arreglar esto para que la posicio ndel boton sea relativa a la imagen
    .btn-position {
        //border-radius: 25%;
        bottom: 160px;
        //height: 40px;
        position: fixed;
        right:  30px;
        //width:  40px;
    }

    .btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
}

</style>