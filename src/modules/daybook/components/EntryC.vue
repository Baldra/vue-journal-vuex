<template>
  <div class="entry-container mb3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: 10}})">
    
    <!-- Titulo -->
    <div class="entry-tittle d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-ligth">2021, jueves</span>
    </div>

    <div class="entry-descripton">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus tempora, porro non nisi quidem rem quas nobis laudantium dolorem quis a neque enim temporibus fugiat quam sequi suscipit assumenda illum.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3250;
    transition: 0.2s all ease-in;

    &:hover{
        background: lighten($color: grey, $amount: 35);
        transition: 0.2s all ease-in;
    }

    .entry-descripton{
        font-size: 12px;
    }
}

</style>