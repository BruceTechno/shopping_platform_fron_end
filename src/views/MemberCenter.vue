<script>
</script>

<template>
    <div class="userInfo-group">
        <div class="profile-pic">
            <div class="account">
                <h2>會員中心</h2>
            </div>
            <div class="pic">

            </div>


        </div>
        <div class="userInfo-box">

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

    .profile-pic {
        width: 30%;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        .pic {
            width: 200px;
            height: 200px;
            background-color: red;
            border-radius: 100px;
        }

        .account {
            width: 50%;
            height: 100px;
            text-align: center;
            font-size: 30px;
            margin-bottom: 20px;
        }

    }

    .userInfo-box {
        width: 70%;
        height: 500px;
        background-color: red;
    }
}
</style>