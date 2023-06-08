<script>
export default {
    data() {
        return {
            account: null,
            pwd: null,

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


            // fetch("http://localhost:8080/login", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         account: this.account,
            //         pwd: this.pwd
            //     }),
            //     credential: 'include'
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            // })
            // .catch(err => console.log(err))   
        }
    },
  
}
</script>

<template>
    <div>
        <h2>登入</h2>
        <input type="text" v-model="account">
        <input type="password" v-model="pwd">
        <button type="button" @click="login">登入</button>
    </div>
</template>

<style></style>