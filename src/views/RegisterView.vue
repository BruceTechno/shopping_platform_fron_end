<script>
import Info from "../components/Message.vue";
// routerLink

export default{
    components:{
        Info
        
    },

    data(){
        return{            
            account: null,
            pwd: null,
            name: null,
            address: null,
            number: null,
            isShow: false,

        }
    },
    methods:{

        switchWindows() {
            this.isShow = !this.isShow
        },                  
        register(){
            // console.log("successful!");
            sessionStorage.setItem("account", this.account);
            sessionStorage.setItem("password", this.pwd);
            sessionStorage.setItem("name", this.name);
            sessionStorage.setItem("address", this.address);
            sessionStorage.setItem("number", this.number);
        },
        
    }
}
</script>

<template>
    <div class="cube">

        <div class="in-cube">
            <h1>會員註冊</h1>
        

        <div class="info-group">

            <div class="info-1">
                <p>帳號
                <input type="text" v-model="account">
                </p>
            </div>
            
            
            <div class="info-2">
                <p>密碼
                <input type="password" v-model="pwd">
                </p>
            </div>
            
            
            <div class="info-3">
                <p>姓名
                <input type="text" v-model="name">
                </p>
            </div>
            
            
            <div class="info-4">
                <p>地址
                <input type="text" v-model="address">
                </p>
            </div>
            
            
            <div class="info-5">
                <p>電話
                <input type="number" v-model="number">
                </p>
            </div>
            
        </div>

        <div class="btn">
            <!-- 點擊事件發生後啟用register功能 -->
            <button type="button" @click="switchWindows">註冊</button>
            
            <Info v-if="isShow" @outsideWindows="switchWindows">
                <h2>彈跳視窗</h2>
            </Info>
        
        </div>

    </div>
</div>

    


</template>

<style lang="scss" scoped>

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

input{
    padding: 5px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
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