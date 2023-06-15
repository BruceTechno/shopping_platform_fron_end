<script>
import {mapActions} from "pinia";
import indexStore from "../stores/indexStore"
export default{
    methods: {
        ...mapActions(indexStore, ["updateLocation"])
    },
    mounted() {
        this.updateLocation(501);
        
    }
}
</script>

<template>
    <div>
        <h2>3c</h2>
        
    </div>
</template>

<style>
</style>