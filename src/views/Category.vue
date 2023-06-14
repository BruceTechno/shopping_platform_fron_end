<script>
import FunctionSelect from '../components/FunctionSelect.vue';
import { RouterView } from 'vue-router';
export default {
    data() {
        return {
            title: "商品分類",
            member: [
                {
                    name: "3C產品",
                    to: "/category/computer"
                },
                {
                    name: "配件飾品",
                    to: "/category/accessories"
                },
                {
                    name: "居家生活",
                    to: "/category/life"
                },
                {
                    name: "休閒用品",
                    to: "/category/casual"
                },
                {
                    name: "美食廣場",
                    to: "/category/food"
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