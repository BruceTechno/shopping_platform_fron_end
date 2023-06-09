<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <div class="wrapper">
            <div class="search-group">
                <!-- LOGO 回首頁 -->
                <div class="logo">
                    <RouterLink class="link" to="/">
                        <img src="../../pic/Dobby-1.jpg" alt="">
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
                    <RouterLink class="link" to="/my-market/orderview">我的賣場</RouterLink>
                </div>
                <!-- 會員中心 -->
                <div class="member-center">
                    <RouterLink class="link" to="/member-center/userInfo">會員中心</RouterLink>
                </div>

                <!-- 購物車 -->
                <div class="shopping-car">
                    <RouterLink class="link" to="/shopping-car/carview"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
                </div>
                <!-- 註冊/登入 -->
                <div class="login">
                    <RouterLink class="link" to="/login">登入</RouterLink>
                </div>
            </div>


        </div>
        <div class="category">
            <RouterLink class="category-link" to="/category/c1">3C產品</RouterLink>
            <RouterLink class="category-link" to="/category/c2">配件飾品</RouterLink>
            <RouterLink class="category-link" to="/category/c3">居家生活</RouterLink>
            <RouterLink class="category-link" to="/category/c4">休閒用品</RouterLink>
            <RouterLink class="category-link" to="/category">所有分類</RouterLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.wrapper {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
    min-width: 1270px;
    .function-group {
        display: flex;
    }

    .search-group {
        display: flex;
        align-items: center;

        .logo {
            width: 100px;
            height: 100px;
            margin: 0 10px;

            img {
                width: 100%;
                
            }
        }

        .search-box {
            position: relative;
            border: none;
            i{
                border: none;
            }
            .input-style {
                padding: 5px 40px 5px 5px  ;
                font-size: 20px;
                border-radius: 10px;
                border: none;
            }



            i {
                position: absolute;
                font-size: 20px;
                right: 10px;
                top: 8px;
                cursor: pointer;

                &:hover {
                    scale: 1.05;
                }
            }
        }


    }

}

header {
    width: 100vw;
    background-color: #E2C2B3;
    font-size: 20px;
    min-width: 1270px;

    .category {
        width: 100vw;
        min-width: 1270px;
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
    i{
        font-size: 25px;
    }
    &:hover {
        color: white;
    }
}</style>