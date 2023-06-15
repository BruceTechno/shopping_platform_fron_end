// 管理登入狀態(狀態管理庫)
import { defineStore } from "pinia";
                            // 資料狀態名, 物件(所有資料)
export default defineStore("loginStatus", {
    // data
    state: () => {
        return{
            // 定義資料初始狀態
            isLogin: false,
        } 
    },

    // computed: 
    getters: {
        // 取得登入狀態
        getLogin: (state) => `${state.isLogin}`
    }, 

    // methods(可使用this)
    actions: {
        updateLogin() {

            // 啟用登入頁面=true
            this.isLogin = true;
            // 顯示登入狀態
            console.log(this.isLogin);
        },

        updateLogout(){
            this.isLogin = false;
            console.log(this.isLogin);
            console.log(111);
        }


    }
})