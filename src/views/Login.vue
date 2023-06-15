<script>
import {mapActions} from "pinia";
import indexStore from "../stores/indexStore"
export default {
    data() {
        return {
            account: null,
            pwd: null
        }
    },
    methods: {
        login() {
            const body = {
                account: this.account,
                pwd: this.pwd
            }

            console.log(body)

            fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
                credentials: "include"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        },
        ...mapActions(indexStore, ["updateLocation"])
    },
       
    mounted() {
        this.updateLocation(400);
        
    }
}
</script>

<template>
    <div>
        <input type="text" v-model="account">
        <input type="password" v-model="pwd">
        <button type="button" @click="login">登入</button>
    </div>
</template>

<style></style>