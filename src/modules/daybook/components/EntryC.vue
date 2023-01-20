<template>
  <div class="entry-container mb3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: entry.id}})">
    
    <!-- Titulo -->
    <div class="entry-tittle d-flex">
        <span class="text-success fs-5 fw-bold">{{dayMonthYear.day}}</span>
        <span class="mx-1 fs-5">{{dayMonthYear.month}}</span>
        <span class="mx-2 fw-ligth">{{dayMonthYear.yearDay}}</span>
    </div>

    <div class="entry-descripton">
        {{ shortText }}
    </div>
  </div>
</template>

<script>
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    computed: {
        shortText() {
            return( this.entry.text.length > 130 )
                ? this.entry.text.substring(0,130) + '...'
                : this.entry.text
        },
        dayMonthYear() {
            const {day, month, yearDay} = getDayMonthYear(this.entry.date)
            return {day, month, yearDay}
        }
    }
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