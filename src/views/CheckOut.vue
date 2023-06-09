<script>

export default {
    data() {
        return {
            comInfo: [],
            checkoutInfo: []
        }
    },
    mounted() {
        this.getCom(this.propText)
    },
    methods: {
        getCom(text) {
            console.log(text)
            let list = text.split(',');
            list.forEach(i => {
                let str = i.split('-');
                this.comInfo.push({
                    name: str[0],
                    quantity: str[1]
                })
            })
            console.log(this.comInfo);

            this.comInfo.forEach(i => {
                let body = {
                    name: i.name
                }
                console.log(body);
                fetch("http://localhost:8080/search_com_by_name", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify(body)
                })
                    .then(res => res.json())
                    .then(data => {
                        this.checkoutInfo.push({
                            name: data.commodityList[0].name,
                            price: data.commodityList[0].price,
                            quantity: i.quantity,
                            total: (+data.commodityList[0].price * +i.quantity)
                        })
                    })

                console.log(this.checkoutInfo);
            })
        },
        getComInfo(name) {
            console.log(name);
        }
    },
    props: ["propText"]
}
</script>

<template>
    <div class="checloutbox">
        <div class="btnbox">
            <button type="button">返回購物車</button>
        </div>
        <div class="checkinfobox">

        </div>
        <div class="paywaybox">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.checloutbox{
    background-color: greenyellow;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btnbox{
        width: 90%;
        background-color: white;
    }
    .checkinfobox{
        width: 90%;
        height: 45%;
        background-color: blue;
    }

    .paywaybox{
        width: 90%;
        height: 45%;
        background-color: yellow;
    }
}
</style>