<script>
// routerLink
</script>

<template>
    <div class="cube">

        <div class="in-cube">
            <h1>會員註冊</h1>
        

        <div class="info-group">

            <div class="info-1">
                <p>帳號
                <input type="text">
                </p>
            </div>
            
            
            <div class="info-2">
                <p>密碼
                <input type="password">
                </p>
            </div>
            
            
            <div class="info-3">
                <p>姓名
                <input type="text">
                </p>
            </div>
            
            
            <div class="info-4">
                <p>地址
                <input type="text">
                </p>
            </div>
            
            
            <div class="info-5">
                <p>電話
                <input type="number">
                </p>
            </div>
            
        </div>

        <div class="btn">
            <button type="button">註冊</button>
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

h1{
    text-align: center;
}
p{
    font-size: 20px;
}
.cube .in-cube{
    justify-content: center;
    align-items: center;

}
.cube .in-cube .btn{
    display: flex;
    justify-content: center;
}


</style>