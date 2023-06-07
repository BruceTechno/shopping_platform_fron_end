<script>
import FuctionSelect from "../components/FunctionSelect.vue"
import { RouterView } from 'vue-router';
export default {
    components: {
        FuctionSelect
    },
    data() {
        return {
            title : "會員中心",      
            member:[
                {
                    name:"會員資料修改",
                    to:"/member-center/userInfo"
                },
                {
                    name:"訂單查詢",
                    to:"/member-center/userInfo"
                }
            ]
        }
    },
}
</script>

<template>
    <div class="userInfo-group">
        <FuctionSelect :member="member" :title="title" />
        <div class="user-box">
            <RouterView/>
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
        border: 2px black solid;
    }
}
</style>