<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <div class="wrapper">
            <!-- LOGO 回首頁 -->
            <div class="logo">
                <RouterLink class="link" to="/my-market">
                    <i class="fa-solid fa-house"></i>
                </RouterLink>

            </div>
            <!-- 搜尋 -->
            <input type="text">
            <button type="button">搜尋</button>
            <!-- 我的賣場 -->
            <div class="my-market">
                <RouterLink class="link" to="/my-market">我的賣場</RouterLink>
            </div>
            <!-- 會員中心 -->
            <div class="member-center">
                <RouterLink class="link" to="/member-center">會員中心</RouterLink>
            </div>
            <!-- 註冊/登入 -->
            <div class="login">
                <RouterLink class="link" to="/login">註冊/登入</RouterLink>
            </div>
            <!-- 購物車 -->
            <div class="shopping-car">
                <RouterLink class="link" to="/shopping-car">購物車</RouterLink>
            </div>

    </div>
    <div class="category">
        <RouterLink class="category-link" to="">分類1</RouterLink>
        <RouterLink class="category-link" to="">分類2</RouterLink>
        <RouterLink class="category-link" to="">分類3</RouterLink>
        <RouterLink class="category-link" to="">分類4</RouterLink>
        <RouterLink class="category-link" to="">....所有分類</RouterLink>
    </div>
    </header>
</template>

<style lang="scss" scoped>
.wrapper {
    padding: 2rem;
    display: flex;

}

header {
    width: 100vw;
    padding: 1rem 4rem;
    background-color: #41b782;
    font-size: 2rem;

    .category {
        width: 100vw;
        padding: 1rem 4rem;
        background-color: white;
        font-size: 1rem;
        color: black;
    }
}

.link {
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    margin: 0 1rem;

    &:hover {
        color: aquamarine;
    }
}
</style>