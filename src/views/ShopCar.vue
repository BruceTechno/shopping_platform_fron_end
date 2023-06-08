<script>
export default{
    mounted() {
        fetch("http://localhost:8080/get_shopping_car_info",{
            credentials:'include',
            method: "GET",
        })
        .then(res => res.json())
                .then(data => {
                    console.dir(data)
                })
                
    }
}
</script>

<template>
    <div class="shop-car">
        <div class="title">
            <h2>購物車</h2>
        </div>
        <div class="shop-item">
            <div class="product-box">
                <div class="product">
                    <h2>這裡用v-for 動態產生 下面幾組商品</h2>
                </div>

                <div class="product">
                    <div class="squarebox">
                        <div class="square"> </div>
                    </div>
                    <div class="produt-info">
                        <div class="imgbox">
                            <img src="" alt="pic">
                        </div>
                        <div class="infogroup">
                            <div class="infobox">
                                <h2>商品</h2>
                                <h2>name{{ name }}</h2>
                                <select id="day" class="form-select" aria-label="Default select example">
                                    <option value="一">一</option>
                                    <option value="二">二</option>
                                    <option value="三">三</option>
                                    <option value="四">四</option>
                                    <option value="五">五</option>
                                    <option value="六">六</option>
                                    <option value="七">七</option>
                                </select>
                                <p>$1231</p>
                                <button type="button">取消</button>
                            </div>
                            <div class="selectgroup">
                                <select id="day" class="form-select" aria-label="Default select example">
                                    <option value="一">一</option>
                                    <option value="二">二</option>
                                    <option value="三">三</option>
                                    <option value="四">四</option>
                                    <option value="五">五</option>
                                    <option value="六">六</option>
                                    <option value="七">七</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="product">

                </div>

                <div class="product">

                </div>
            </div>

            <div class="money-box">
                <div class="money">

                    <div class="money-title">
                        <h2>訂單摘要</h2>
                    </div>

                    <div class="money-sum">
                        <h2>訂單金額</h2>
                        <h2>$ : </h2>
                    </div>

                    <div class="money-total">
                        <h2>結帳金額</h2>
                        <h2>$ : </h2>
                    </div>

                    <div class="btn">
                        <button type="button">來去結帳</button>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>


<style lang="scss" scoped>
.shop-car {
    min-width: 1270px;

    .shop-item {
        display: flex;
        height: 90%;
    }

    width: 100%;
    height: 100%;

    .title {
        height: 10%;

        h2 {
            padding: 10px;
            font-weight: bold;
        }
    }

    .product-box {
        width: 50%;
        overflow: auto;

        .product {
            width: 80%;
            height: 200px;
            margin: 5px auto;
            border: 2px black solid;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .squarebox {
                width: 80%;

                .square {
                    width: 50px;
                    height: 50px;
                    background-color: gray;
                }
            }


            .produt-info {
                width: 80%;
                height: 70%;
                margin: 0 auto;
                background-color: yellow;
                display: flex;
                align-items: center;
                justify-content: start;

                .imgbox {
                    width: 120px;
                    height: 120px;
                    margin-left: 20px;
                    background-color: aqua;
                }
                .selectgroup{
                    select{
                        margin: 0;
                        margin-right: 5px;
                        width: 50px;
                        
                        padding: 0;
                    }
                }
                .infobox {
                    display: flex;
                    align-items: center;

                    // justify-content: start;
                    h2,
                    p {
                        width: 50px;
                        font-size: 12px;
                        margin: 0;
                        text-align: center;
                    }

                    button {
                        width: 50px;
                    }

                    .form-select {
                        width: 50px;
                        margin: 0;
                        padding: 0;
                    }

                }
            }
        }
    }

    .money-box {
        width: 50%;

        .money {
            width: 400px;
            height: 400px;
            top: 50;
            right: 200px;
            margin: 0 auto;

            .btn {
                margin-top: 50px;
                width: 100%;
                border: none;

                button {
                    padding: 5px 30px;
                    font-weight: bold;
                    background-color: #E2C2B3;
                    border: 1px black solid;
                    cursor: pointer;
                    transition: 0.7s;
                    border-radius: 10px;
                    box-shadow: 0 10px 10px -5px;

                    &:hover {
                        background-color: #f0dfd7;
                        scale: 1.05;
                    }

                    &:active {
                        scale: 0.9;
                    }
                }
            }

            .money-title {
                h2 {
                    padding-left: 10px;
                    font-size: 25px;
                    font-weight: bold;
                }

                width: 70%;
                background-color: #E2C2B3;
                border-radius: 50px;
            }

            .money-sum,
            .money-total {
                display: flex;
                justify-content: start;

                h2 {
                    font-size: 25px;
                    margin: 10px 20px;
                }
            }
        }
    }
}</style>