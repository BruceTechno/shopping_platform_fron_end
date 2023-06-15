<script>
import Info from "../components/LoginMessage.vue";

export default {
    components:{
        // Info,
        
    },

    data() {

        return {
            account: null,
            pwd: null,
            isLogin: false,
        }
    }, 

    methods:{
        login() {

            const body = {
                "account": this.account,
                "pwd": this.pwd,
            }

            console.log(body);
            this.isLogin = !this.isLogin;

            // fetch("http://localhost:8080/login", {

            //     method:"POST",
            //     headers:{
            //         // 設置成json格式
            //         'Content-Type': 'application/json',
            //     },

            //     // 將 JS值或對象轉換為: JSON 字符串
            //     body: JSON.stringify(body), 

            //     // 確實取得Jsession: Http Session通訊用
            //     credentials: 'include'

            // })

            // .then(function(response){
                
            //     return response.json();
            // })
            
            // // 檢查後臺程式: Response的data裡message項目要是沒有"successful"
            // // 的結果就報錯並結束流程
            // .then((data) => {

            //     if(data.message !== "Successful!!"){
                    
            //         alert("登入系統錯誤!");
            //         console.log(data);
            //         return;
            //     }
            //     console.log(data);
            //     // this: 決定要呼叫的變數名
            //     this.isLogin = !this.isLogin;

            //     this.$emit("loginPage");
            // })

            // .catch(function(error){

            //     console.log('Login Error', error);

            //     alert("後台系統錯誤!");

            // })
        }
    }
}

</script>


<template>
    
    <div class="cube">

        <div class="in-cube">
        <h1>會員登入後網站</h1>

        <Info v-if="isLogin" @outsideWindows="login"></Info>

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

        .in-cube{

        justify-content: center;
        align-items: center;
    }
        .account{
            position: relative;

            .account-input{
                padding: 5px;
                font-size: 20px;
                border-radius: 10px;
                border: none;
            }
        }
        
        .pwd{
            position: relative;

            .pwd-input{
                padding: 5px;
                font-size: 20px;
                border-radius: 10px;
                border: none;
            }
        }

        h1{
            text-align: center;
            
        }
        p{
            font-size: 20px;
        }

 
        .btn-area{
        display: flex;
        justify-content: right;
        margin-right: 30px;
    }

            .login{
            margin-right: 20px;
            }   



</style>