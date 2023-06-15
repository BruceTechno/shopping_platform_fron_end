<script>
import FunctionSelect from '../components/FunctionSelect.vue';
import { RouterView } from 'vue-router';
export default {
    data() {
        return {
            title: "分類查詢",
            member: [
                {   
                    index:501,
                    name: "3C產品",
                    to: "/category/computer"
                },
                {
                    name: "配件飾品",
                    to: "/category/commodity"
                },
                {
                    name: "居家生活",
                    to: "/category/orderview"
                },
                {
                    name: "休閒用品",
                    to: "/category/commodity"
                }
            ]
        }
    },
    components : {
        FunctionSelect
    }
}
</script>

<template>
    <div class="category-group">
        <FunctionSelect :title="title" :member="member"/>
        <div class="category-box">
            <RouterView />
        </div>
    </div>

</template>

<style lang="scss" scoped>

.category-group{
    display: flex;
}
</style>