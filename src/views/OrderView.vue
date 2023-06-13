<script>
export default {
    data() {
        return {
            img: null,
            name:null,
            category:null,
            price:null,
            inventory:null,
            accountSell:null,

        }
    },
    methods: {
        getImg(e) {
            console.log(e);
            const img = e.target.files[0]

            const reader = new FileReader();
            reader.readAsDataURL(img)
            reader.onload = (e) => {
                this.img = e.target.result;
                console.log(this.img)
            }

        }
    },
    mounted() {
         const body = {
            img:this.img,
            name:this.name    ,
            category:this.category,
            price:this.price,
            inventory:this.inventory,
            accountSell: this.accountSell,
                
            }

            console.log(body)

            fetch("http://localhost:8080/add_commodity", {
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
}
</script>

<template>
     
    <h2>File Reader</h2>
    <input type="file" @change="getImg">
    <img :src="img" alt="img">
    <button type="button">上架商品</button>
    <p>品茗</p>
    <input type="text">
    <p>分類</p>
    <input type="text">
    <p>價格</p>
    <input type="text">
    <p>庫存</p>
    <input type="text">
</template>

<style>
</style>