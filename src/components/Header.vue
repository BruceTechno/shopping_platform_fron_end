<script>
import { RouterLink } from 'vue-router';
import {mapState, mapActions} from 'pinia';
import loginStatus from '../stores/loginStatus.js';

export default{
//    mapActions: 對應loginStatus的actions功能
    methods:{
        // "..."要加
        // mapActions(自己的資料, 要取用的方法)
        ...mapActions(loginStatus, ["updateLogin", "updateLogout"]),
        
        // 登出選項功能
        Logout(){
            this.updateLogout()
        }
    },
    computed: {
        // 取得pinia裡面管理資料的狀態
        ...mapState(loginStatus, ["getLogin", "isLogin"])

    }
}
</script>
<!-- props更改登出 -->
<template>
    <header>
        <p>{{ getLogin }}</p> 
        <p>{{ isLogin }}</p>
        <div class="wrapper">
            <div class="search-group">
                <!-- LOGO 回首頁 -->
                <div class="logo">
                    <RouterLink class="link" to="/">
                        <i class="fa-solid fa-house"></i>
                    </RouterLink>
                </div>
                <!-- 搜尋 -->
                <div class="search-box">
                    <input type="text" class="input-style">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

            </div>


            <div class="function-group">
                <!-- 我的賣場 -->
                <div class="my-market">
                    <RouterLink class="link" to="/my-market">我的賣場</RouterLink>
                </div>
                <!-- 會員中心 -->
                <div class="member-center">
                    <RouterLink class="link" to="/member-center">會員中心</RouterLink>
                </div>
                <!-- 註冊/登入 -->
                <!-- {{ 登出 }} -->
                <div class="login">
                    <!-- v-if: 沒有登入的狀態下(false)顯示"註冊/登入" -->
                    <RouterLink class="link" v-if="!isLogin" to="/login">註冊/登入</RouterLink>

                    <RouterLink class="link"  @click = "Logout" v-if="isLogin" to="/">登出</RouterLink>

                </div>
                <div class="logout">

                </div>

                <!-- 購物車 -->
                <div class="shopping-car">
                    <RouterLink class="link" to="/shopping-car">購物車</RouterLink>
                </div>
            </div>


        </div>
        <div class="category">
            <RouterLink class="category-link" to="/category/c1">分類1</RouterLink>
            <RouterLink class="category-link" to="/category/c2">分類2</RouterLink>
            <RouterLink class="category-link" to="/category/c3">分類3</RouterLink>
            <RouterLink class="category-link" to="/category/c4">分類4</RouterLink>
            <RouterLink class="category-link" to="/category">....所有分類</RouterLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.wrapper {
    padding: 2rem;
    display: flex;
    justify-content: space-between;

    .function-group {
        display: flex;
    }

    .search-group {
        display: flex;

        .search-box {
            position: relative;

            .input-style {
                padding: 5px;
                font-size: 20px;
                border-radius: 10px;
                border: none;
            }

            

            i{
                position: absolute;
                font-size: 20px;
                right:10px;
                top:12px;
                cursor: pointer;  
                &:hover{
                    scale: 1.05;
                }
            }
        }


    }

}

header {
    width: 100vw;

    background-color: #E2C2B3;
    font-size: 2rem;

    .category {
        width: 100vw;
        padding: 10px 0;
        display: flex;
        justify-content: space-around;

        .category-link {
            text-decoration: none;
            color: #403234;
            margin: 0 10px;
            font-size: 20px;
            font-weight: bold;
            transition: 0.7s;

            &:hover {
                color: #735b5f;
            }
        }

        background-color: #F7F3F5;
        font-size: 1rem;

    }
}

.link {
    text-decoration: none;
    color: #687477;
    cursor: pointer;
    transition: 0.3s;
    margin: 0 1rem;

    &:hover {
        color: white;
    }
}
</style>