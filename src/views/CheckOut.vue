<script>

export default {
    data() {
        return {
            comInfo: [],
            checkoutInfo: [],
            payway: "信用卡"
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
                        console.log(data);
                        this.checkoutInfo.push({
                            number: data.commodityList[0].number,
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
            <table id="showData" class="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <p class="m-0">訂單商品</p>
                        </th>
                        <th scope="col">
                            <p class="m-0">品名</p>
                        </th>
                        <th scope="col">
                            <p class="m-0">單價</p>
                        </th>
                        <th scope="col">
                            <p class="m-0">數量</p>
                        </th>
                        <th scope="col">
                            <p class="m-0">總價</p>
                        </th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr v-for="item in checkoutInfo" class="itembox">
                        <th scope="row" class="imgbox"><img src="" alt="pic"></th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ +item.price * +item.quantity }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="paywaybox">
            <div class="payway">
                <h3>選擇付款方式</h3>
                <div class="credit">
                    <input type="radio" name="payway" id="creditcard" value="信用卡" v-model="payway">
                    <label for="creditcard">信用卡</label>
                </div>
                <div class="atm">
                    <input type="radio" name="payway" id="atm" value="ATM" v-model="payway">
                    <label for="atm">ATM轉帳</label>
                </div>
                <div class="711">
                    <input type="radio" name="payway" id="711" value="711" v-model="payway">
                    <label for="711">取貨付款</label>
                </div>
            </div>

            <div class="userunfo">
                <h3>收件資訊</h3>
                <h4>收件人姓名 :</h4>
                <h4>收件人地址 :</h4>
                <h4>信用卡號碼 :</h4>
                <input type="number">
                <h4>收件人地址 :</h4>
                <input type="text">
                <h4>有效年限 :</h4>
                <h4>安全碼 :</h4>
                <input type="number">
            </div>

            <div class="diliveyway">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.checloutbox {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .btnbox {
        margin-top: 10px;
        width: 90%;
        background-color: white;
        margin-bottom: 20px;
        button{
            background-color: #FAD5C4;
            color: black;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.9s;
            padding: 5px 20px;
            &:hover{
                background-color: #f3b193;
                scale: 1.05;
            }

            &:active{
                scale: 0.9;
            }
        }
    }

    .checkinfobox {
        width: 90%;
        height: 45%;
        border: black 1px solid;
        border-radius: 5px;
        overflow: auto;
        font-weight: bold;

        .table {
            text-align: center;
            width: 80%;
            margin: 0 auto;

            .imgbox {
                width: 100px;
                height: 100px;
                background-color: blue;

                img {
                    width: 100%;
                    height: 100%;

                }
            }

            .itembox {
                margin: 10px 0;

            }


        }
    }

    .paywaybox {
        width: 90%;
        height: 45%;
        background-color: yellow;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .payway {
            width: 30%;
            height: 100%;
            background-color: #C5BABA;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-weight: bold;
            border-radius: 10px;
            h3{
                font-weight: bold;
            }
            label{
                font-size: 24px;
                
            }
            
        }

        .userunfo {
            width: 33%;
            height: 100%;
            background-color: pink;
        }

        .diliveyway {
            width: 33%;
            height: 100%;
            background-color: goldenrod;
        }
    }
}
</style>