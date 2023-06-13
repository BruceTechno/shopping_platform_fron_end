<script>
import FuctionSelect from "../components/FunctionSelect.vue"
import { RouterView } from 'vue-router';

export default {
    components: {
        FuctionSelect
    },
    data() {
        return {
            title: "所有分類",
            member: [
                {
                    name: "3C產品",
                    to: "/category/3CProduct"
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

            ]
        }
    },
}
</script>

<template>
    <div class="userInfo-group">
        <FuctionSelect :member="member" :title="title" />
        <div class="user-box">
            <RouterView />
            <p>居家生活</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.userInfo-group {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .user-box {
        width: 100vw;
        height: 100vh;
        background-color: rgb(253, 253, 253);
    }
}
</style>