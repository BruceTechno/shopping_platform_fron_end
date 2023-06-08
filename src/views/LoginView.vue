<script>

</script>


<template>
    
    <div class="cube">

        <div class="in-cube">
        <h1>會員登錄</h1>

        <span class="account">
            <p>帳號
                <input type="text" v-model="account">
            </p>
        </span>
        <span class="pwd">
            <p>密碼
                <input type="password" v-model="pwd">
            </p>
        </span>

        <div class="btn-area">

                <div class="login">
                    <button type="button">登入</button>
                </div>
                

                <div class="register">

                    <RouterLink to="/register">
                        <button type="button" RouterLink to="/register">註冊</button>
                    </RouterLink>
                </div>
    </div>

    </div>
</div>


</template>

<style scoped>

    .cube{

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E2C2B3;
        padding:11em;
        margin: 5em;

    }

    .cube .in-cube{

        justify-content: center;
        align-items: center;
    }

    h1{
        text-align: center;
        
    }
    p{
        font-size: 20px;
    }

 
    .cube .in-cube .btn-area{
        display: flex;
        justify-content: right;
        margin-right: 30px;
    }

    .cube .in-cube .btn-area .login{
        margin-right: 20px;
    }

    /* .cube .in-cube .btn-area .register{
        margin-left: 20px;
    } */





    /* .cube  .pwd{
        display: flex;
        justify-content: center;
        align-items: center;
    } */

</style>