<script>

export default {
    data() {
        return {
            commodityList:[]
        }
    },
    mounted() {

        fetch("http://localhost:8080/find_CommodityForManage", {
            credentials: 'include',
            method: "POST",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.commodityList = data.commodityList;

            })
    }
}

</script>

<template>
<div>
    <div class="list">
        <table>
            <tr>
                <th>商品品名</th>
                <th>分類</th>
                <th>價格</th>
                <th>庫存量</th>
                <th>
                    <div class="addBtn">
                        <button type="button">新增商品</button>
                    </div>
                </th>
                
            </tr>
            <tr v-for="comodityInfo in commodityList" :key="comodityInfo.accountSell">
                <td>{{ comodityInfo.name}}</td>
                <td>{{ comodityInfo.category }}</td>
                <td>NT${{ comodityInfo.price}}</td>
                <td>{{ comodityInfo.inventory}}</td>
                <td>
                    <button type="button" @click="">編輯</button>
                    <button type="button" @click="">刪除</button>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<style lang="scss" scoped>

.list {
    margin: 80px;
    border-radius: 10px;
    border: 1px solid black;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: center;
    padding: 8px;
}


button{
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
      &:hover{
         background-color:#d0cfd0 ;
      }
      &:active{
            scale: 1.05;
         }
   }

</style>