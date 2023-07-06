<script>
export default {

    data() {
        return {
            number: 0,
            name: null,
            price: 0,
            inventory: 0,
            category: null,
            introduction: null,
            isDisabled: true, // 預設為禁用狀態
            imgPath: "",
            oldimgPath: "",
            img: null,
            imgUpadte: false
            // commodityNumber: 0,

        };
    },
    methods: {
        // 返回商品管理頁面
        commodityPage() {
            this.$router.push(`/my-market/commodity`)
        },
        // 個別商品詳情的網頁
        detail(test) {
            this.$router.push(`/my-market/commodity?${test}`)
        },
        // 點選編輯按鈕才可以讓使用者輸入
        toggleDisable() {
            this.isDisabled = !this.isDisabled; // 切換禁用狀態
        },
        // 帶入資料庫的既有資料
        editData() {
            let url = window.location.search;
            let str = url.substring(url.indexOf("?") + 1);
            this.number = parseInt(str);
            let body = {
                number: this.number
            }
            fetch("http://localhost:8080/search_com_by_number", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.name = data.commodity.name;
                    this.price = data.commodity.price;
                    this.inventory = data.commodity.inventory;
                    this.category = data.commodity.category;
                    this.introduction = data.commodity.introduction;
                    this.imgPath = `../../pic/${data.commodity.imgPath}.jpg`;

                    this.oldimgPath = `../../pic/${data.commodity.imgPath}.jpg`;

                })

        },

        // 儲存前跳出視窗讓使用者確認一次後再儲存
        handleSubmit() {
            let url = window.location.search;
            let str = url.substring(url.indexOf("?") + 1);
            this.number = parseInt(str);
            let body = {
                number: this.number
            }
            // 確認使用者修改的內容
            const confirmation = `你所修改的內容為\n 商品分類:${this.category} \n 商品名稱:${this.name}\n 商品價格:NT$ ${this.price}\n 商品庫存:${this.inventory}\n 商品介紹:${this.introduction}`;

            // 使用 confirm 彈窗顯示確認訊息
            if (confirm(confirmation)) {
                // 建立更新資料的物件
                const updatedData = {
                    commodityNumber: this.number,
                    category: this.category,
                    name: this.name,
                    price: this.price,
                    inventory: this.inventory,
                    introduction: this.introduction,
                    imgPath: this.imgPath
                };

                fetch("http://localhost:8080/update_commodity", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',
                    body: JSON.stringify(updatedData)
                })
                    .then(res => res.json())
                    .then(data => {
                        // 處理後端回應的邏輯
                        console.log(data);

                        if (data.message == "Successful!!") {
                            alert("更新成功");
                            location.reload();
                        }
                        else {
                            alert("更新失敗");
                            location.reload();

                        }
                    })
                    .catch(error => {
                        // 處理錯誤的邏輯
                        console.error(error);
                    });
            }
        },

        // 提取上傳照片的base64碼
        getImg(e) {
            this.imgUpadte = true;
            const img = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = (e) => {
                this.imgPath = e.target.result;
                console.log(this.imgPath);
            }
            e.target.value = ""
        },
        // 上傳照片
        updatePic(num) {
            let imgSource = this.img.split(",")[1];
            let body = {
                img: imgSource,
                commodityNumber: num
            }

            console.log(body);
            fetch("http://localhost:8080/add_image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.message == "Successful!!") {
                        alert("更新成功");
                        location.reload();
                    }
                    else {
                        alert("更新失敗");
                        location.reload();

                    }
                })

        },
        cancel() {
            console.log("ok");
            this.imgUpadte = false;
            this.imgPath = this.oldimgPath;
        }
    },
    mounted() {
        this.editData();

    }
}
</script>

<template>
    <div>
        <div class="homeBtn">
            <button type="button" @click="commodityPage">返回商品管理</button>
        </div>
        <div class="wrap">
            <div class="InfoBox">
                <div class="comCatergory">
                    <label>商品分類</label>
                    <select class="comSelect" v-model="category" :disabled="isDisabled">
                        <option value="3C產品">3C產品</option>
                        <option value="配件飾品">配件飾品</option>
                        <option value="居家生活">居家生活</option>
                        <option value="休閒用品">休閒用品</option>
                        <option value="美食廣場">美食廣場</option>
                    </select>
                </div>
                <div class="comName">
                    <label for="comName">商品名稱</label>
                    <input type="text" id="comName" v-model="name" :disabled="isDisabled">
                </div>

                <div class="price">
                    <label for="price">價格</label>
                    <input type="number" id="price" v-model="price" :disabled="isDisabled">

                </div>
                <div class="inventory">
                    <label for="inventory">庫存量</label>
                    <input type="number" id="inventory" v-model="inventory" :disabled="isDisabled">
                </div>
                <div class="intro">
                    <label for="intro">商品介紹</label>
                    <textarea id="intro" v-model="introduction" :disabled="isDisabled" cols="50" rows="5">
                        </textarea>
                </div>
            </div>
            <div class="pic-box">
                <div class="pic position-relative  w-100 d-flex align-items-center justify-content-center">
                    <label for="uploadimg" class=" imgBox position-absolute ">
                        <input id="uploadimg" style="display: none;" type="file" @change="getImg">
                        <i class="fa-solid fa-plus"></i>
                    </label>

                    <img v-bind:src="imgPath" alt="img">
                    <!-- <img v-bind:src="commodity.imgPath" alt="img"> -->
                </div>
                <div class="h-20  d-flex align-items-center justify-content-center">
                    <button v-if="imgUpadte" type="button" @click="updatePic(number)">儲存圖片</button>
                    <button v-if="imgUpadte" type="button" @click="cancel()">取消</button>
                </div>
            </div>

        </div>
        <div class="btn-group save-box  d-flex align-items-center justify-content-center">
            <button type="button" @click="toggleDisable" v-if="isDisabled">編輯商品資訊</button>
            <button type="button" @click="toggleDisable" v-else>取消</button>
            <button type="button" @click="handleSubmit">儲存</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.intro{
    textarea{ 
        resize: none;
    }
}
.homeBtn {
    margin: 40px 40px 5px 40px;
}


button {
    border: none;
    background-color: #403234;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 0 15px;
    border-radius: 10px;
    transition: 0.7s;
    cursor: pointer;
    margin: 0 20px;

    &:hover {
        background-color: #d0cfd0;
    }

    &:active {
        scale: 1.05;
    }
}

.imgBox {
    bottom: -25px;
    right: 50px;
}

.save-box{
    button{
        padding: 5px 30px;
    }
}
.wrap {
    background-color: #E2C2B3;
    border-radius: 20px;
    margin: 50px;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    .InfoBox {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 20px;
        padding: 30px;
        border-radius: 10px;

        .comCatergory {
            font-weight: bold;

            .comSelect {
                padding: 5px;
                margin-left: 15px;
                font-size: 18px;
                border: none;
                border-radius: 10px;
                background-color: #F7F3F5;
            }

        }

        label {
            font-weight: bold;
        }

        input {
            border-radius: 10px;
            border: none;
            background-color: #F7F3F5;
            margin: 10px 10px;
            text-align: center;
            font-size: 18px;
        }

    }

    .pic-box {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        margin: auto 0 ;
        .pic {
            width: 300px;
            height: 300px;
            margin-bottom: 70px;

            img {
                border-radius: 50px;
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto;
                display: block;
                object-fit: contain;
            }

            i {
                cursor: pointer;
                font-size: 40px;
                transition: 0.7s;

                &:hover {
                    scale: 1.3;
                }
            }
        }

        

    }
}
</style>