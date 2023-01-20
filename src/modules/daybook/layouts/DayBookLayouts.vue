<template>
    <NavbarComp />

    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>


<script>
    import { defineAsyncComponent } from "vue";

    export default {
        components: {
            NavbarComp: defineAsyncComponent(() => import('../components/NavbarComp')),
            EntryList: defineAsyncComponent(() => import('../components/EntryList'))
            
        },
    }
</script>