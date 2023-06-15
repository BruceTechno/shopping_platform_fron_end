<script>
import {mapActions} from "pinia";
import indexStore from "../stores/indexStore"
import ProductCard from "../components/ProductCard.vue"
export default {
    components: {
        ProductCard
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(indexStore, ["updateLocation"])
    },
    mounted() {
        this.updateLocation(102);
        
    }
}
</script>

<template>
    <div>
        <h2>COM</h2>
    </div>
</template>

<style>
</style>