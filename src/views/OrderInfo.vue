<script>
import TableView from "../components/Table.vue";
export default{
    components : {
        TableView
    },
    data() {
        return {
            buy : "buy"
        }
    },
}
</script>

<template>
    <div>
        <TableView :buy="buy"/>
    </div>
</template>

<style>
</style>