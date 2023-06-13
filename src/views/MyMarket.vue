<script>
import FuctionSelect from "../components/FunctionSelect.vue"
export default {
    components: {
        FuctionSelect
    },
    data() {
        return {
            title: "我的賣場",
            member: [
                {
                    name: "訂單查詢",
                    to: "/my-market/orderview"
                },
                {
                    name: "商品管理",
                    to: "/my-market/commodity"
                }
            ]
        }
    },
}
</script>

<template>
    <div class="my-market">
        <FuctionSelect :member="member" :title="title" />
        <div class="user-box">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-market {
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