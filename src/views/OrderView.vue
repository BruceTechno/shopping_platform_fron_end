<script>
import TableView from "../components/Table.vue"
export default {
    components: {
        TableView
    },

    data() {
        return {
            buy: "sell"
        }
    },

}
</script>

<template>
    <div>
        <TableView :buy="buy" />
    </div>
</template>

<style lang="scss" scoped>
</style>